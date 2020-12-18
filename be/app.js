const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "public")));S

app.listen(4000);
app.get("/getProlems/:id", (req, res) => {
  // DB에 접근해서 문제들을 가져오고,
  // 그 문제들을 보내준다.
});

module.exports = app;
