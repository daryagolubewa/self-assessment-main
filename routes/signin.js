const express = require('express');
const router = express.Router();
const models = require('../models/index.js');


router.get('/', function(req, res) {
    res.render('index');
});

router.post('/sign_in', async function(req, res) {
    let userEmail = req.param('email');
    let userPass = req.param('password');
    console.log(userEmail);
    console.log(userPass);
    let checkUser = await models.User.checkInfo(userEmail, userPass);
    console.log(userEmail);
    console.log(userPass);

    if(checkUser.length === 0) {
        await models.User.create({email: userEmail, password: userPass});
    }

    res.redirect('/');
});

module.exports = router;

router.post('/song/new', async function(req, res) {
    await models.singer.create({"singer": req.param('create_singer'), "song_title": req.param('create_song')})
    res.redirect('/song/all')
})
