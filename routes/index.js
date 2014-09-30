var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/less', function(req, res) {
    res.render('less', { title: 'less' });
});

router.get('/machine', function(req, res) {
    res.render('machine', { title: 'machine' });
});


module.exports = router;
