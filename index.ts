import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3001;

//! TODO - validate .env file fields

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);
// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.get("/health-check", (_req, res) => {
  res.send("Yes its working!!🙌");
});

app.listen(PORT, () => {
  console.log(`Express server is listening at ${PORT}`);
});
