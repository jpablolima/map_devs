const express = require ('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect('mongodb+srv://jpablolima:bazinga@cluster0-ars5w.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(express.json()) //Tem que ser antes das Rotas
app.use(routes)


app.listen(3333)