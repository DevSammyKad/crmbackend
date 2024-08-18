const express = require('express');
// Import All Controller

const {
  getAllLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead,
} = require('../controllers/leads.controllers.js');

const router = express.Router();

router.get('/get', getAllLeads);
router.get('/get/:id', getLeadById);
router.post('/create', createLead);
router.patch('/update/:id', updateLead);
router.delete('/delete/:id', deleteLead);

module.exports = router;
