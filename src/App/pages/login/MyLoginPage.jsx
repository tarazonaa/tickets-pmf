import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'react-admin';
import { useLogin, useNotify, Notification } from 'react-admin';
import background from '/background.jpeg';
import companyLogo from '/pmf_logo.png'; 

const CompanyLogo = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100px;   
    height: 100px;  
    object-fit: contain; 
    z-index: 2;
`;



const LoginPageWrapper = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${background});
        background-size: cover; 
        background-position: center; 
        z-index: -1; 
        background-color: rgba(0, 0, 0, 0.5);
        mix-blend-mode: multiply;
    }
`;


const LoginBox = styled.div`
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    width: 300px;
    text-align: center;
`;

const InputField = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const LoginButton = styled.button`
    background-color: #3D8361;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #1C6758;
    }
`;

const Logo = styled.img`
    max-width: 100px;
    width: 150%;
    margin-bottom: 20px;
`;

const MyLoginPage = ({ theme }) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        console.log(e)
        login({ username, password }).catch(() =>
            notify('Usuario o contraseña incorrectos')
        );
    };

    return (
        <LoginPageWrapper>
            <CompanyLogo src={companyLogo} alt="Company Logo" />
            <LoginBox>
                <Logo src="../logo.svg" alt="Logo"/> 
                <Form onSubmit={handleSubmit}>
                    <InputField
                        name="username"
                        type="username"
                        value={username}
                        onChange={e => setusername(e.target.value)}
                        placeholder="Usuario"
                    />
                    <InputField
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Contraseña"
                    />
                    <LoginButton type="submit">Entrar</LoginButton>
                </Form>
            </LoginBox>
            <Notification />
        </LoginPageWrapper>
    );
};

export default MyLoginPage;
