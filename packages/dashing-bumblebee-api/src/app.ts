import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

try {
  const port = process.env.PORT;
  /* const chalk = require("chalk");
  const debug = require("debug")("app");
  const app = express(); */

  app.get("/", (req, res) => {
    debug(`req url: ${chalk.green(req.url)}`);
    res.send("Polo");
  });

  app.listen(8000, () => {
    debug(`listening on ${chalk.green("8000")}`);
  });
} catch (error) {
  console.error("@server_e: ", error);
}

export default app;
