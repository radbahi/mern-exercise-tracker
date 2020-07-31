const router = require('express').Router() // define this because this is a router we're creating
let Exercise = require('../models/exercise.model') // we need to grab the model

router.route('/').get((req, res) => { // our first endpoint. get request. 
    Exercise.find() // .find() is a mongoose method to get all exercises in mongoDB Atlas database. returns a promise in json format.
        .then(exercises => res.json(exercises)) // then return and parse as json
        .catch(err => res.status(400).json('Error: ' + err)) // if error, log this
})

router.route('/add').post((req, res) => { // 2nd endpoint. post request
    const username = req.body.username // we get the username being passed in
    const description = req.body.description // we get the description being passed in
    const duration = Number(req.body.duration) // converts to Number data type
    const date = Date.parse(req.body.date) // converts to Date data type

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    }) // creates new exercise with all this data

    newUser.save() // then its saved
        .then(() => res.json('User added!')) // after its saved, respond with this msg
        .catch(err => res.status(400).json('Error: ' + err)) // else return error msg
})

module.exports = router // standard export