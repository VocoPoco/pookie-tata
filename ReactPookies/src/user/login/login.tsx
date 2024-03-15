import React, { useState } from 'react';
import { login } from '../../util/ApiUtils'; // Adjust the import path according to your file structure

const LoginPage = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form from causing a page reload
        try {
            const response = await login({ usernameOrEmail, password });
            console.log('Login successful:', response);
            // Here you can redirect the user or do other actions on successful login
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (e.g., showing an error message to the user)
        }
    };

    return (
        <div style={{ margin: 'auto', width: '300px', padding: '20px' }}>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="usernameOrEmail">Username/Email:</label>
                    <input
                        type="text"
                        id="usernameOrEmail"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
