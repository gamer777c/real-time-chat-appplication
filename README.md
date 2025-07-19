
# real-time-chat-appplication
COMPANY - CODTECH IT SOLUTIONS
NAME - VARUN SARKAR
INTERN ID- CT08DL619
DOMAIN - FULL STACK WEB DEVELOPMENT
MENTOR- NEELA SANTOSH
# 💬 Advanced WebSocket Chat App

This is a real-time chat application built using **Node.js**, **WebSocket**, and vanilla **HTML/CSS/JavaScript**. It allows multiple users to connect, send, and receive messages instantly over a persistent WebSocket connection. The primary goal of this project is to demonstrate the fundamentals of real-time bidirectional communication using WebSockets without relying on third-party frameworks like Socket.IO.

---

## 🚀 Features

- Real-time messaging using WebSocket protocol
- Clean and responsive frontend UI using HTML/CSS
- Audio notifications for new messages (ping sound)
- Server-side implementation using `ws` (WebSocket) library
- Lightweight and minimal dependencies
- Easy to run locally

---

## 🧠 How It Works

This application uses the **WebSocket protocol**, which enables full-duplex communication between the client and the server. When a user opens the app, a WebSocket connection is established with the Node.js server. Every message sent from a client is received by the server and then **broadcasted to all connected clients** in real-time.

This real-time interaction makes it ideal for use cases like live chat, collaborative tools, gaming servers, and more.

---

## 🛠️ Technologies Used

- **Frontend**:  
  - HTML  
  - CSS  
  - JavaScript

- **Backend**:  
  - Node.js  
  - WebSocket (`ws` library)

---

## 📂 Folder Structure

Advanced_WebSocket_Chat/
├── node_modules/
├── public/
│ ├── index.html
│ ├── script.js
│ ├── style.css
│ └── ping.mp3
├── server.js
├── package.json
└── README.md
---

## ▶️ How to Run the Project

1. **Install dependencies**

```bash
npm install
node server.js
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/f99218c1-7cb9-4e9a-b2d4-e94d76765dd2" />
Open your browser and go to:
http://localhost:3000

Open multiple tabs or devices to test real-time chat functionality
OUTPUT
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/f99218c1-7cb9-4e9a-b2d4-e94d76765dd2" />
