function sendCommand(command) {
    let statusMessage;
    
    // Определяем сообщение для каждого действия
    switch (command) {
        case 'open_gate':
            statusMessage = 'Ворота открыты';
            break;
        case 'close_gate':
            statusMessage = 'Ворота закрыты';
            break;
        case 'close_windows':
            statusMessage = 'Окна закрыты';
            break;
        case 'lower_house':
            statusMessage = 'Дом убран под землю';
            break;
        case 'sos':
            statusMessage = 'SOS! Уведомление отправлено';
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
        console.log('Ответ от сервера:', data.status);
    })
    .catch(error => console.error('Ошибка:', error));
}
