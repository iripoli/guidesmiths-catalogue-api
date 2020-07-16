require('./config/db.js')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors');


const app = express()

const PORT = process.env.PORT || 3005



app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));