
const http = require("http");
const fs = require("fs");
const WebSocket = require("ws");
const path = require("path");

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    let contentType = "text/html";
    if (filePath.endsWith(".js")) contentType = "text/javascript";
    else if (filePath.endsWith(".css")) contentType = "text/css";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("Not Found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

const wss = new WebSocket.Server({ server });
let clients = [];

wss.on("connection", (ws) => {
    ws.username = "Anonymous";
    clients.push(ws);

    ws.on("message", (data) => {
        let message = {};
        try {
            message = JSON.parse(data);
        } catch (e) {
            return;
        }

        if (message.type === "set_username") {
            ws.username = message.username;
        } else if (message.type === "chat") {
            const fullMessage = {
                username: ws.username,
                text: message.text,
                type: "chat"
            };
            const json = JSON.stringify(fullMessage);
            clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(json);
                }
            });
        }
    });

    ws.on("close", () => {
        clients = clients.filter(client => client !== ws);
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
