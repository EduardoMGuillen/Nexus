import { NextResponse } from "next/server";
import {
  createSmtpTransport,
  escapeHtml,
  getNotificationEmail,
} from "@/lib/mail";

export const runtime = "nodejs";

type PackageType = "basic" | "premium" | "subscription";

const PACKAGE_LABEL: Record<PackageType, string> = {
  basic: "Basic Website — 300 USD (pago único)",
  premium: "Premium Website — 500 USD (pago único)",
  subscription: "Plan Mantenimiento + Hosting (suscripción PayPal)",
};

function isPackageType(v: unknown): v is PackageType {
  return v === "basic" || v === "premium" || v === "subscription";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      packageType,
      paypalOrderId,
      paypalSubscriptionId,
      name,
      email,
      phone,
      filesUrl,
    } = body as Record<string, unknown>;

    if (!isPackageType(packageType)) {
      return NextResponse.json(
        { success: false, error: "Tipo de paquete no válido" },
        { status: 400 }
      );
    }

    const nameStr = typeof name === "string" ? name.trim() : "";
    const emailStr = typeof email === "string" ? email.trim() : "";
    const phoneStr = typeof phone === "string" ? phone.trim() : "";
    const filesStr = typeof filesUrl === "string" ? filesUrl.trim() : "";

    if (!nameStr || !emailStr || !phoneStr) {
      return NextResponse.json(
        { success: false, error: "Faltan nombre, email o teléfono" },
        { status: 400 }
      );
    }

    const orderId =
      typeof paypalOrderId === "string" && paypalOrderId.trim()
        ? paypalOrderId.trim()
        : null;
    const subId =
      typeof paypalSubscriptionId === "string" && paypalSubscriptionId.trim()
        ? paypalSubscriptionId.trim()
        : null;

    if (!orderId && !subId) {
      return NextResponse.json(
        { success: false, error: "Falta identificador de PayPal" },
        { status: 400 }
      );
    }

    if (filesStr) {
      try {
        const u = new URL(filesStr);
        if (u.protocol !== "http:" && u.protocol !== "https:") {
          return NextResponse.json(
            { success: false, error: "Enlace de archivos no válido" },
            { status: 400 }
          );
        }
      } catch {
        return NextResponse.json(
          { success: false, error: "Enlace de archivos no válido" },
          { status: 400 }
        );
      }
    }

    const transporter = createSmtpTransport();
    if (!transporter) {
      console.error("SMTP env vars are missing (order-notification)");
      return NextResponse.json(
        { success: false, error: "Configuración de correo incompleta" },
        { status: 500 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    if (!smtpUser) {
      return NextResponse.json(
        { success: false, error: "Configuración de correo incompleta" },
        { status: 500 }
      );
    }

    const to = getNotificationEmail();
    const pkgLabel = PACKAGE_LABEL[packageType];
    const when = new Date().toISOString();
    const paypalRef = orderId
      ? `ID de pedido (orden) PayPal: ${orderId}`
      : `ID de suscripción PayPal: ${subId}`;

    const safe = {
      name: escapeHtml(nameStr),
      email: escapeHtml(emailStr),
      phone: escapeHtml(phoneStr),
      files: filesStr ? escapeHtml(filesStr) : "",
      pkg: escapeHtml(pkgLabel),
      paypalLine: escapeHtml(paypalRef),
      when: escapeHtml(when),
    };

    const textBody = `
NUEVA COMPRA / ORDEN — Nexus Global
====================================
Paquete: ${pkgLabel}
${paypalRef}
Fecha (UTC): ${when}

Datos del cliente
-----------------
Nombre: ${nameStr}
Email: ${emailStr}
Teléfono: ${phoneStr}
Enlace a archivos (Drive, etc.): ${filesStr || "No indicado"}

Responder al cliente: ${emailStr}
`.trim();

    const htmlBody = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:24px;background:#0f172a;font-family:Segoe UI,system-ui,sans-serif;color:#e2e8f0;">
  <table role="presentation" width="100%" style="max-width:640px;margin:0 auto;background:#1e293b;border-radius:12px;border:1px solid #334155;overflow:hidden;">
    <tr>
      <td style="padding:28px 32px;background:linear-gradient(135deg,#0f766e,#15803d);">
        <h1 style="margin:0;font-size:20px;color:#fff;">Nueva compra — Nexus Global</h1>
        <p style="margin:8px 0 0;font-size:14px;color:#ecfdf5;opacity:.95;">${safe.pkg}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px;">
        <p style="margin:0 0 16px;font-size:13px;color:#94a3b8;">${safe.paypalLine}<br /><span style="color:#64748b;">${safe.when}</span></p>
        <h2 style="margin:0 0 12px;font-size:15px;color:#f8fafc;">Datos del cliente</h2>
        <table role="presentation" style="width:100%;font-size:14px;color:#cbd5e1;">
          <tr><td style="padding:6px 0;color:#94a3b8;width:140px;">Nombre</td><td style="padding:6px 0;"><strong style="color:#f1f5f9;">${safe.name}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#94a3b8;">Email</td><td style="padding:6px 0;"><a href="mailto:${emailStr.replace(/"/g, "")}" style="color:#34d399;">${safe.email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#94a3b8;">Teléfono</td><td style="padding:6px 0;">${safe.phone}</td></tr>
          <tr><td style="padding:6px 0;color:#94a3b8;vertical-align:top;">Archivos</td><td style="padding:6px 0;">${
            filesStr
              ? `<a href="${encodeURI(filesStr)}" style="color:#34d399;word-break:break-all;">${safe.files}</a>`
              : '<span style="color:#64748b;">No indicado</span>'
          }</td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Nexus Global — Ventas" <${smtpUser}>`,
      to,
      replyTo: emailStr,
      subject: `[Nexus] Nueva compra: ${pkgLabel} — ${nameStr}`,
      text: textBody,
      html: htmlBody,
    });

    const buyerText = `
Hola ${nameStr},

Hemos registrado correctamente tu ${packageType === "subscription" ? "suscripción" : "compra"} en Nexus Global.

${orderId ? `Referencia de pedido PayPal: ${orderId}` : `Referencia de suscripción PayPal: ${subId}`}

Nos pondremos en contacto contigo pronto usando los datos que indicaste.

Saludos,
Nexus Global
`.trim();

    const buyerHtml = `
<div style="font-family:Segoe UI,system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8fafc;">
  <div style="background:#fff;padding:28px;border-radius:12px;border:1px solid #e2e8f0;">
    <h2 style="color:#0f172a;margin-top:0;">Hola ${safe.name}</h2>
    <p style="color:#475569;line-height:1.6;">Hemos registrado correctamente tu ${packageType === "subscription" ? "suscripción" : "compra"}.</p>
    <p style="color:#475569;font-size:14px;"><strong>Referencia:</strong> ${escapeHtml(orderId ?? subId ?? "")}</p>
    <p style="color:#475569;line-height:1.6;">Nos pondremos en contacto contigo pronto.</p>
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
    <p style="color:#94a3b8;font-size:13px;margin:0;">Nexus Global</p>
  </div>
</div>`;

    await transporter.sendMail({
      from: `"Nexus Global" <${smtpUser}>`,
      to: emailStr,
      replyTo: to,
      subject:
        packageType === "subscription"
          ? `Confirmación de suscripción — Nexus Global`
          : `Confirmación de compra — Nexus Global`,
      text: buyerText,
      html: buyerHtml,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    const err = e as Error & { code?: string; responseCode?: number };
    console.error("order-notification", err?.message ?? e, err?.code, err?.responseCode);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar la notificación" },
      { status: 500 }
    );
  }
}
