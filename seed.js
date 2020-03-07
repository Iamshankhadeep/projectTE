var Worker = require('./models/worker');
var Dailyentry = require('./models/dailyentry');
var workerdata = require('./workerdata.json');
var Kamjhari = require('./models/kamjhari');
var anathorseed = require('./anathorseed');
var Plucking = require('./models/plucking')
async function seedDB() {
  await Worker.deleteMany({});
  await Plucking.deleteMany({});
  await Dailyentry.deleteMany({});
  await Kamjhari.deleteMany({});
  anathorseed();
  for (const worker of workerdata) {
    await Worker.create(worker);
  }
}

module.exports = seedDB;