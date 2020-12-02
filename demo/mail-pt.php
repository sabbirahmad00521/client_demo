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
		echo "<p class='alert alert-warning'>Verifique o formulário captcha.</p>";
		exit;
	}

	if ($decode['success'] == true) {

    $firstname = $_POST['first-name'];
    $lastname = $_POST['last-name'];
    $email = $_POST['email-address'];
    $company = $_POST['company'];
    $message = $_POST['your-question'];
    $formcontent="Nome: $firstname \nSobrenome: $lastname \nCorreio electronico: $email \nEmpresa: $company \nMensagem: $message";
    $recipient = "info@aircat-vessels.com";
    $subject = "Contact Form";
    $mailheader = "From: $recipient \r\n";
    mail($recipient, $subject, $formcontent, $mailheader);
		?>
		<script type="text/javascript"> window.location.href = 'https://www.aircat-vessels.com/success-pt.html'</script>
		<?php
		exit();
	}

?>
