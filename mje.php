<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    $to = "gasenk@hotmail.com"; // Cambia esto por tu dirección de correo electrónico
    $subject = "Nuevo mensaje desde el formulario de contacto";
    $body = "Nombre: $nombre\nEmail: $email\n\nMensaje:\n$mensaje";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "El mensaje ha sido enviado.";
    } else {
        echo "Hubo un problema al enviar el mensaje.";
    }
}
?>
