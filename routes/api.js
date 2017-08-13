var express = require('express');
var router = express.Router();
// /:username/:pollname'
var Poll = require('../models/poll');

router.get('/', function(req, res) {
  Poll.getPoll(req.query.creator, req.query.poll, function(err, poll) {
    if (err) {
      console.log("Error finding poll... creator=" + req.params.username + ", poll=" + req.params.pollname);
      console.log(err);
    } else {
      res.json(poll);
    }
  });
});

router.put('/', function(req, res) {
  console.log("in api/put");

  var data = { creator: req.query.creator, poll: req.query.poll, vote: req.query.vote, user: req.query.user };
  Poll.vote(data, function(err, poll) {
    if (err) {
      console.log("Error finding poll... creator=" + req.params.username + ", poll=" + req.params.pollname +
                    ", vote=" + req.params.vote + ", user=" + req.params.user);
      console.log("Error putting - /polls/" + req.params.username + "/" + req.params.pollname);
      console.log(err);
    } else {
      // res.json(poll);
    }
  });
});

module.exports = router;
