const mongoose = require("mongoose");

// Created Movie schema (url Api -> POSTMAN)
const projectSchema = mongoose.Schema({
  name: String,
  desc: String,
  pic_url: String,
  days_spent: Number,
  stack_front: [String],
  stack_back: [String]
});

const projectModel = mongoose.model("projects", projectSchema);

module.exports = projectModel;
