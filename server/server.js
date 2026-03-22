const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();


// ✅ MIDDLEWARE
app.use(express.json());

// ✅ CORS (IMPORTANT: before routes)
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));


// ✅ MONGODB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// ✅ ROUTES
app.use('/api/users', userRoutes);

app.get('/api/health', (req, res) => {
  res.json({ message: "Server is running!" });
});


// ✅ SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});