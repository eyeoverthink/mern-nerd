// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define a Schema
const StyleSchema = new mongoose.Schema({
    command: String,
    style: String
});

const Style = mongoose.model('Style', StyleSchema);

// API Endpoints
app.post('/api/styles', async (req, res) => {
    const { command, style } = req.body;
    const newStyle = new Style({ command, style });
    await newStyle.save();
    res.json(newStyle);
});

app.get('/api/styles', async (req, res) => {
    const styles = await Style.find();
    res.json(styles);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));