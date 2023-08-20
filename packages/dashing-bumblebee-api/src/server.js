const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const app = express();

app.get("/", (req, res) => {
  debug(`req url: ${chalk.green(req.url)}`);
  res.send("Polo");
});

app.listen(8000, () => {
  debug(`listening on ${chalk.green("8000")}`);
});
