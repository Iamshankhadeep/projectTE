var Worker = require('./models/worker');
var Dailyentry = require('./models/dailyentry');
var workerdata = require('./workerdata.json')
async function seedDB() {
  await Worker.deleteMany({});
  await Dailyentry.deleteMany({});
  for (const worker of workerdata) {
    await Worker.create(worker);
  }
}

module.exports = seedDB;