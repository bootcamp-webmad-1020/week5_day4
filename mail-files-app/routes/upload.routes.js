const express = require('express')
const router = express.Router()

const localUpload = require('./../configs/local-upload.config')

const Picture = require('./../models/picture.model')

// Local
router.get('/file-upload-local', (req, res) => res.render('upload-local-pic'))

router.post('/file-upload-local', localUpload.single('imageFile'), (req, res, next) => {

    Picture
        .create({
            imageName: req.body.imageName,
            path: `/uploads/${req.file.filename}`,
            originalName: req.file.originalname             // multer dota de la propiedad file al objeto request
        })
        .then(() => res.redirect('/gallery'))
        .catch(err => next(new Error(err)))
})



// CDN
const CDNupload = require('./../configs/cdn-upload.config')

router.get('/file-upload-cdn', (req, res) => res.render('upload-cdn-pic'))

router.post('/file-upload-cdn', CDNupload.single('imageFile'), (req, res) => {
    Picture
        .create({
            imageName: req.body.imageName,
            path: req.file.path,
            originalName: req.file.originalname             // multer dota de la propiedad file al objeto request
        })
        .then(() => res.redirect('/gallery'))
        .catch(err => next(new Error(err)))
})


module.exports = router