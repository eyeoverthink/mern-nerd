// server.js
const express = require('express');
const connectDB = require('./config/db.js');
const userRoutes = require('./fraymz-backend/routes/userRoutes.js');
const cors = require('cors');
const dotenv = require('dotenv');
// server.js
const profileRoutes = require('./fraymz-backend/routes/profileRoutes.js');

// After user routes
app.use('/api/profiles', profileRoutes);

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));