const express = require('express');
const connectDB = require('./db/conn');
const cors = require('cors');
const leadRouter = require('./routes/leads.routes.js');
const receiptRouter = require('./routes/receipt.routes.js');

const Client = require('./models/clientModel');
const Receipt = require('./models/receiptModel');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

console.log();

// Connect to the MongoDB database
connectDB()
  .then(() => {
    // For Checking Response
    app.get('/', (req, res) => {
      res.send('Hello from MongoDB!');
    });

    //* Create A new Lead
    // app.use('/api/leads', leadRouter);
    app.use('/api/leads', leadRouter);

    //* Create a new client
    app.post('/add-client', async (req, res) => {
      try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).send(client);
      } catch (error) {
        console.error('Error creating client:', error);
        res.status(400).send({ error: error.message });
      }
    });
    // app.get('/api/receipts', async (req, res) => {
    //   try {
    //     const receipts = await Receipt.find(); // Fetch all receipts
    //     res.status(200).json(receipts);
    //   } catch (error) {
    //     console.error('Error fetching receipts:', error);
    //     res.status(500).json({ error: 'Error fetching receipts' });
    //   }
    // });

    //* Create A new Receipts
    app.use('/api/receipts', receiptRouter);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
