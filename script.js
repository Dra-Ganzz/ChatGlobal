function sendMessage() {
    const user = document.getElementById('user').value;
    const message = document.getElementById('message').value;
    if (user && message) {
        fetch('chat.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `user=${encodeURIComponent(user)}&message=${encodeURIComponent(message)}`
        }).then(() => {
            document.getElementById('message').value = '';
            loadMessages();
        });
    }
}

function loadMessages() {
    fetch('chat.php')
        .then(response => response.json())
        .then(data => {
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML = '';
            data.forEach(msg => {
                const p = document.createElement('p');
                p.textContent = `${msg.user}: ${msg.message}`;
                messagesDiv.appendChild(p);
            });
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });
}

setInterval(loadMessages, 2000); // Refresh pesan setiap 2 detik
loadMessages(); // Load pesan saat halaman dibuka
