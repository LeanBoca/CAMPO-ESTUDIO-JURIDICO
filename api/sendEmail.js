import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { nombre, email, mensaje } = req.body;

    // Configura el transporte para enviar emails
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Cambia a otro servicio si no usas Gmail
        auth: {
            user: process.env.EMAIL_USER, // Configura variables de entorno en Vercel
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Envía el email
        await transporter.sendMail({
            from: `"Formulario Contacto" <${process.env.EMAIL_USER}>`,
            to: 'gasenk@hotmail.com', // Reemplaza con tu correo de destino
            subject: `Nuevo mensaje de ${nombre}`,
            text: `Has recibido un mensaje de ${nombre} (${email}):\n\n${mensaje}`,
        });

        return res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return res.status(500).json({ message: 'Error al enviar el mensaje' });
    }
}
