import React, { useState } from 'react';
import { login } from '../../util/ApiUtils';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS file

const LoginPage = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form from causing a page reload
        try {
            const response = await login({ usernameOrEmail, password });
            console.log('Login successful:', response);
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (e.g., showing an error message to the user)
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="usernameOrEmail">Username/Email:</label>
                    <input
                        type="text"
                        id="usernameOrEmail"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-button">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
