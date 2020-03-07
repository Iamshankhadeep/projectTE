var mongoose = require("mongoose");

var dailyentrySchema = new mongoose.Schema({
  kamjharicode: String,
  todayTotalPluckingTeaLeaves: Number,
  todayTargetPluckingTeaLeaves: Number,
  date: Date,
})

module.exports = mongoose.model("Dailyentries", dailyentrySchema);