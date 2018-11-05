var express = require('express');
var router = express.Router();
const models = require('../models/index.js');

 router.get('/', function(req, res) {
   res.render('index');
 });

router.get('/sign_in', function(req, res) {
    res.render('signin');
});

router.get('/login', function(req, res) {
    res.render('login');
});
// /*
// router.get('/sign_in', function(req, res) {
//     res.render('sign_in', { title: 'Your registration is successfully done!' });
// });
//
// router.post('/sign_in/new', async function(req, res) {
//     let userEmail = req.param('email');
//     let userPass = req.param('password');
//     let checkUser = await models.User.checkInfo(userEmail, userPass);
//
//     if(checkUser.length === 0) {
//         await models.User.create({email: userEmail, password: userPass});
//     }
//
//     res.redirect('/');
// });
//
// router.get('/login', function(req, res, next) {
//     res.render('login', { registrWord: 'Logging in' });
// });
//
// router.post('/login/enter', async function (req, res) {
//     let userEmail = req.param('email');
//     let userPass = req.param('password');
//     let checkUser = await models.User.checkInfo(userEmail, userPass);
//
//     if (check.length === 1){
//         userId = checkUser[0].dataValues.id;
//         userEmail = checkUser[0].dataValues.email;
//
//         res.redirect(`/account`)
//     }
// });*/

module.exports = router;
