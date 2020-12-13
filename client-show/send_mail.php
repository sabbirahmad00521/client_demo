<?php



//end user details to owner
   $name = $_POST['name'];
    $email = $_POST['email'];
    $email = trim($email);
    $message = $_POST['msg'];
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

   $to = "mdwesq@gmail.com";

   $subject = "Contact Form Submission";

   $headers = "From: ". $email;


  $msg ="
Name: $name
Email: $email
Message: $message
";

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo json_encode(['status' => 'error', 'message' => ' Please write email in correct format...']);
  } elseif (mail($to, $subject, $msg, $headers)) {
      echo json_encode(['status' => 'success', 'message' => 'We have receieved your Message, We will contact you soon.']);
  } else {
      echo json_encode(['status' => 'error', 'message' => ' email cant be sent.']);
  }
