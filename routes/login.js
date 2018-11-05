var express = require('express');
var router = express.Router();
let models = require('../models/index.js')

// router.get('/login', function(req, res) {
//     res.render('login', { registrWord: 'Logging in' });
// });

router.post('/login', async function (req, res) {
    let userEmail = req.param('email');
    let userPass = req.param('password');
    let checkUser = await models.User.checkInfo(userEmail, userPass);

    if (check.length === 1){
         userId = checkUser[0].dataValues.id;
         userEmail = checkUser[0].dataValues.email;

        res.redirect('/account')
    }
});

module.exports = router;