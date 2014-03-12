<?php
    $from = $_POST["name"]; // sender
    $email = $_POST["email"];
    $message = $_POST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    mail("aishwarya.chaturvedi050@gmail.com","website email",$message,"From: $from\n");
    echo "Thank you for emailing, i will be in contact shortly";
?>