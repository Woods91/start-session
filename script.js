document.getElementById('startSessionButton').addEventListener('click', function() {
    const sessionStatus = document.getElementById('sessionStatus');
    sessionStatus.textContent = 'Session has started!';
    sessionStatus.style.color = 'green';
});