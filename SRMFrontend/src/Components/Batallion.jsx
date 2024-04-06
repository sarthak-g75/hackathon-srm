import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Batallion = () => {
    
    const { batallionId } = useParams();

    const [type, setType] = useState();
    const  [name, setName] = useState();
    const [weight, setWeight] = useState();

    const changeType = (event)=>setType(event.target.value);
    const changeName = (event)=>setName(event.target.value);
    const changeWeight = (event)=>setWeight(event.target.value);

    async function handleSubmit(event){
        event.preventDefault();

        let data = await fetch(`http://localhost:5000/api/auth/add-crate/${batallionId}`, {
            method: 'PUT',
            headers: {
                'Authorization': localStorage.getItem('auth_token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'type': type, 'name': name, 'weight': weight})  
        })
    }

    useEffect(()=>{
        
    })
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Type of crate' onChange={changeType}/>
                    <input type='text'placeholder='Name of crate' onChange={changeName}/>
                    <input type='number' placeholder='Weight of crate' onChange={changeWeight}/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Batallion