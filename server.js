const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, () => {
  console.log("App listening on PORT: http://localhost:" + PORT);
});