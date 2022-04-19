<?php 
// $receiver = "smeu.dragos1982@gmail.com";
// $subject = "Email test via PHP localhost";
// $body = "Hello, this is a test message";
// $sender = "smeu.dragos1982@gmail.com";
if(mail($receiver, $subject, $body, $sender)){
    echo "Email sent to $receiver";
}
else {
    echo "Error sending the mail!";
}
?>