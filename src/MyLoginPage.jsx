import * as React from 'react';
import { useState } from 'react';
import { Form } from 'react-admin';
import { useLogin, useNotify, Notification } from 'react-admin';

const MyLoginPage = ({ theme }) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        console.log(e)
        login({ username, password }).catch(() =>
            notify('Invalid username or password')
        );
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input
                name="username"
                type="username"
                value={username}
                onChange={e => setusername(e.target.value)}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </Form>

    );
};

export default MyLoginPage;