<?php
    if(isset($_POST['send'])){
        $to = 'boxkristofer@yahoo.co.uk';
        $subject = 'Feedback from my site';

        $message .= 'Name: ' . $_POST['name']. "\r\n\r\n";
        $message .= 'Email: ' . $_POST['email']. "\r\n\r\n";
        $message .= 'Type: ' . $_POST['type']. "\r\n\r\n";
        $message .= 'Comments: ' . $_POST['comment'];

        $headers = "From: noreply@kriswebsite.com\r\n";
        $headers .= 'Content-Type: text/plain; charset=utf-8';
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        if ($email) {
           $headers .= "\r\nReply-To: $email";
        }

        $success = mail($to, $subject, $message, $headers, '‑fboxkristofer@yahoo.com');
    }

?>
<html>
    <head>
        <link href="../css/reset.css" rel="stylesheet" />
        <link href="../css/main/main.css" rel="stylesheet" id="mainCSS"/>
    </head>

    <body>
        <main>
            <?php if (isset($success) && $success) { ?>
                <header>
                    <h1>Thank You</h1>
                </header>
                <p>Your message has been sent.</p>
                <a href="../index.html">Click here to return to the website</a>
            <?php } else { ?>
                <header>
                    <h1>Oops!</h1>
                </header>
                <p>Sorry, there was a problem sending your message.</p>
                <a href="../index.html">Click here to return to the website</a>
            <?php } ?>
        </main>
    </body>
</html>

