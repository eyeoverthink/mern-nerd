// controllers/profileController.js
const Profile = require('../models/Profile');

// Create Profile - already defined above

const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find({ user: req.user.id });
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProfileByUUID = async (req, res) => {
    try {
        const profile = await Profile.findOne({ uuid: req.params.uuid, user: req.user.id });
        if (profile) {
            res.json(profile);
        } else {
            res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    const { css, html, js, ejs } = req.body;
    try {
        const profile = await Profile.findOne({ uuid: req.params.uuid, user: req.user.id });
        if (profile) {
            profile.css = css || profile.css;
            profile.html = html || profile.html;
            profile.js = js || profile.js;
            profile.ejs = ejs || profile.ejs;
            await profile.save();
            res.json(profile);
        } else {
            res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProfile = async (req, res) => {
    try {
        const profile = await Profile.findOneAndDelete({ uuid: req.params.uuid, user: req.user.id });
        if (profile) {
            res.json({ message: 'Profile removed' });
        } else {
            res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProfile, getProfiles, getProfileByUUID, updateProfile, deleteProfile };