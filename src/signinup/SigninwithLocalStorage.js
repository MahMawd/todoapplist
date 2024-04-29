import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignInWithLocalStorage = ({onSignIn}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const savedUserData = JSON.parse(localStorage.getItem('userData'));
        if (savedUserData) {
            if (savedUserData.username === formData.username && savedUserData.password === formData.password) {
                console.log('User signed in successfully:', formData.username);
                onSignIn();
                navigate("/MainPage");
            } else {
                alert('Invalid username or password');
                console.log('Invalid username or password');
            }
        } else {
            alert('Invalid username or password');
            console.log('No user data found');
        }
    };

    return (
        <div className='SignInWithLocalStorage'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type='text' id='username' name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <input type='password' id='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
                </div>
                <button type='submit' className='sign'>Sign In</button>
            </form>
        </div>
    );
};
