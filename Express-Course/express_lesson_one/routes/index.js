var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My Cats',
    users: [{ name: 'Maggie' }, { name: 'Slyvester' }, { name: 'Killer-K' }]
  })
})

module.exports = router
