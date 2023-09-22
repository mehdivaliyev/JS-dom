const animateButton = document.getElementById('animateButton');

animateButton.addEventListener('mouseover', () => {
    animateButton.style.transform = 'scale(1.2)';
});

animateButton.addEventListener('mouseout', () => {
    animateButton.style.transform = 'scale(1)';
});
