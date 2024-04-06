import React, { useState } from 'react';

const BattalionCard = ({ battalion }) => {
    return (
        <div className="bg-yellow-300 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-yellow-800">{battalion.name}</h2>
            <p className="text-gray-800">Location: {battalion.location}</p>
            <p className="text-gray-800">Strength: {battalion.strength}</p>
        </div>
    );
};

const AddBattalionForm = ({ onAddBattalion }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [strength, setStrength] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddBattalion({ name, location, strength });
        setName('');
        setLocation('');
        setStrength('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
            <input
                type="text"
                placeholder="Battalion Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-yellow-200 border-b-2 border-yellow-600 focus:outline-none focus:border-yellow-800 rounded-lg p-2 mb-2 text-gray-800"
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-yellow-200 border-b-2 border-yellow-600 focus:outline-none focus:border-yellow-800 rounded-lg p-2 mb-2 text-gray-800"
            />
            <input
                type="text"
                placeholder="Strength"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
                className="bg-yellow-200 border-b-2 border-yellow-600 focus:outline-none focus:border-yellow-800 rounded-lg p-2 mb-2 text-gray-800"
            />
            <button
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
            >
                Add Battalion
            </button>
        </form>
    );
};

const BattalionManagement = () => {
    const [battalions, setBattalions] = useState([]);

    const addBattalion = (battalion) => {
        setBattalions([...battalions, battalion]);
    };

    return (
        <div className="bg-yellow-300 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-yellow-800 mb-4">Battalion Management</h1>
            <AddBattalionForm onAddBattalion={addBattalion} />
            <div className="mt-8">
                {battalions.map((battalion, index) => (
                    <BattalionCard key={index} battalion={battalion} />
                ))}
            </div>
        </div>
    );
};

export default BattalionManagement;
