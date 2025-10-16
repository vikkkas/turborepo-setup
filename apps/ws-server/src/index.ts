import { WebSocketServer } from "ws";
const server = new WebSocketServer({ port: 3001 });

server.on("connection", (socket) => {
  socket.send("Hello! You are connected to the WebSocket server.");
  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    socket.send(`Echo: ${message}`);
  });
});
