const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.get('/api/health', (req, res) => {
  res.json({ message: "Server is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});