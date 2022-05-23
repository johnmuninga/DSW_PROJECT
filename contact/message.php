<?php
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if(!empty($email) && !empty($message) && !empty($name) && !empty($surname) && !empty($phone)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            $receiver = "menteproject97@gmail.com";
            $subject = "From: $name <$email>";
            $body = "Name: $name\nSurname: $surname\nPhone: $phone\nEmail: $email\n\nMessage:\n$message\n\nRegards,\n$name";
            $sender = "From: $email";
            if(mail($receiver, $subject, $body, $sender)){

            echo "Your message has been sent";

            }else{


            echo "Sorry, failed to send your message!";

            }

        } else{

            echo "Please enter a valid email address";
        
        }

    } else{

        echo "Please fill in all fields!";
        
    }
?>