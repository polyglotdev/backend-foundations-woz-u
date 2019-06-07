var express = require('express')
var router = express.Router()

let flowers = ['Orchid', 'Iris', 'Hydrangea', 'Amaryllis', 'Dahlia', 'Daffodil', 'Bleeding Heart']

/* GET home page. */
router.get('/', function(req, res, next) {
  let flowerCheck = req.query.flower

  if (flowers.includes(flowerCheck)) {
    res.send(`Yes we have ${flowerCheck}!`)
  } else {
    res.send(`Nope, we do not have ${flowerCheck} in our garden, but maybe you should plant it!`)
  }
  res.render('index', { title: 'Flowers are ❤️' })
})

router.post('/', (req, res) => {
  let flowerBody = req.body

  if (flowers.includes(flowerBody.flower)) {
    res.send(`We already have this flower. No need to add this again..`)
  } else {
    flowers.push(flowerBody.flower)
    res.send(`${flowers}`)
  }
})

module.exports = router
