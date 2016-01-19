<?php
session_start();
require_once 'config.php';
require_once 'libs/phpmailer/PHPMailerAutoload.php';

$errors = [];

if(isset($_POST['name'], $_POST['email'], $_POST['message'])){

	$fields = [
		'name' => trim($_POST['name']),
		'email' => trim($_POST['email']),
		'message' => trim($_POST['message'])
	];

	foreach($fields as $field => $data){
		if(empty($data)){
			$errors[] = 'The ' . $field . ' field is required.';
		}
	}

	if(empty($errors)){
		$m = new PHPMailer;

		$m->SMTPDebug = 2; //remove in production
		$m->isSMTP();
		$m->SMTPAuth = true;

		// $m->Host = "smtp.gmail.com";
		// $m->Username = 'example@gmail.com';
		// $m->Password = 'password';
		// $m->SMTPSecure = 'ssl';
		// $m->Port = 465;

		$m->Host = "smtp.webfaction.com";
		$m->Username = $coasters_config[0];
		$m->Password = $coasters_config[1];
		$m->SMTPSecure = 'ssl';
		$m->Port = 465;		

		$m->isHTML(true);

		$m->Subject = 'Contact Form Submitted';
		$m->Body = 'From: ' .$fields['name'] . ' (' . $fields['email'] . ')<p>' . $fields['message'] . '</p>';
		
		$m->FromName = 'Contact';

		$m->addAddress('info@plycoasters.co.uk', 'Ply Coasters');

		if($m->send()){
			// header('Location: thanks.php');
			echo 'Thanks! Your message has been recieved.';
		}else{
			echo $m->ErrorInfo;
			$errors[] = 'Sorry, could not send email. Try again later.';
		}


	}

}else{
	$errors[] = 'Something went wrong.';
}

$_SESSION['errors'] = $errors;
$_SESSION['fields'] = $fields;
header('Location: index.php');
?>