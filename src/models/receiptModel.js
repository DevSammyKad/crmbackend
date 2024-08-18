const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  receiptId: { type: String, unique: true },
  clientName: String,
  phoneNumber: String,
  receiptDate: String,
  paymentMode: String,
  panCardAadhaarCardNo: String,
  depositTo: String,
  amountReceived: String,
  receiptNote: String,
});

const Receipt = mongoose.model('receipt', receiptSchema);

module.exports = Receipt;
