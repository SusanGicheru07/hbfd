const messages = [
    "You're an amazing friend and I'm so grateful to have you in my life!",
    "I'm so lucky to have a friend like you who always knows how to make me laugh!",
    "You're the good friend anyone could ask for, and I'm honored to call you mine!",
    "I don't say it enough, but thank you for being such an incredible friend!",
    "You're not the sunshine in my life lol, but I'm so grateful for your presence!",
];

document.querySelector('.button-73').addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('.message').textContent = randomMessage;
    document.querySelector('.message-container').style.display = 'block';
});