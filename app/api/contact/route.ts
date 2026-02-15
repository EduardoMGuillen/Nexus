import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Configura estas variables de entorno en tu hosting (.env.local)
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) {
      console.error("SMTP env vars are missing");
      return NextResponse.json(
        { success: false, error: "La configuración del servidor de correo no está completa" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: {
        user,
        pass,
      },
    });

    const to = process.env.CONTACT_EMAIL || "Eduardoguillendev@proton.me";

    // 1. Email to Nexus (notification with contact details)
    await transporter.sendMail({
      from: `"Nexus Global Website" <${user}>`,
      to,
      subject: `Nuevo mensaje de contacto - ${name}`,
      replyTo: email,
      text: `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "No especificado"}

Mensaje:
${message}
      `.trim(),
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // 2. Auto-reply to the client
    await transporter.sendMail({
      from: `"Nexus Global" <${user}>`,
      to: email,
      replyTo: "Eduardoguillendev@proton.me",
      subject: `Gracias por contactarnos, ${name}`,
      text: `
Hola ${name},

Gracias por ponerte en contacto con Nexus Global. Hemos recibido tu mensaje y nuestro equipo lo revisará a la brevedad.

Te responderemos lo antes posible.

Saludos,
Nexus Global
nexusglobalsuministros.com
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #f8fafc; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #0f172a; font-size: 24px; margin: 0;">Nexus Global</h1>
          </div>
          <div style="background-color: #ffffff; padding: 32px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0f172a; font-size: 20px; margin-top: 0;">¡Hola ${name}!</h2>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nuestro equipo lo revisará a la brevedad.
            </p>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Te responderemos lo antes posible.
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 0;">
              Saludos,<br />
              <strong style="color: #0f172a;">Nexus Global</strong><br />
              <a href="https://www.nexusglobalsuministros.com" style="color: #22c55e; text-decoration: none;">nexusglobalsuministros.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el mensaje, inténtalo más tarde." },
      { status: 500 }
    );
  }
}

