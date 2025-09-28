import express from "express";
const app = express();
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    console.log(`This is the sent data: ${data}`);
    socket.broadcast.emit("recieve_message", data);
  });

  //   socket.on("send_message", (data) => {
  //     socket.to().emit("recieve_message", data);
  //   });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
