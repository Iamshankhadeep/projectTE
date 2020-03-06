var mongoose = require("mongoose");

var dailyentrySchema = new mongoose.Schema({
  kamjharicode: String,
  date: Date,
})

module.exports = mongoose.model("Dailyentries", dailyentrySchema);