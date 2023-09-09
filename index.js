const express = require("express");
const app = express();

require("dotenv").config();

const dbconnect = require("./config/database");
dbconnect();

app.use(express.json());

const todos = require("./routes/todos");
app.use("/api/myproj", todos);

app.get("/", (req, res) => {
  res.send(`<div><b>running your page</b></div>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Running successfully");
});
