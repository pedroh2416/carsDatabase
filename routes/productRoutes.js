const router = require('express').Router()



router.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
  ]
  
  res.json(products)
})

module.exports = router