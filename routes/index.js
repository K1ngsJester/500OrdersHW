var express = require('express');
var router = express.Router();

// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

const Orders = require("../Orders");

// edited to include my non-admin, user level account and PW on mongo atlas
// and also to include the name of the mongo DB that the collection
//const dbURI = "mongodb+srv://testUser:0530@mycluster.nee1p.mongodb.net/ToDo?retryWrites=true&w=majority";
const dbURI = "mongodb+srv://ServerUser:12qw1q2w@jestercluster.bkyxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);



/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html');
});


/* post a new ToDo and push to Mongo */
router.post('/NewOrder', function(req, res) {

    let oneNewOrder = new Orders(req.body);  // call constuctor in ToDos code that makes a new mongo ToDo object
    console.log(req.body);
    oneNewOrder.save((err, orders) => {
      if (err) {
        res.status(500).send(err);
      }
      else {
      console.log(orders);
      res.status(201).json(orders);
      }
    });
});


module.exports = router;
