const API_URL = import.meta.env.VITE_PORTFOLIO_API_URL;
const URL = API_URL ? API_URL + "/api/contact" : "/api/contact";

export type ContactActionState = {
  status: "idle" | "success" | "error" | "warning";
  message?: string;
  toastId?: number;
};

type ServerResponseCodes =
  | "INVALID_REQUEST"
  | "BAD_REQUEST"
  | "ADMIN_MAIL_FAILED"
  | "AUTO_REPLY_FAILED"
  | "OK"
  | "UNEXPECTED_ERROR";

type ServerResponse = {
  status: "success" | "error";
  message: string;
  code: ServerResponseCodes;
  meta?: {
    adminMailId?: string;
    autoMailId?: string;
  };
};

function errorState(message: string): ContactActionState {
  return {
    status: "error",
    message,
    toastId: Date.now(),
  };
}
function warningState(message: string): ContactActionState {
  return {
    status: "warning",
    message,
    toastId: Date.now(),
  };
}

export async function sendContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  // Honeybot check
  if (formData.get("honeypot")) {
    return { status: "success" };
  }

  const entries = Object.fromEntries(formData.entries());
  const name = String(entries.name || "").trim();
  const email = String(entries.email || "").trim();
  const subject = String(entries.subject || "").trim();
  const message = String(entries.message || "").trim();
  const honeypot = String(entries.honeypot || "").trim();

  // Validations
  if (!name) return errorState("Lütfen adınızı yazın.");
  if (!email) return errorState("Lütfen email adresinizi girin.");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return errorState("Geçerli bir email adresi girin.");
  }

  if (!subject) return errorState("Lütfen konu yazın.");
  if (!message) return errorState("Lütfen bir mesaj yazın.");

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message, honeypot }),
    });

    const payload: ServerResponse = await res.json();

    switch (payload.code) {
      case "INVALID_REQUEST":
        return errorState("Geçersiz istek.");
      case "BAD_REQUEST":
        return errorState("Tüm alanlar zorunlu!");
      case "ADMIN_MAIL_FAILED":
      case "UNEXPECTED_ERROR":
        return errorState(payload.message);

      case "AUTO_REPLY_FAILED":
        return warningState(payload.message);

      case "OK":
      default:
        return {
          status: "success",
          toastId: Date.now(),
        };
    }
  } catch (err) {
    return errorState("Bilinmeyen bir hata oluştu.");
  }
}
