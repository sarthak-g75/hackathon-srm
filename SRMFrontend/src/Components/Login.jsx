import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        let data = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ 'email': email, 'password': password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let response = await data.json();
        if (data.status === 200) {
            localStorage.setItem('auth_token', response.token)
            navigate('/forces');
        } else {

        }
    }

    useEffect(() => {

    })

    return (
        <>
            <form className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-500">
                <input
                    type='email'
                    placeholder='testuser@gmail.com'
                    onChange={changeEmail}
                    className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                />
                <input
                    type='password'
                    placeholder='test123'
                    onChange={changePassword}
                    className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                >
                    Submit
                </button>
            </form>
        </>
    )
}
