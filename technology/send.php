<?php


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

require __DIR__ . '/compoundMsg.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// адрес отправиттеля, чаще совпадает с адресом почтового ящика, который используется для отправки почты
$from = 'haasson22@yandex.ru';

// адрес/адреса получателя
$to = array('haasson22@gmail.com');

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

  // Этот код писал не я, по сути он перебирает имена полей и возвращает массив с теми, что есть в запросе
  // это позволяет использовать код более универсально для разных форм
  function CheckValue($values) {
    foreach ($values as $val) {
      if (isset($_POST[$val])) {
        $req[$val] = htmlspecialchars($_POST[$val]);
      }
    }
    return $req;
  }

  // массив со списком имен полей, в данном случае для моего последнего проекта (names of inputs)
  $inputs = CheckValue(array(
    'reason',
    'time',
    'call-time',
    'service-1',
    'service-2',
    'service-3',
    'service-4',
    'service-5',
    'service-6',
    'service-7',
    'service-8',
    'service-9',
    'service-10',
    'transport-1',
    'transport-2',
    'transport-3',
    'transport-4',
    'equipment-1',
    'equipment-2',
    'equipment-3',
    'cars',
    'check',
    'personal',
    'city',
    'amount',
    'salary',
    'place-1',
    'place-2',
    'inn',
    'brand',
    'year',
    'provider',
    'phone',
    'name'
  ));
  
  //Server settings
  $mail->CharSet = "UTF-8";
  $mail->SMTPDebug = 0;                                       // Enable verbose debug output
  $mail->isSMTP();                                            // Set mailer to use SMTP
  $mail->Host       = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'haasson22@yandex.ru';                     // SMTP username
  $mail->Password   = 'MnE18let';                               // SMTP password
  $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
  $mail->Port       = 587;                                    // TCP port to connect to
  
  //Recipients
  $mail->AddReplyTo( $from );
	$mail->From = $from; 
  $mail->FromName = 'Заявка с сайта'; 
  
	foreach($to as $to_add){
		$mail->AddAddress($to_add); 
  }

  // заголовок письма, эту строку я обычно не трогаю
  $mail->Subject = 'Новая заявка' . ' - ' . $inputs['reason'] . ' - ' . $inputs['phone'];


  // compound msg
  // формирует html код с помощью функции из файла compoundMsg.php, функцию писал я, можно не использовать её и написать что-то попроще
  $msg = getMsg($inputs);
  
  $mail->MsgHTML($msg);
  
  // отправка
  $mail->send();

} catch (Exception $e) {
  //die('stop');
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}