// routes/profileRoutes.js
const express = require('express');
const { createProfile, getProfiles, getProfileByUUID, updateProfile, deleteProfile } = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(protect, createProfile)
    .get(protect, getProfiles);

router.route('/:uuid')
    .get(protect, getProfileByUUID)
    .put(protect, updateProfile)
    .delete(protect, deleteProfile);

module.exports = router;