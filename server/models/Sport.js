const mongoose = require('mongoose');

//------------ Sport Schema ------------//
const SportSchema = new mongoose.Schema({
  sportName: {
    type: String,
    required: true
  },
  typeSport: {
    type: String,
    required: true
  },
  positions: {
      default: []
    }
}, { timestamps: true });

const Sport = mongoose.model('Sport', SportSchema);

module.exports = Sport;