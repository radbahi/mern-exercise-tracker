const router = require('express').Router() // define this because this is a router we're creating
let User = require('../models/user.model') // we need to grab the model

router.route('/').get((req, res) => { // our first endpoint. get request. 
    User.find() // .find() is a mongoose method to get all users in mongoDB Atlas database. returns a promise in json format.
        .then(users => res.json(users)) // then return and parse as json
        .catch(err => res.status(400).json('Error: ' + err)) // if error, log this
})

router.route('/add').post((req, res) => { // 2nd endpoint. post request
    const username = req.body.username // we get the username being passed in

    const newUser = new User({username}) // creates new user with this username

    newUser.save() // then its saved
        .then(() => res.json('User added!')) // after its saved, respond with this msg
        .catch(err => res.status(400).json('Error: ' + err)) // else return error msg
})

module.exports = router // standard export

