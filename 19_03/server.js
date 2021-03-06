const express = require("express");
const router = require("./routes");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
let port = 8081;
const cors = require("cors");
app.use(express.json());

app.use(cors({ credentials: true }, "http://localhost:4200"));

io.on("connection", (socket) => {
  console.log(socket.id + " connected!");

  socket.once("disconnect", () => {
    console.log(socket.id + " disconnected!");
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Running...");
});

app.use("/api", router);

app.io = io;

server.listen(port, () => {
  console.log("Server is runing on " + port);
});
