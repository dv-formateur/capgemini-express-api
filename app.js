import express from "express";
import { contacts } from "./data.js";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello EPSI");
});

app.get("/api/contacts", function (req, res) {
  res.status(200).json(contacts);
});

app.get("/api/contacts/:id", function (req, res) {
  const id = req.params.id;
  res.status(200).json({ id });
});

export default app;
