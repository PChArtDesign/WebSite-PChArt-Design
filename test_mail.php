<?php
$to = 'custom@pchartdesign.com';  // Remplacez par votre adresse e-mail
$subject = 'Test de la fonction mail';
$message = 'Ceci est un e-mail de test pour vérifier la configuration de la fonction mail.';
$headers = 'From: webmaster@example.com' . "\r\n" .
           'Reply-To: webmaster@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'E-mail envoyé avec succès';
} else {
    echo 'Échec de l\'envoi de l\'e-mail';
}
?>
