import React from 'react'

const LoginButton = ({value}) => {
  return (
        <div className='flex justify-center items-center'>
            <button className='bg-[#E9E3B4] text-[#772F1A] px-8 py-3 rounded-3xl font-bold hover:bg-[#772F1A] hover:text-[#E9E3B4]'>{value}</button>
        </div>    
  )
}

export default LoginButton