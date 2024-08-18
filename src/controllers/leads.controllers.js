const Lead = require('../models/leadsModel');

const getAllLeads = async (req, res) => {
  console.log('GET request received for Leads');
  try {
    const leads = await Lead.find();
    res.status(200).json({
      success: true,
      message: 'Leads Fetch successfully',
      leads,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};

const getLeadById = async (req, res) => {
  const { id } = req.params;
  try {
    const lead = await Lead.findById(id);
    if (!lead) {
      return res
        .status(404)
        .json({ success: false, message: 'Lead not found' });
    }
    res
      .status(200)
      .json({ success: true, message: 'Leads Fetch successfully', lead });
  } catch (error) {
    console.error('Error fetching lead by ID:', error);
    res
      .status(500)
      .json({ status: 'error', message: 'Error fetching lead by ID' });
  }
};

const createLead = async (req, res) => {
  try {
    console.log('createLead function called');
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({
      success: true,
      message: ' Lead Created successfully',
      newLead,
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateLead = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLead = await Lead.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json({
      success: true,
      message: 'Lead successfully updated',
    });
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteLead = async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);
    if (!deletedLead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Lead deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead,
};
