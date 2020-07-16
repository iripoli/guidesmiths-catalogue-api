const mongoose = require('mongoose')


const DB_URI = process.env.DB_URI || 'mongodb+srv://iripoli:julian96@cluster0-12hh1.mongodb.net/phones?retryWrites=true&w=majority'

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to DB ${DB_URI}`))
  .catch(() => console.log(`Could not connect to DB ${DB_URI}`))