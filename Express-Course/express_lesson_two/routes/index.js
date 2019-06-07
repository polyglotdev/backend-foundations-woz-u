var express = require('express')
var router = express.Router()

let animals = ['pig', 'goat', 'dog', 'cat']

/* GET home page. */
router.get('/', function(req, res, next) {
  let queryAnimal = req.query.animal
  if (animals.includes(queryAnimal)) {
    res.send(`Yep we have a ${queryAnimal}`)
  } else {
    res.send(`Nope, no ${queryAnimal} here..`)
  }
})

router.post('/', (req, res) => {
  res.send('POST!')
})

router.put('/', (req, res) => {
  res.send('PUT!')
})

router.delete('/', (req, res) => {
  res.send('DELETE!')
})

module.exports = router
