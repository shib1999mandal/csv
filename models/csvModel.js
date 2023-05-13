const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  header_row: {
    type: [Object],
  },
  data_rows: {
    type: [Object],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('CSV', csvSchema);
