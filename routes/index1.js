var express = require('express');
var router1 = express.Router();

/* GET home page. */

router1.get('/main1', function(req, res) {
    res.render('machine/machine_jade/043-1_S_main1_machine', { title: 'machine' });
});

router1.get('/intro1', function(req, res) {
    res.render('machine/machine_jade/043-1_S_co_intro1_machine', { title: 'machine' });
});

router1.get('/product_List1', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_List1_machine', { title: 'machine' });
});

router1.get('/product_List2', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_List2', { title: 'machine' });
});


router1.get('/test', function(req, res) {
    res.render('test', { title: 'machine' });
});
module.exports = router1;
