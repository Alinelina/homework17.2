const newMessage = document.querySelector('.txt-area');
const sendButton = document.querySelector('.btn');
let messages = ['Hi', 'How are you?'];
let verifiedMessage;

function generateMessage() {
    let optionsString = '';

    for (let message of messages) {
        optionsString += `<div class="message">${message}</div>`
    }

    document.querySelector('.message-container').innerHTML = optionsString;
}

function checkSpam() {
    verifiedMessage = newMessage.value.replace(/viagra|xxx/gi, '***');
}

function addMessage() {
    checkSpam();

    messages.push(verifiedMessage);

    generateMessage();
    
    newMessage.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    generateMessage();
})

sendButton.addEventListener('click', addMessage);

//Отправла сообщения при нажатии Enter
newMessage.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addMessage();
        return false;
    }
});