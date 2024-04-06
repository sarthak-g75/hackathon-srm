import React from 'react'
import LoginButton from './LoginButton'
import { Link } from 'react-router-dom'

const NewNavbar = () => {
  return (
    <div className='w-full'>
        <div className='flex px-24 py-5'>
            <img className='w-22' src='/logo_1.svg'/>
            <img className='w-22' src='/logo_2.svg'/>
        </div>
        <nav className='h-[60px] bg-[#772F1A] flex justify-evenly items-center text-[#E9E3B4] font-[15px] px-2'>
            <Link to='/'><div>Home</div></Link>
            <div>About+</div>
            <div>Services+</div>
            <div>Notification+</div>
            <div>More</div>
            <Link to='/login'><LoginButton/></Link>
        </nav>
    </div>
  )
}

export default NewNavbar