const express = require('express')
const router = express.Router()

const Picture = require('./../models/picture.model')


// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/gallery', (req, res) => {

    Picture
        .find()
        .then(allPictures => res.render('gallery', { allPictures }))
        .catch(err => new Error(err))
})




module.exports = router
