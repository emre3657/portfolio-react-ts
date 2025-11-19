import { useEffect, useRef } from "react";
import "./Lightbox.css";

export type LightboxItem = {
  type: "image" | "video";
  src: string;
  title?: string;
} | null;

interface LightboxProps {
  item: LightboxItem;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Scroll lock + ESC + focus trap (TAB)
  useEffect(() => {
    if (!item) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [item]);

  // Açıldığında ilk focus'u modal içine al
  useEffect(() => {
    if (!item) return;

    const content = contentRef.current;
    if (!content) return;

    const focusable = content.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusable.length > 0) {
      focusable[0].focus();
    } else {
      // Yine de içerik fokusa alınabilsin
      if (!content.hasAttribute("tabindex")) {
        content.setAttribute("tabindex", "-1");
      }
      content.focus();
    }
  }, [item]);

  if (!item) return null;

  // Focus trap + ESC
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key !== "Tab") return;

    const content = contentRef.current;
    if (!content) return;

    const focusable = content.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusable.length === 0) {
      e.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (e.shiftKey) {
      // SHIFT + TAB
      if (active === first || !content.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Normal TAB
      if (active === last || !content.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    const clickedOutsideContent =
      !target.closest(".lightbox-content") &&
      !target.closest(".lightbox-close");

    if (clickedOutsideContent) {
      onClose();
    }
  };

  return (
    <div
      className="lightbox-backdrop is-open"
      role="dialog"
      aria-modal="true"
      aria-label={item.title || "Görsel önizleme"}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Kapat"
      >
        ✕
      </button>

      <div className="lightbox-content" ref={contentRef}>
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            className="lightbox-video"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title || ""}
            className="lightbox-image"
          />
        )}
      </div>
    </div>
  );
}
