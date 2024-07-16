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
app.get("/download/stopwatch", (req, res) => {
  res.download("./dist/stopwatch.apk");
});
app.get("/download/countdown", (req, res) => {
  res.download("./dist/countdown.apk");
});
app.get("/download/cv", (req, res) => {
  res.download("./dist/resume.pdf");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
