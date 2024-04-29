import React, { useState } from 'react';

export const SignInWithLocalStorage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Retrieve user data from local storage
        const savedUserData = JSON.parse(localStorage.getItem('userData'));
        if (savedUserData) {
            if (savedUserData.username === formData.username && savedUserData.password === formData.password) {
                console.log('User signed in successfully:', formData.username);
                // Optionally, you can perform additional actions here like redirecting to another page
                // or displaying a success message.
            } else {
                console.log('Invalid username or password');
            }
        } else {
            console.log('No user data found');
        }
    };

    return (
        <div className='SignInWithLocalStorage'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    
                    <input type='text' id='username' name='username' placeholder='username' value={formData.username} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    
                    <input type='password' id='password' name='password' placeholder='password' value={formData.password} onChange={handleChange} />
                </div>
                <button type='submit' className='sign'>Sign In</button>
            </form>
        </div>
    );
};
