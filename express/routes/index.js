var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.knex
  .from ('user')
  .first()
  .then (function (result) {
    res.render('index', { title: result.username });
  })
.catch (next);
})
module.exports = router;
