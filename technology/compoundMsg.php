<?php

function getMsg($inputs) {
  $msg = '<table style="max-width: 1000px;font-family: sans-serif;border-collapse: collapse; border-top: 1px solid #a9a9a9;border-bottom: 1px solid #a9a9a9">';
  $msg .= '<caption style="font-size: 1.2em; font-weight: bold; padding: 10px 0">' . $inputs['reason'] . '</caption>';
  $counter = 1;
  $currentInputName = '';
  unset($inputs['reason']);

  foreach ($inputs as $inputName => $inputValue) {
    $name = $inputName;
    if (strcmp ($currentInputName, getRus($inputName)) === 0) {
      $counter++;
      $name = '';
    }
    $style = $counter%2 === 0 ? 'style="background-color: #efefef"' : '';
    $currentInputName = getRus($inputName);

    $msg .= '<tr ' . $style . '><td style="font-weight: bold; height: 2em;padding-right: 20px;padding-left: 10px;text-align: right">' . 
      getRus($name) . 
      '</td><td style="height: 1.5em;padding: 10px">' . 
      $inputValue . 
      '</td></tr>';
      
      $counter++;
  }

  $msg .= '</table>';

  return $msg;
  return $inputsg;
}

// код в этом файле формирует таблицу, для удобочитемости я прохожусь по именам полей и заменяю на более понятные текстовые строки
function getRus($val) {
  switch ($val) {
    case 'license-help': return 'Какая помощь в получении лицензии нужна?';
    case 'license-type-1': return 'На какие виды работ нужна лицензия?';
    case 'license-type-2': return 'На какие виды работ нужна лицензия?';
    case 'license-type-3': return 'На какие виды работ нужна лицензия?';
    case 'license-type-4': return 'На какие виды работ нужна лицензия?';
    case 'license-type-5': return 'На какие виды работ нужна лицензия?';
    case 'license-type-6': return 'На какие виды работ нужна лицензия?';

    case 'time': return 'Когда позвонить позвонить';
    case 'call-time': return 'В какое время';
    case 'service-1': return 'Какие услуги Вы планируете оказывать?';
    case 'service-2': return 'Какие услуги Вы планируете оказывать?';
    case 'service-3': return 'Какие услуги Вы планируете оказывать?';
    case 'service-4': return 'Какие услуги Вы планируете оказывать?';
    case 'service-5': return 'Какие услуги Вы планируете оказывать?';
    case 'service-6': return 'Какие услуги Вы планируете оказывать?';
    case 'service-7': return 'Какие услуги Вы планируете оказывать?';
    case 'service-8': return 'Какие услуги Вы планируете оказывать?';
    case 'service-9': return 'Какие услуги Вы планируете оказывать?';
    case 'service-10': return 'Какие услуги Вы планируете оказывать?';
    case 'transport-1': return 'Какой транспорт планируете обслуживать?';
    case 'transport-2': return 'Какой транспорт планируете обслуживать?';
    case 'transport-3': return 'Какой транспорт планируете обслуживать?';
    case 'transport-4': return 'Какой транспорт планируете обслуживать?';
    case 'equipment-1': return 'Какое оборудование Вас интересует?';
    case 'equipment-2': return 'Какое оборудование Вас интересует?';
    case 'equipment-3': return 'Какое оборудование Вас интересует?';
    case 'cars': return 'Сколько автомобилей Вы обслуживаете в день?';
    case 'check': return 'Средний чек с одного автомобиля (в руб.)';
    case 'personal': return 'Сколько у Вас сотрудников?';
    case 'city': return 'Город клиента';
    case 'amount': return 'Планируемый поток автомобилей в сезон (в день)?';
    case 'salary': return 'Укажите зарплату мастера (в рублях)';
    case 'place-1': return 'Шиномонтаж находится при автосервисе или отдельно?';
    case 'place-2': return 'Шиномонтаж находится при автосервисе или отдельно?';
    case 'inn': return 'ИНН клиента';
    case 'brand': return 'Бренд оборудования';
    case 'year': return 'Год выпуска';

    case 'has-transport': return 'Есть специализированный транспорт для перевозки отходов?';
    case 'has-equipment': return 'Есть оборудование для работы с отходами?';
    case 'has-place': return 'Есть территория/помещение для работы с отходами?';
    case 'provider': return 'Как удобнее получить материалы?';
    case 'phone': return 'Телефон клиента';
    case 'email': return 'Почта клиента';
    case 'name': return 'Имя клиента';
    
    
    default: return $val;
  }
}
