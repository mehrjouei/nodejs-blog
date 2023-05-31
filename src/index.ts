import express from "express";
import dotenv from "dotenv";
import { json } from "body-parser";
import { routes } from "./routes";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(json());

app.use(routes);

app.get("/", (req, res) => {
  res.json({ key: "Express + TypeScript Server + docker compose" });
});

app.use((req, res) => {
  res.status(404).send("404 not found");
});

const port = process.env.PORT;
mongoose
  .connect("mongodb://mongo:27017/blog")
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("database connection problem"));
