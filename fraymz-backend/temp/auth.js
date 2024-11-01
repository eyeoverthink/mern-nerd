// auth.js

async function register(username, email, password) {
    try {
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            toastr.success('Registration successful!');
            // Redirect or update UI as needed
        } else {
            toastr.error(data.message || 'Registration failed.');
        }
    } catch (error) {
        toastr.error('An error occurred during registration.');
    }
}

async function login(email, password) {
    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            toastr.success('Login successful!');
            // Redirect or update UI as needed
        } else {
            toastr.error(data.message || 'Login failed.');
        }
    } catch (error) {
        toastr.error('An error occurred during login.');
    }
}

async function getProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
        toastr.error('No authentication token found.');
        return;
    }
    try {
        const response = await fetch('http://localhost:5000/api/users/profile', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            toastr.error(data.message || 'Failed to fetch profile.');
        }
    } catch (error) {
        toastr.error('An error occurred while fetching profile.');
    }
}