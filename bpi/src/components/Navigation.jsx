import React from 'react'
import { Link } from 'react-router-dom'



const Navigation = () => {
  return (
    <div className='flex justify-between items-center  m-auto py-8 text-sm w-11/12'>
        <h2>Logo</h2>
        <div className='w-40 flex justify-between'>
            {/* <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link> */}
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
        </div>
        <div className=''>
            {/* <Link className='rounded-button px-6 py-1 border mx-2' to={'register'}>Sign up</Link>
            <Link className='mx-2 rounded-button px-6 py-0.5 ' to={'register'}>Log in</Link> */}
            <button className='rounded-button px-6 py-1 border mx-2'>Sign up</button>
            <button className='mx-2 rounded-button px-6 py-0.5'>Log in</button>
        </div>
    </div>
  )
}

export default Navigation