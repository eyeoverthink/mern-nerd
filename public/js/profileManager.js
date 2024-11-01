// profileManager.js

async function createProfile(uuid, css, html, js, ejs) {
    const token = localStorage.getItem('token');
    if (!token) {
        toastr.error('Not authenticated.');
        return;
    }
    try {
        const response = await fetch('http://localhost:5000/api/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ uuid, css, html, js, ejs })
        });
        const data = await response.json();
        if (response.ok) {
            toastr.success('Profile created successfully!');
            return data;
        } else {
            toastr.error(data.message || 'Profile creation failed.');
        }
    } catch (error) {
        toastr.error('An error occurred while creating profile.');
    }
}

async function getProfiles() {
    const token = localStorage.getItem('token');
    if (!token) {
        toastr.error('Not authenticated.');
        return;
    }
    try {
        const response = await fetch('http://localhost:5000/api/profiles', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            toastr.error(data.message || 'Failed to fetch profiles.');
        }
    } catch (error) {
        toastr.error('An error occurred while fetching profiles.');
    }
}

async function updateProfile(uuid, css, html, js, ejs) {
    const token = localStorage.getItem('token');
    if (!token) {
        toastr.error('Not authenticated.');
        return;
    }
    try {
        const response = await fetch(`http://localhost:5000/api/profiles/${uuid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ css, html, js, ejs })
        });
        const data = await response.json();
        if (response.ok) {
            toastr.success('Profile updated successfully!');
            return data;
        } else {
            toastr.error(data.message || 'Profile update failed.');
        }
    } catch (error) {
        toastr.error('An error occurred while updating profile.');
    }
}

async function deleteProfile(uuid) {
    const token = localStorage.getItem('token');
    if (!token) {
        toastr.error('Not authenticated.');
        return;
    }
    try {
        const response = await fetch(`http://localhost:5000/api/profiles/${uuid}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (response.ok) {
            toastr.success('Profile deleted successfully!');
            return data;
        } else {
            toastr.error(data.message || 'Profile deletion failed.');
        }
    } catch (error) {
        toastr.error('An error occurred while deleting profile.');
    }
}