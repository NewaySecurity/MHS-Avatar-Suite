// Main JavaScript file for avatar interactions

document.addEventListener('DOMContentLoaded', () => {
    const settingsBtn = document.getElementById('settingsBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettings = document.getElementById('closeSettings');

    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.toggle('open');
    });

    closeSettings.addEventListener('click', () => {
        settingsPanel.classList.remove('open');
    });

    fullscreenBtn.addEventListener('click', toggleFullscreen);

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    const sendBtn = document.getElementById('sendBtn');
    const clearBtn = document.getElementById('clearBtn');
    const textInput = document.getElementById('textInput');
    const chatMessages = document.getElementById('chatMessages');

    sendBtn.addEventListener('click', async () => {
        const messageContent = textInput.value.trim();
        if (messageContent) {
            appendMessage('user', messageContent);
            textInput.value = '';
            
            // Send message to backend and get avatar response
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: messageContent })
                });
                
                const data = await response.json();
                if (data.success) {
                    appendMessage('avatar', data.data.response);
                } else {
                    appendMessage('system', 'Sorry, I encountered an error. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                appendMessage('system', 'Connection error. Please check your network and try again.');
            }
        }
    });

    clearBtn.addEventListener('click', () => {
        textInput.value = '';
    });

    // Add Enter key support
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = message;
        messageElement.appendChild(messageContent);
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Sample message from avatar for demonstration
    setTimeout(() => {
        appendMessage('system', 'This is a system message.');
    }, 1000);

    setTimeout(() => {
        appendMessage('avatar', 'Hello! I am your avatar. How can I assist you today?');
    }, 2000);
});

