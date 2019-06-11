var express = require('express')
var router = express.Router()
var storySections = require('../models/storyLine')

/* GET home page. */
router.get('/beginning', function(req, res, next) {
  let start = storySections.storyLine.find((story) => {
    return story.storyPart === req.params.id
  })
  res.render('beginning', { start: start })
})

module.exports = router
