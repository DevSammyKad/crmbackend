// clientModel.js
const mongoose = require('mongoose');

// Define the schema for the client
const clientSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  address: String,
  area_second: String,
  phone_number: String,
  email: String,
  job_profile: String,
  annualincome: Number,
  age: Number,
  reference_name: String,
  opp_first_name: String,
  opp_middle_name: String,
  opp_last_name: String,
  opp_address: String,
  opp_area_second: String,
  opp_phone_number: String,
  opp_email: String,
  opp_job_profile: String,
  opp_annualincome: Number,
  opp_age: Number,
  onboardingdate: String,
  problem: String,
  relation: String,
  summary: String,
});

// Create the model
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
