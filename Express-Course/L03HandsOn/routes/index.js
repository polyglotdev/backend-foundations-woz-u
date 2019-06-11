var express = require('express')
var router = express.Router()
var storySections = require('../models/storyLine')

/* GET home page. */
router.get('/beginning', function(req, res, next) {
  let beginning = storySections.storyLine.find((story) => {
    return story.storyPart === 'beginning'
  })

  res.render('beginning', { beginning })
})

module.exports = router
