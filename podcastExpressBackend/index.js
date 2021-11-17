const express = require('express')
const app = express();
const env = require('dotenv').config()

const pool = require('./sql/connections')


const port = process.env.PORT || 3006

app.get('/', (req, res) => {
    console.log("We are in the home route")
    res.send(`You are connected to express ${process.env.HOST}`)
})

app.get('/aws', (req, res) => {
    console.log('Our Get AWS Route')
    pool.query(
        'SELECT * FROM users', (error, results) => {
            if(error){
                console.log("error: ", error);
                res.status(error.code)
            } else {
                res.json(results)
            }
        }
    )
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})