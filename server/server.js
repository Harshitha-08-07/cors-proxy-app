const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// ✅ MIDDLEWARE (FIRST)
app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));

// ✅ MONGODB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ ROUTES (AFTER middleware)
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// ✅ TEST ROUTE
app.get('/api/health', (req, res) => {
  res.json({ message: "Server is running!" });
});

// ✅ SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});