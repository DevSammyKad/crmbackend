const mongoose = require('mongoose');

const leadsSchema = new mongoose.Schema({
  lead_name: {
    type: String,
    required: false,
  },
  lead_contact: {
    type: String,
    required: false,
    unique: false,
  },
  lead_email: {
    type: String,
  },
  status: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
  },
  date: {
    type: String,
  },
  problem: {
    type: String,
  },
  source: {
    type: String,
  },
  note: {
    type: String,
  },
});

const Leads = mongoose.model('Leads', leadsSchema);

module.exports = Leads;
