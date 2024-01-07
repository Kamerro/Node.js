const express = require("express");
const app = express();
const port = 3000;
let item =
  "<h1>OKOK_reposne</h1> renderujemy całe html i je wstawiamy pod routy";
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.get("/about", (req, res) => {
  res.send(item);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
