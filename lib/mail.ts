import nodemailer from "nodemailer";

/**
 * Gmail y otros: la "contraseña de aplicación" a veces se pega con espacios;
 * Google espera 16 caracteres seguidos.
 */
function normalizeSmtpPass(pass: string): string {
  return pass.trim().replace(/\s+/g, "");
}

export function createSmtpTransport(): nodemailer.Transporter | null {
  const host = process.env.SMTP_HOST?.trim();
  const portRaw = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const passRaw = process.env.SMTP_PASS;

  if (!host || !portRaw || !user || !passRaw) {
    return null;
  }

  const pass = normalizeSmtpPass(passRaw);
  if (!pass) {
    return null;
  }

  const port = Number(portRaw);
  const useSsl = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure: useSsl,
    requireTLS: !useSsl && port === 587,
    auth: { user, pass },
    connectionTimeout: 25_000,
    greetingTimeout: 25_000,
    socketTimeout: 25_000,
    tls: {
      minVersion: "TLSv1.2",
    },
  });
}

export function getNotificationEmail(): string {
  return process.env.CONTACT_EMAIL ?? "Eduardoguillendev@proton.me";
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
