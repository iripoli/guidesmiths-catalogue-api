require('./config/db.js')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors');

const indexRouter = require('./routes/index.routes')
const phonesRouter = require('./routes/phones.routes')


const app = express()

const PORT = process.env.PORT || 3005



app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(cors())


//ROUTES
//app.use('/api/phones', phonesRouter)
app.use('/api', indexRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.status(err.status || 500).json(err.message)
})

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));