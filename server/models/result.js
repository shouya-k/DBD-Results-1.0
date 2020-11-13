const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resultSchema = new Schema(
  {
    killerName: String,
    killerImage: String,
    score: String,
    parkImage01: String,
    parkImage02: String,
    parkImage03: String,
    parkImage04: String,
    escape: String,
    win: Boolean,
    lose: Boolean,
  },
  { timestamps: { createdAt: 'created_at' } }
)

module.exports = mongoose.model('Result', resultSchema)
