<?php

	// Ma clé privée
	$secret = "6LcWJ-wUAAAAABLEtjEx2zg6u8cTHwSO4qcnXpgB";
	// Paramètre renvoyé par le recaptcha
	$response = $_POST['g-recaptcha-response'];
	// On récupère l'IP de l'utilisateur
	$remoteip = $_SERVER['REMOTE_ADDR'];


	$api_url = "https://www.google.com/recaptcha/api/siteverify?secret="
	    . $secret
	    . "&response=" . $response
	    . "&remoteip=" . $remoteip ;

	$decode = json_decode(file_get_contents($api_url), true);

	if(!$response){
		echo "<p class='alert alert-warning'>Please check the the captcha form.</p>";
		exit;
	}

	if ($decode['success'] == true) {

    $firstname = $_POST['first-name'];
    $lastname = $_POST['last-name'];
    $email = $_POST['email-address'];
    $company = $_POST['company'];
    $message = $_POST['your-question'];
    $formcontent="First Name: $firstname \nLast Name: $lastname \nEmail Address: $email \nCompany: $company \nMessage: $message";
    $recipient = "info@aircat-vessels.com";
    $subject = "Contact Form";
    $mailheader = "From: $recipient \r\n";
    mail($recipient, $subject, $formcontent, $mailheader);
		?>
		<script type="text/javascript"> window.location.href = 'https://www.aircat-vessels.com/success.html'</script>

		<?php
		exit();
	}

?>
