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

    const to = process.env.CONTACT_EMAIL || "nexusglobalsuministros@gmail.com";

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el mensaje, inténtalo más tarde." },
      { status: 500 }
    );
  }
}

