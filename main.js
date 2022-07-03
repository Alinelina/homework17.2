const newMessage = document.querySelector('.txt-area');
const sendButton = document.querySelector('.btn');
const messageContainer = document.querySelector('.message-container');
let messages = ['Hi', 'How are you?'];

function generateMessage() {
    let optionsString = '';

    for (let message of messages) {
        optionsString += `<div class="message">${message}</div>`
    }

    messageContainer.innerHTML = optionsString;
}

function checkSpam() {
    const verifiedMessage = newMessage.value.replace(/viagra|xxx/gi, '***');
    return verifiedMessage;
}

function addMessage() {
    messages.push(checkSpam());

    generateMessage();
    
    newMessage.value = '';
}

document.addEventListener('DOMContentLoaded',generateMessage);

sendButton.addEventListener('click', addMessage);

//Отправла сообщения при нажатии Enter
newMessage.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addMessage();
        return false;
    }
});