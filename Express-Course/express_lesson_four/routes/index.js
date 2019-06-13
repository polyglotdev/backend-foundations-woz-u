var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'sakila'
})

connection.connect(function(err) {
  if (err) {
    console.error(err.message)
    return
  }
  console.log(`You are connected to the database sucka`)
})

/* GET home page. */
router.get('/actor/:id', function(req, res, next) {
  let actorId = parseInt(req.params.id)
  console.log(actorId)

  let actorQuery = `SELECT * FROM actor WHERE actor_id=${actorId}`

  connection.query(actorQuery, (err, result) => {
    if (err) {
      console.log(err.message)
      next()
      return
    }
    if (result.length > 0) {
      res.render('index', { actor: result[0] })
    } else {
      res.send(`not a vaild actor id!`)
    }
  })
})

module.exports = router
