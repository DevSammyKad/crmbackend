const Receipt = require('../models/receiptModel');

const getAllReceipts = async (req, res) => {
  console.log('GET request received for receipts');
  try {
    const receipts = await Receipt.find();
    res.status(200).json({
      success: true,
      message: 'Receipts fetch successfully',
      receipts,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: 'Error fetching receipts' });
  }
};

const getReceiptById = async (req, res) => {
  const { id } = req.params;

  try {
    const receipt = await Receipt.findById(id);
    if (!receipt) {
      return res.status(404).json({ message: 'Receipt not found' });
    }
    res.status(200).json(receipt);
  } catch (error) {
    console.error('Error fetching receipt by ID:', error);
    res.status(500).json({ message: 'Error fetching receipt' });
  }
};
const createReceipt = async (req, res) => {
  console.log('createReceipt function called');
  const {
    receiptId,
    clientName,
    phoneNumber,
    receiptDate,
    paymentMode,
    panCardAadhaarCardNo,
    depositTo,
    amountReceived,
    receiptNote,
  } = req.body;

  if (!receiptId) {
    return res.status(400).json({ message: 'Receipt ID is required' });
  }

  try {
    const newReceipt = new Receipt({
      receiptId,
      clientName,
      phoneNumber,
      receiptDate,
      paymentMode,
      panCardAadhaarCardNo,
      depositTo,
      amountReceived,
      receiptNote,
    });

    await newReceipt.save();
    res.status(201).json({
      success: true,
      message: 'Receipt created successfully',
      newReceipt,
    });
  } catch (error) {
    console.error(error);
    console.error('Error creating receipt:', error);
    res
      .status(500)
      .json({ message: 'Error creating receipt', error: error.message });
  }
};
const updateReceipt = async (req, res) => {
  console.log('UpdateReceipt function called');
  const { id } = req.params;
  const {
    receiptId,
    clientName,
    phoneNumber,
    receiptDate,
    paymentMode,
    panCardAadhaarCardNo,
    depositTo,
    amountReceived,
    receiptNote,
  } = req.body;

  try {
    const updatedReceipt = await Receipt.findByIdAndUpdate(
      id,
      {
        receiptId,
        clientName,
        phoneNumber,
        receiptDate,
        paymentMode,
        panCardAadhaarCardNo,
        depositTo,
        amountReceived,
        receiptNote,
      },
      { new: true }
    ); // { new: true } option returns the updated document

    if (!updatedReceipt) {
      return res
        .status(404)
        .json({ success: false, message: 'Receipt not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Receipt Updated Successfully',
      updatedReceipt,
    });
  } catch (error) {
    console.error('Error updating receipt:', error);
    res.status(500).json({ message: 'Error updating receipt' });
  }
};
const deleteReceipt = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReceipt = await Receipt.findByIdAndDelete(id);

    if (!deletedReceipt) {
      return res.status(404).json({ message: 'Receipt not found' });
    }

    res.status(200).json({ message: 'Receipt deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting receipt' });
  }
};

module.exports = {
  getAllReceipts,
  getReceiptById,
  createReceipt,
  updateReceipt,
  deleteReceipt,
};
