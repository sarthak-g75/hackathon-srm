import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'

const Forces = () => {
    const navigate = useNavigate();

    const [batallionName, setBatallionName] = useState('');
    const [message, setMessage] = useState('');

    const [batallions, setBattalions] = useState('');

    const changeBatallionName = (event) => setBatallionName(event.target.value);

    async function handleSubmit(event) {
        event.preventDefault();
        
        let data = await fetch('http://localhost:5000/api/auth/add-batallion', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth_token')
            },
            body: JSON.stringify({ 'name': batallionName })
        });

        let response = await data.json();
        console.log(response);

        if (data.status === 200) {
            setMessage('Batallion Added');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        } else {
            setMessage('Error adding Batallion');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        }

        getBatallions();
    }

    async function getBatallions(){
        let data = await fetch('http://localhost:5000/api/auth/get-batallions', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('auth_token')
            }
        })

        let response = await data.json();
        console.log(response);
        setBattalions(response.battalions.map((item) => {
            console.log(item._id);
            return (
                <Link to={`/batallion/${item._id}`}>
                    <div id={item._id} key={item._id} className="mb-4">
                        <h1 className="text-xl font-bold text-yellow-800">{item.name}</h1>
                        {item.crate.map((crate, index) => (
                            <div key={index} className="ml-4">
                                <p className="text-gray-800">Name: {crate.name}</p>
                                <p className="text-gray-800">Type: {crate.type}</p>
                            </div>
                        ))}
                    </div>
                </Link>
            );
        }));

    }

    useEffect(()=>{
        getBatallions();        
    }, []);

    return (

        <>
            <div className="text-yellow-700">{message}</div>
            {batallions ? batallions : <div></div>}
            <div className='h-[100px] w-[500px]'>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen bg-yellow-200">
                    <input
                        type='text'
                        placeholder='Enter Batallion Name'
                        onChange={changeBatallionName}
                        className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                    />
                    <button
                        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>

    )
}

export default Forces;
