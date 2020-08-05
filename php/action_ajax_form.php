<?php
  $token = "1280328336:AAHng1jZ5X3mOIDHolaJ0xN_DFNt6fMFhfE"; 
  $chat_id = "-1001163041178";

  $to = "matvienkoigor956@gmail.com, agency@sweetgirls.com.ua";
  $subject = "Заявка с сайта";
  $headers = "From: SweetGirls@example.com";

  $name = trim($_POST["name"]);
  $phone = trim($_POST["phone"]);  
  $email = trim($_POST["email"]);  

  $result = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Email: ' => $email
  ); 

  foreach($result as $key => $value) {
    $txt_for_tg .= "<b>" . $key . "</b> " . $value . "%0A";
    $txt_for_mail .= $key . $value . "\r\n";
  };

  echo json_encode($result);

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt_for_tg}","r");

  mail($to, $subject, $txt_for_mail, $headers);
?>