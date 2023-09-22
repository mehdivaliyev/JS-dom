    const toggleBtn = document.getElementById('toggleBtn');
    const container = document.getElementById('container');

toggleBtn.addEventListener('click', () => {
    container.classList.toggle('day-mode');
    container.classList.toggle('night-mode');
});
