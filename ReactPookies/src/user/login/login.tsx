import React, { useState } from 'react';
import { login } from '../../util/ApiUtils';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form from causing a page reload
        try {
            const response = await login({ usernameOrEmail, password });
            console.log('Login successful:', response);
            navigate('/home'); // Navigate to home or any page you consider after login
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
