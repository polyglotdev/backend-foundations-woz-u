var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`You sucessfully created a GET route`)
  // res.render('index', { title: 'Express' })
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
