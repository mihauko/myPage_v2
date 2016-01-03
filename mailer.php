<?php

    // Get the form fields, removes html tags and whitespace.
    // $name = strip_tags(trim($_POST["name"]));
    // $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check the data.
    if (empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.michal-winiarski.pl?success=-1#contact");
        exit;
    }
    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "michal-winiarski@michal-winiarski.pl";

    // Set the email subject.
    $subject = "New contact $email";

    // Build the email content.
    // $email_content = "Name: $name\n";

    $email_content = "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // $email_con = "Email: $email\n\n";
    // $email_con .= "Message: \n$message\n";
    // Build the email headers.
    $email_headers = "From: <$email>\n";
    // $email_head = "From <$email>\n";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_header);
    
    // Redirect to the index.html page with success code
    header("Location: http://www.michal-winiarski.pl?success=1#contact");

?>