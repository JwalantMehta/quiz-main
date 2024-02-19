<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Your email address where you want to receive messages
    $to = 'jwalantmehta2003@gmail.com';

    $subject = 'New Contact Us Message';
    $message = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Message: ' . $message;
    $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo '<p>Your message has been sent successfully!</p>';
    } else {
        echo '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}
?>
