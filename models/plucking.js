var mongoose = require("mongoose");

var pluckingSchema = new mongoose.Schema({
  date: Date,
  todayTargetPluckingTeaLeaves: Number,
});

module.exports = mongoose.model("Plucking", pluckingSchema);