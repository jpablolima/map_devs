const mongoose = require('mongoose')

const DevSchema = new mongoose.Schema({
  name: String,
  bio: String,
  github_username: String,
  techs: [String],
})

module.exports = mongoose.model('Dev', DevSchema)