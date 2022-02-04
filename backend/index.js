const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const pool = require('./sql/connections')

app.use(bodyParser.json())



const port = process.env.PORT || 4000

app.use(cors())

app.get('/', (req, res) => {
    console.log("We are in the home route")
    res.send(`You are connected to express ${process.env.HOST}`)
})

app.post(`/aws`, (req, res) => {
    pool.query(
        "SELECT * FROM users where email = ? AND pass = ?",
        [req.body.email, req.body.password], (error, rows) => {
            console.log( rows)
            if(rows[0]) {
                res.json({"success": "access granted"})
            } else {
                res.json({"failure": "no access"})
            }
        })
})

app.post('/register', (req, res) => {
    console.log(req.body)
    pool.query(
        "INSERT INTO users (email, first_name, last_name, pass) VALUES (?, ? , ?, ?)",
        [req.body.email, req.body.first_name, req.body.last_name, req.body.password, 0], (error, result) => {
            if(error) {
                return console.log('error:' + error)
            }
            console.log("result:" + result[0])
        })
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})