// ProfilesDropdown.js
import React from 'react';

const ProfilesDropdown = ({ onLoadProfile }) => {
    const handleSelect = (event) => {
        const selectedProfile = {}; // Replace with the actual profile data if available
        onLoadProfile(selectedProfile);
    };

    return (
        <select onChange={handleSelect}>
            <option value="">Select Profile</option>
            {/* Replace with actual profile options */}
            <option value="profile1">Profile 1</option>
            <option value="profile2">Profile 2</option>
        </select>
    );
};

export default ProfilesDropdown;