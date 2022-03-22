const router = require('express').Router()

router.use('/api', require('./productRoutes.js'))
router.use('/api', require('./carRoutes.js'))
module.exports = router
