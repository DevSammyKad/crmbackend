const express = require('express');

const {
  getAllReceipts,
  getReceiptById,
  createReceipt,
  updateReceipt,
  deleteReceipt,
} = require('../controllers/receipt.controllers.js');

const router = express.Router();

router.get('/get', getAllReceipts);
router.get('/get/:id', getReceiptById);
router.post('/create', createReceipt);
router.patch('/update/:id', updateReceipt);
router.delete('/delete/:id', deleteReceipt);

module.exports = router;
