<?php 
if(isset($_POST['submit'])){
    $to = "info@metaswap.name"; // this is your Email address
    $from = $_POST['info@metaswap.name']; // this is the sender's Email address
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = " Email from MetaOne-website";// this is the Title of the message
    $message0 = $name . " wrote the following:" . "\n\n" . $_POST['message'];

    $message = "Name: $name \n Email: $email \n Message: \n $message";
    $headers = "From:" . $from;

    mail($to,$subject,$message);

    header("Location: /thankYou.html");
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>