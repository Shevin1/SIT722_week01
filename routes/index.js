var express = require('express');
var router = express.Router();

const nameList = [

  {'id': 1   , 'name':'John', 'email':'aaa'},
  {'id': 2   , 'name':'James','email':'bbb'},
  {'id': 3   , 'name':'Shane','email':'ccc'},
  {'id': 4   , 'name':'Kane','email':'ddd'},
  {'id': 500   , 'name':'Mark','email':'ggg'},

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722',sub:'ABC', names: nameList });
});

module.exports = router;
