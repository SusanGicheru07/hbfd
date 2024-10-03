const messages = [
    "You're an amazing friend and I'm so grateful to have you in my life!",
    "You're a good friend anyone could ask for, and I'm honored to know you!",
    "I don't say it enough, but thank you for being my friend!",

];

document.querySelector('.button-73').addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector('.message').textContent = randomMessage;
    document.querySelector('.message-container').style.display = 'block';
});