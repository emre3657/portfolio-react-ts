const API_URL = import.meta.env.VITE_PORTFOLIO_API_URL;
const URL = API_URL ? API_URL + "/api/contact" : "/api/contact";

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  toastId?: number;
};

type ServerResponseData = Omit<Required<ContactActionState>, "toastId">;

export async function sendContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  // Honeypot (bot engelleme)
  if (formData.get("honeypot")) {
    return { status: "success" };
  }

  // Form verilerini nesneye dönüştür
  const payload = Object.fromEntries(formData.entries());

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const subject = String(payload.subject || "").trim();
  const message = String(payload.message || "").trim();

  // Validation
  if (!name) {
    return {
      status: "error",
      message: "Lütfen adınızı yazın.",
      toastId: Date.now(),
    };
  }

  if (!email) {
    return {
      status: "error",
      message: "Lütfen email adresinizi girin.",
      toastId: Date.now(),
    };
  }

  // Basit email pattern (çok katı değil)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Geçerli bir email adresi girin.",
      toastId: Date.now(),
    };
  }

  if (!subject) {
    return {
      status: "error",
      message: "Lütfen konu yazın.",
      toastId: Date.now(),
    };
  }

  if (!message) {
    return {
      status: "error",
      message: "Lütfen bir mesaj yazın.",
      toastId: Date.now(),
    };
  }

  // Backend request
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const payload: ServerResponseData = await res.json();

    if (!res.ok) {
      return {
        status: "error",
        message: payload.message,
        toastId: Date.now(),
      };
    }

    return { status: "success", toastId: Date.now() };
  } catch (err) {
    return {
      status: "error",
      message: "Bilinmeyen bir hata oluştu.",
      toastId: Date.now(),
    };
  }
}
