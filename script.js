function sendCommand(command) {
    let statusMessage;

    // Определяем сообщение для каждого действия
    switch (command) {
        case 'sos':
            statusMessage = 'SOS! Уведомление отправлено';
            break;
        case 'lock_doors':
            statusMessage = 'Двери заблокированы';
            break;
        case 'arm_security':
            statusMessage = 'Система безопасности активирована';
            break;
        case 'disarm_security':
            statusMessage = 'Система безопасности деактивирована';
            break;
        case 'open_gate':
            statusMessage = 'Ворота открыты';
            break;
        case 'close_gate':
            statusMessage = 'Ворота закрыты';
            break;
        case 'open_door':
            statusMessage = 'Дверь открыта';
            break;
        case 'close_door':
            statusMessage = 'Дверь закрыта';
            break;
        case 'lights_on':
            statusMessage = 'Свет включен';
            break;
        case 'lights_off':
            statusMessage = 'Свет выключен';
            break;
        case 'dim_lights':
            statusMessage = 'Свет приглушен';
            break;
        case 'night_mode':
            statusMessage = 'Ночной режим активирован';
            break;
        case 'set_temp_22':
            statusMessage = 'Температура установлена на 22°C';
            break;
        case 'set_temp_25':
            statusMessage = 'Температура установлена на 25°C';
            break;
        case 'turn_on_heating':
            statusMessage = 'Отопление включено';
            break;
        case 'turn_on_ac':
            statusMessage = 'Кондиционер включен';
            break;
        case 'play_music':
            statusMessage = 'Музыка воспроизводится';
            break;
        case 'stop_music':
            statusMessage = 'Музыка остановлена';
            break;
        case 'next_song':
            statusMessage = 'Следующая песня';
            break;
        case 'prev_song':
            statusMessage = 'Предыдущая песня';
            break;
        default:
            statusMessage = 'Неизвестная команда';
    }
    
    // Обновляем статус на экране
    document.getElementById('status').innerText = statusMessage;

    // Отправка команды на сервер
    fetch('https://panel-keiq.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command: command })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').innerText = data.status;
        console.log('Ответ от сервера:', data.status);
    })
    .catch(error => console.error('Ошибка:', error));
}
