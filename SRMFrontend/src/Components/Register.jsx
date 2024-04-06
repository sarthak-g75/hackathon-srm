import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const changeName = (event) => setName(event.target.value);
    const changeRole = (event) => setRole(event.target.value);
    const changeEmail = (event) => setEmail(event.target.value);
    const changePassword = (event) => setPassword(event.target.value);

    async function handleSumbit(event) {
        event.preventDefault();
        console.log(name, role, email, password);
        let data = await fetch('http://localhost:5000/api/auth/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': name, 'role': role, 'email': email, 'password': password })
        });

        let response = await data.json();
        if (data.status === 201) {
            setMessage('User Registered');
            localStorage.setItem('auth_token', response.token);
            setTimeout(() => {
                navigate('/forces');
            }, 2000);
        } else {
            setMessage('Error Registering User');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        }
    }

    return (
        <>
            <div>{message}</div>
            <form onSubmit={handleSumbit} className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-500">
                <input
                    type='text'
                    placeholder='Enter Name'
                    onChange={changeName}
                    className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                />
                <input
                    type='role'
                    placeholder='Enter Role'
                    onChange={changeRole}
                    className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                />
                <input
                    type='email'
                    placeholder='Enter Email'
                    onChange={changeEmail}
                    className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                />
                <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={changePassword}
                    className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                />
                <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
