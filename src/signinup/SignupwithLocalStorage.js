import React, { useState } from 'react';

export const SignUpWithLocalStorage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
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
        // Save user data to local storage
        localStorage.setItem('userData', JSON.stringify(formData));
        // Optionally, you can perform additional actions here like redirecting to another page
        // or displaying a success message.
        // For now, let's just log a success message to the console.
        console.log('User signed up successfully:', formData);
    };

    return (
        <div className='SignUpWithLocalStorage'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type='text' id='username' name='username' placeholder='username' value={formData.username} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='email' id='email' placeholder='email' name='email' value={formData.email} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='password' id='password' placeholder='password' name='password' value={formData.password} onChange={handleChange} />
                </div>
                <button type='submit' className='sign'>Sign Up</button>
            </form>
        </div>
    );
};
