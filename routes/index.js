var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('intro', { title: 'Express' });
});

router.get('/mc', function(req, res) {
    res.render('mc', { title: 'Express' });
});

router.get('/les', function(req, res) {
    res.render('les', { title: 'Express' });
});
router.get('/intro', function(req, res) {
    res.render('intro2', { title: 'Express' });
});
router.get('/business1', function(req, res) {
    res.render('business1', { title: 'Express' });
});
router.get('/business2', function(req, res) {
    res.render('business2', { title: 'Express' });
});
router.get('/business3', function(req, res) {
    res.render('business3', { title: 'Express' });
});
router.get('/business4', function(req, res) {
    res.render('business4', { title: 'Express' });
});
router.get('/write', function(req, res) {
    res.render('write', { title: 'Express' });
});

module.exports = router;
