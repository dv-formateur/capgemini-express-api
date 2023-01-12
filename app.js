import express from "express";
import * as controller from "./controller.js";

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello EPSI");
});

app.get("/api/contacts", controller.getContacts);
app.get("/api/contacts/:id", controller.getContact);
app.post("/api/contacts", controller.postContact);

export default app;
