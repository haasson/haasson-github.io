<?php


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

require __DIR__ . '/compoundMsg.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$from = 'agruppa72from@bk.ru';
$to = array('zakaz@agruppa72.ru', 'agruppa7272@Yandex.ru');

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

  function CheckValue($values) {
    foreach ($values as $val) {
      if (isset($_POST[$val])) {
        $req[$val] = htmlspecialchars($_POST[$val]);
      }
    }
    return $req;
  }

  $inputs = CheckValue(array(
    'name',
    'Получить_чек-лист',
    'Записаться',
    'Позвоните_в',
    'Получить_предложение',
    'Получить_презентацию',
    'Получить_реестр',
    'email_Получить_реестр',
    'Получить_пример_заключения',
    'Получить_КП',
    'email_Получить_КП',
    'Записаться_к_эксперту',
    'userfile',
    'Записаться_на_консультацию',
    'Где_расположен_ваш_объект?',
    'Укажите_тип_объекта',
    'Укажите_площадь_объекта',
    'Укажите_высоту_объекта',
    'Укажите_цель_экспертизы',
    'Другое_Где_расположен_ваш_объект?',
    'Другое_Укажите_тип_объекта',
    'Другое_Укажите_площадь_объекта',
    'Другое_Укажите_высоту_объекта',
    'Другое_Укажите_цель_экспертизы',
    'Получить_КП_и_программу'
  ));
  
  //Server settings
  $mail->CharSet = "UTF-8";
  $mail->SMTPDebug = 0;                                       // Enable verbose debug output
  $mail->isSMTP();                                            // Set mailer to use SMTP
  $mail->Host       = 'smtp.mail.ru';  // Specify main and backup SMTP servers
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'agruppa72from@bk.ru';                     // SMTP username
  $mail->Password   = 'APttRR1$4bri';                               // SMTP password
  $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
  $mail->Port       = 465;                                    // TCP port to connect to
  
  //Recipients
  $mail->AddReplyTo( $from );
	$mail->From = $from; 
  $mail->FromName = $_SERVER[ "HTTP_HOST" ]; 
  
	foreach($to as $to_add){
		$mail->AddAddress($to_add); 
  }

  $mail->Subject = $_SERVER[ "HTTP_HOST" ] . ' - ' . $inputs['reason'] . ' - ' . $inputs['phone'];

  // get file code
  if (array_key_exists('userfile', $_FILES)) {
    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }
  }

  // compound msg

  $msg = getMsg($inputs);
  
  $mail->MsgHTML($msg);
  
  $mail->send();



} catch (Exception $e) {
  // die('stop');
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}