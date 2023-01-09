// const express = require("express");
import express from "express";

const app = express();

const contacts = [
  {
    nom: "Xavier",
    telephone: "0434343434",
  },
  {
    nom: "Robert",
    telephone: "0534343434",
  },
];

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
