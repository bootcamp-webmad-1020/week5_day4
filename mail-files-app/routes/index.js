module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./email.routes.js'))
    app.use('/', require('./upload.routes.js'))
}