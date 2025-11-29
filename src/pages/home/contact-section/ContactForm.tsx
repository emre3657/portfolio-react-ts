import { useActionState, useRef, useEffect, startTransition } from "react";
import { sendContact, type ContactActionState } from "../../../utility/contact";
import { useApiStatus } from "../../../context/customHooks";

export function ContactForm() {
  const [state, formAction, pending] = useActionState<
    ContactActionState,
    FormData
  >(sendContact, { status: "idle" });

  const { state: apiState, isReady } = useApiStatus();

  const formRef = useRef<HTMLFormElement | null>(null);

  const showSuccess = state.status === "success";
  const showError = state.status === "error";
  const showWarning = state.status === "warning";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // React burada sendContact'i çağırıp, sonucu state'e yazacak
    startTransition(() => formAction(formData));
  };

  // Sadece success olduğunda formu sıfırla
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className="contact-form">
      <form id="contactform" ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Adınız</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Konu</label>
          <input type="text" id="subject" name="subject" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mesajınız</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <input
          type="text"
          name="honeypot"
          autoComplete="off"
          style={{ display: "none" }}
        />

        <button type="submit" className="btn" disabled={pending || !isReady}>
          {apiState === "error" || apiState === "pending"
            ? "Şu an mesaj gönderilemez!"
            : pending
            ? "Gönderiliyor..."
            : "Mesaj Gönder"}
        </button>
      </form>

      {showSuccess && (
        <div key={state.toastId} className="toast toast-success">
          Mesajınız başarıyla gönderildi ✅
        </div>
      )}

      {showError && (
        <div key={state.toastId} className="toast toast-error">
          {state.message || "Bir hata oluştu."}
        </div>
      )}

      {showWarning && (
        <div key={state.toastId} className="toast toast-warning">
          {state.message}
        </div>
      )}
    </div>
  );
}
