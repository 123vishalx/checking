const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: false }, // Optional image URL
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", BlogSchema);
