import React from 'react'
import BattalionsManagement from './BattalionsManagement'

const BattalionsComponent = () => {
  return (
    <div className='relative py-20'>
        <img className='-z-10 w-full absolute' src='/bgImage.svg'/>

        <div className='buttons flex justify-between items-center relative py-10 px-10 bg-[#EAE7D5B8] bgOpacity-[70%] mt-10'>
            <button className='bg-[#772F1A] text-[#E9E3B4] px-8 py-3 rounded-3xl font-bold'>Battalions</button>
            <button className='bg-[#772F1A] text-[#E9E3B4] px-8 py-3 rounded-3xl font-bold'>Add</button>
        </div>

        <div>
          <BattalionsManagement/>
        </div>
    </div>
  )
}

export default BattalionsComponent
