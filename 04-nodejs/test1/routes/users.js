var express = require('express');
var router = express.Router();

;

router.post('/',function(req, res, next) {
  res.send('user post')
})

router.delete('/',function(req, res, next) {
  res.send('user delete')
})

router.patch('/',function(req, res, next) {
  res.send('user patch')
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

module.exports = router;
