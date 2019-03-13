<?php

$recepient = "seo-beat@yandex.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$city = trim($_POST["city"]);
$commit = trim($_POST["com"]);
$message = "Имя: $name \nТелефон: $phone \nГород: $city\nКомментарий: $commit";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");