import React, { useState } from 'react';
import { signup } from '../../util/ApiUtils';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [summonerTag, setSummonerTag] = useState('');

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form from causing a page reload
        try {
            const response = await signup({ username, summonerTag, email, password });
            console.log('Registration successful:', response);
            // Redirect to login or home page here if needed
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration failure (e.g., showing an error message to the user)
        }
    };

    return (
        <div style={{ margin: 'auto', width: '300px', padding: '20px' }}>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="summoner">Summoner Name:</label>
                    <input
                        type="text"
                        id="summoner"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="summonerTag">Summoner Tag:</label>
                    <input
                        type="text"
                        id="summonerTag"
                        value={summonerTag}
                        onChange={(e) => setSummonerTag(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
