console.log('hello')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
app.get('/Users', (req, res) => {
  sequelize.query(`SELECT * FROM Users`).then((err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log(err)
    }
  })
})

app.get('/Users/:id', (req, res) => {
  sequelize.query('SELECT * FROM Users WHERE id = ?',
    { replacements: [req.params.id], type: sequelize.QueryTypes.SELECT }
  ).then(user => {
    console.log(user)
  })
})

app.delete('/Users/:id', (req, res) => {
  sequelize.query('DELETE FROM Users WHERE id = ?',
    { replacements: [req.params.id], type: sequelize.QueryTypes.DELETE }
  ).then(user => {
    console.log(user)
  })
})

app.post('/Users/:id', (req, res) => {
  sequelize.query('UPDATE Users SET password = 123456789 WHERE id = ?',
    { replacements: [req.params.id], type: sequelize.QueryTypes.UPDATE }
  ).then((results, metadata) => {
    console.log(results)
  })
})
