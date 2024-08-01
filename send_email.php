<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $reason = htmlspecialchars($_POST['reason']);
    $issue = htmlspecialchars($_POST['issue'] ?? '');
    $product = htmlspecialchars($_POST['product'] ?? '');
    $budget = htmlspecialchars($_POST['budget'] ?? '');
    $comments = htmlspecialchars($_POST['comments'] ?? '');

    // Adresse e-mail de destination
    $to = "paulinechailloux@rocketmail.com";  // Remplacez par votre adresse e-mail
    // $to = "custom@pchartdesign.com";  // Remplacez par votre adresse e-mail
    $subject = "Nouveau message de contact - $reason";

    // Construction du message
    $message = "Nom: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Raison du Contact: $reason\n\n";
    if ($reason == "support") {
        $message .= "Problème:\n$issue\n";
    } elseif ($reason == "sales") {
        $message .= "Produit d'intérêt: $product\n";
        $message .= "Budget: $budget\n";
    } elseif ($reason == "feedback") {
        $message .= "Commentaires:\n$comments\n";
    }

    // En-têtes de l'e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envoi de l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès!";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer plus tard.";
    }
} else {
    echo "Méthode de requête non autorisée.";
}
?>
