<?php
// Include PHPMailer files (ensure you have the correct path if you use Composer)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php';  // If using Composer, include this line

// Load environment variables from .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$gmail_name= getenv('GMAIL_NAME');
$gmail_pass= getenv('GMAIL_PASS');

// Mail content
$body = "From: $name <br> E-Mail: $email <br> Message: <br> $message";

// Create PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Set up SMTP for Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $gmail_name; // Your Gmail email address
    $mail->Password = $gmail_pass;  // Your Gmail app password (not your regular Gmail password)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress($gmail_name);  // Your Gmail address
    $mail->addReplyTo($email, $name);
    
    // Email Content
    $mail->isHTML(true);
    $mail->Subject = "New Message from portfolio: $subject";
    $mail->Body    = $body;

    // Send the email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
