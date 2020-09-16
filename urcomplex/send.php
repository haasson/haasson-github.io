<?php


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

require __DIR__ . '/compoundMsg.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// адрес отправиттеля, чаще совпадает с адресом почтового ящика, который используется для отправки почты
$from = '235433435435@mail.ru';

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
    'license-help',
    'license-type-1',
    'license-type-2',
    'license-type-3',
    'license-type-4',
    'license-type-5',
    'license-type-6',
    'refuse-type-1',
    'refuse-type-2',
    'refuse-type-3',
    'refuse-type-4',
    'refuse-type-5',
    'refuse-type-6',
    'refuse-type-7',
    'refuse-type-8',
    'refuse-type-9',
    'refuse-type-10',
    'refuse-type-11',
    'has-transport',
    'has-equipment',
    'has-place',
    'provider',
    'phone',
    'email',
    'name'
  ));
  
  //Server settings
  $mail->CharSet = "UTF-8";
  $mail->SMTPDebug = 0;                                       // Enable verbose debug output
  $mail->isSMTP();                                            // Set mailer to use SMTP
  $mail->Host       = 'smtp.mail.ru';  // Specify main and backup SMTP servers
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = '235433435435@mail.ru';                     // SMTP username
  $mail->Password   = 'zaxscdvf123456';                               // SMTP password
  $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
  $mail->Port       = 465;                                    // TCP port to connect to
  
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