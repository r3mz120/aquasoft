const express = require("express");
const router = require("./routes");
const app = express();

let port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Running...");
});

app.use("/api", router);
app.listen(port, () => {
  console.log("Server is runing on " + port);
});
