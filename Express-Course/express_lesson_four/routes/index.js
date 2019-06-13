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

const actorList = `SELECT * FROM actor`

router.get('/actor', (req, res, next) => {
  connection.query(actorList, (err, result) => {
    res.render('actor', { actors: result })
  })
})

router.post('/actor', (req, res, next) => {
  console.log(req.body)
  const newActor = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }

  const selectActor = `SELECT * FROM ACTOR WHERE first_name = '${newActor.first_name}' AND last_name = '${
    newActor.last_name
  }'`

  connection.query(selectActor, (err, result) => {
    if (err) {
      console.log(err.message)
    } else if (result.length > 0) {
      res.send(`Actor already exsits!`)
    } else {
      let newActorQuery = `
			INSERT INTO actor(first_name, last_name)
			VALUES('${newActor.first_name}',
			'${newActor.last_name}')
			`

      connection.query(newActorQuery, (err, insertResult) => {
        if (err) {
          res.render('error', { message: `Oops, something went wrong` })
        } else {
          res.redirect('/actor')
        }
      })
    }
  })
})

router.get('/film/:id', function(req, res, next) {
  let filmId = parseInt(req.params.id)
  let filmActorQuery = `
    SELECT film.title, actor.first_name, actor.last_name
    FROM film INNER JOIN film_actor ON film.film_id = film_actor.film_id
    INNER JOIN actor ON film_actor.actor_id = actor.actor_id
    WHERE film.film_id = ${filmId}
  `

  connection.query(filmActorQuery, function(err, result) {
    if (err) {
      res.render('error', { message: err.message })
    } else {
      console.log(result)
      res.render('filmDetails', {
        filmTitle: result[0].title,
        films: result
      })
    }
  })
})

module.exports = router

module.exports = router
