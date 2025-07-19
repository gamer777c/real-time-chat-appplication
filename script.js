
let ws = new WebSocket("ws://localhost:3000");
let username = "";
let typingTimeout;

function setUsername() {
    username = document.getElementById("usernameInput").value.trim();
    if (!username) return alert("Please enter a name");
    ws.send(JSON.stringify({ type: "set_username", username }));
    document.querySelector(".username-setup").classList.add("hidden");
    document.querySelector(".chat-box").classList.remove("hidden");
}

function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (!text) return;
    ws.send(JSON.stringify({ type: "chat", text }));
    input.value = "";
}

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "chat") {
        const chat = document.getElementById("chat");
        const msg = document.createElement("div");
        msg.textContent = data.username + ": " + data.text;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
        if (data.username !== username) {
            document.getElementById("ping").play();
        }
        document.getElementById("typingStatus").textContent = "";
    }
};

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function sendTyping() {
    clearTimeout(typingTimeout);
    document.getElementById("typingStatus").textContent = "Typing...";
    typingTimeout = setTimeout(() => {
        document.getElementById("typingStatus").textContent = "";
    }, 1000);
}
