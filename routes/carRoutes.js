const { Router } = require('express');



 const router = require('express').Router()
 
 router.get('/cars', (req, res) => {
   const carData = require('../db/cardb.json');
   res.json(carData)
 })

module.exports = router;