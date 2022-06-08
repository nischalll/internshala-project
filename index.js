const express = require("express");
const mongoose = require("mongoose");
const { Table } = require("./modules/table");
const cors = require('cors');
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

const DB =
  "mongodb+srv://pass:pass@cluster0.hxx9cg7.mongodb.net/project?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => console.log("connected to mongoDb"))
  .catch((err) => console.log("no Connection", err));

app.get("/", (req, res) => {
  res.send("table");
});

app.get("/api/tables", async (req, res) => {
  const table = await Table.find();
  res.send(table);
});

app.post("/api/tables", async (req, res) => {
  let table = new Table({
    name: req.body.name,
    rollNo: req.body.rollNo,
    subject: req.body.subject,
    semester: req.body.semester,
  });
  table= await table.save();
  res.send(table);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
