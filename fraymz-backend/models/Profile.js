// models/Profile.js
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    uuid: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    css: { type: String, default: '' },
    html: { type: String, default: '' },
    js: { type: String, default: '' },
    ejs: { type: String, default: '' }, // For EJS templates
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Profile', ProfileSchema);