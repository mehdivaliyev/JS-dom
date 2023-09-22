const animateButton = document.getElementById('animateButton');
const ball = document.querySelector('.ball');

animateButton.addEventListener('click', () => {
    ball.style.transform = 'translateX(350px)';
});
