var mongoose = require("mongoose");

var kamjhariSchema = new mongoose.Schema({
  description: String,
  kamjharicode: String,
})

module.exports = mongoose.model("Kamjhari", kamjhariSchema);