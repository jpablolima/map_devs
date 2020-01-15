const mongoose = require('mongoose')
const PointSchema = require('./utils/PointsSchema')

const DevSchema = new mongoose.Schema({
  name: String,
  bio: String,
  github_username: String,
  techs: [String],
  location:{
    type: PointSchema,
    index:'2dsphere'
  }
})

module.exports = mongoose.model('Dev', DevSchema)