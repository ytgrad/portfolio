const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static("dist"));

app.get("/download/quiz", (req, res) => {
  res.download("./dist/quiz.apk");
});
app.get("/download/calculator", (req, res) => {
  res.download("./dist/calculator.apk");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
