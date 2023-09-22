const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const FURL=process.env.FRONT_URL;

// CORS configuration
app.use(cors({
  origin: FURL, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));

// Middleware for parsing JSON
app.use(express.json());

// Database connection
const dbConnect = require('./database/database');
dbConnect();

// Routes
const feed = require('./routes/routes');
app.use('/api', feed);

app.listen(PORT, () => {
  console.log(`App is live at port ${PORT}`);
});

// Root endpoint for testing
app.get('/', (req, res) => {
  res.json({ message: 'Data from /api/create endpoint' });
});
