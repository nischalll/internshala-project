const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  rollNo: { type: Number, required: true },
  subject: { type: String, required: true, minlength: 3 },
  semester: { type: Number, required: true },
});

const Table = mongoose.model("Table", tableSchema);

async function createTable() {
  const table = new Table({
    name: "student1",
    rollNo: 457,
    subject: "Electronics",
    semester: 8,
  });

  const result = await table.save();
  console.log(result);
}

exports.Table= Table;