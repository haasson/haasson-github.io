<?php

function getMsg($inputs) {
  $msg = '<table style="max-width: 1000px;font-family: sans-serif;border-collapse: collapse; border-top: 1px solid #a9a9a9;border-bottom: 1px solid #a9a9a9">';
  $msg .= '<caption style="font-size: 1.2em; font-weight: bold; padding: 10px 0">' . $inputs['submit'] . '</caption>';
  $counter = 1;

  foreach ($inputs as $inputName => $inputValue) {
    $style = $counter%2 === 0 ? 'style="background-color: #efefef"' : '';

    $msg .= '<tr ' . $style . '><td style="font-weight: bold; height: 2em;padding-right: 20px;padding-left: 10px;text-align: right">' . 
      getRus($inputName) . 
      '</td><td style="height: 1.5em;padding: 10px">' . 
      $inputValue . 
      '</td></tr>';
      $counter++;
  }

  $msg .= '</table>';

  return $msg;
}

function getRus($val) {
  switch ($val) {
    case 'name': return 'Имя';
    case 'Получить_чек-лист': return str_replace('_', ' ', $val);
    case 'Записаться': return 'Записаться на консультацию';
    case 'Позвоните_в': return str_replace('_', ' ', $val);
    case 'Получить_презентацию': return str_replace('_', ' ', $val);
    case 'Получить_предложение': return str_replace('_', ' ', $val);
    case 'Получить_КП': return str_replace('_', ' ', $val);
    case 'email_Получить_КП': return str_replace('_', ' ', $val);
    case 'Получить_реестр': return str_replace('_', ' ', $val);
    case 'email_Получить_реестр': return 'Получить_реестр на email';
    case 'Получить_пример_заключения': return str_replace('_', ' ', $val);
    case 'Записаться_к_эксперту': return str_replace('_', ' ', $val);
    case 'Записаться_на_консультацию': return str_replace('_', ' ', $val);
    case 'Где_расположен_ваш_объект?': return str_replace('_', ' ', $val);
    case 'Другое_Где_расположен_ваш_объект?': return str_replace('_', ' ', $val);
    case 'Укажите_тип_объекта': return str_replace('_', ' ', $val);
    case 'Другое_Укажите_тип_объекта': return str_replace('_', ' ', $val);
    case 'Укажите_площадь_объекта': return str_replace('_', ' ', $val);
    case 'Другое_Укажите_площадь_объекта': return str_replace('_', ' ', $val);
    case 'Укажите_высоту_объекта': return str_replace('_', ' ', $val);
    case 'Другое_Укажите_высоту_объекта': return str_replace('_', ' ', $val);
    case 'Укажите_цель_экспертизы': return str_replace('_', ' ', $val);
    case 'Другое_Укажите_цель_экспертизы': return str_replace('_', ' ', $val);
    case 'Получить_КП_и_программу': return str_replace('_', ' ', $val);
    case 'userfile': return 'Тут файл';
    default: return $val;
  }
}