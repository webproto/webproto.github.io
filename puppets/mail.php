<?php
$full_name;$email;$subject;$message;$captcha;
if(isset($_POST['full_name'])){
	$full_name=$_POST['full_name'];
}if(isset($_POST['email'])){
	$email=$_POST['email'];
}if(isset($_POST['subject'])){
	$subject=$_POST['subject'];
}if(isset($_POST['message'])){
	$message=$_POST['message'];
}if(isset($_POST['g-recaptcha-response'])){
	$captcha=$_POST['g-recaptcha-response'];
}
if(!$captcha){
	echo 'Check the reCAPTCHA box.';
	exit;
}
$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LevOywUAAAAAF4qlypSG3340cV_0zBqehqLnmjS&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
if($response.success==false)
{
	// echo 'You are a robot!';
}else
{
	$recepient = "vision_web@mail.ru";
	$sitename = "Название сайта";

	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]);
	// $email = trim($_POST["email"]);
	$message = "Имя: $name \nТелефон: $phone";

	$pagetitle = "Новая заявка с сайта \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

	// echo 'Your message has been sent!';
}
?>