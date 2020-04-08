var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var moment = require('moment');
var Worker = require('./models/worker');
var Dailyentry = require('./models/dailyentry');
var Kamjhari = require('./models/kamjhari');
var seeddb = require('./seed');
var Plucking = require('./models/plucking');
var session = require('express-session');
var {redisStore} = require('./redis');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/projectTE", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'whataview',
  store: redisStore,
  saveUninitialized: false,
  resave: false
}));
seeddb()

app.get('/', (req, res) => {
  res.render('index');
});

app.get("/workers", (req, res) => {
  Worker.find({}, (err, allWorkers) => {
    if (err) {
      console.log(err)
    } else {
      console.log(allWorkers)
      res.render('workers', { workers: allWorkers })
    }
  })
});

app.post('/workers', (req, res) => {
  var name = req.body.name;
  var pfid = req.body.pfid;
  Worker.create({ name: name, pfid: pfid, dateOfBirth: new Date() }, (err, newWorker) => {
    if (err) {
      console.log(err);
    } else {
      console.log(newWorker)
      res.redirect("/workers");
    }
  });
})

app.get('/dailyentry', (req, res) => {
  var start = moment().startOf('day');
  var search = {
    date: {
      $gte: start
    }
  }
  Plucking.find(search, (err, plucking) => {
    if (err) {
      console.log(err)
    } else {
      if (plucking.length === 0) {
        var date = start.inspect().slice(8, 18)
        return res.render('pluckingtype', { date: date });
      }
      Worker.find({}).populate('dailyentries').exec((err, allworkers) => {
        if (err) {
          console.log(err)

        } else {
          const maxLen = allworkers[0].dailyentries.length
          let redirectUrl = '/dailyentry/' + allworkers[0]._id + '/add'
          for (const worker of allworkers) {
            if (worker.dailyentries.length === maxLen - 1) {
              redirectUrl = '/dailyentry/' + worker._id + '/add'
              break;
            }
          }
          res.redirect(redirectUrl)
        }
      })
    }
  })
})
app.post('/dailyentry/pluckingtype', (req, res) => {
  var plucking = {
    date: new Date(req.body.date),
    todayTargetPluckingTeaLeaves: req.body.todayPluckingTarget,
  }
  Plucking.create(plucking, (err, plucking) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/dailyentry')
    }
  })
})
app.get('/dailyentry/:id/add', (req, res) => {
  Worker.findById(req.params.id).exec((err, worker) => {
    if (err) {
      console.log(err)
    } else {
      Kamjhari.find({}, (err, allkamjhari) => {
        if (err) {
          console.log(err);
        } else {
          var todayDate = new Date();
          Plucking.find({}, (err, plucking) => {
            if (err) {
              console.log(err)
            } else {
              console.log(plucking[0])
              const date = todayDate.toISOString().slice(0, 10);
              res.render('dailyentryform', { worker: worker, kamjhari: allkamjhari, date: date, plucking: plucking })
            }
          })
        }
      })
    }
  })
})
app.post('/dailyentry/:id', (req, res) => {
  console.log(req.body.kamjharicode)
  Worker.findById(req.params.id, (err, worker) => {
    if (err) {
      console.log(err)
      res.redirect('/workers')
    } else {
      if (req.body.kamjharicode === '') {
        res.redirect('/dailyentry/' + worker._id + '/add')
      } else {
        var news = {
          kamjharicode: req.body.kamjharicode,
          date: new Date(req.body.date),
        }
        Dailyentry.create(news, (err, dailyentry) => {
          if (err) {
            console.log(err)
          } else {
            console.log(dailyentry);
            worker.dailyentries.push(dailyentry);
            worker.save();
            res.redirect('/dailyentry');
          }
        })
      }
    }
  })
})

app.get('/daily', (req, res) => {
  res.redirect('/dailyentry');
})

app.get('/workers/add', (req, res) => {
  res.render('addworker')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Yelp camp server is started');
  console.log('app started on http://localhost:3000/')
});
