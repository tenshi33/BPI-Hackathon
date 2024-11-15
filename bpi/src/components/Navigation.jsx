import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Navigation = () => {
  const navigate = useNavigate();


  const handleHome = () =>{
    navigate('/')
  }

  const handleContact = () =>{
    navigate('/Contact')
  }
  
  const HandleAboutPage = () =>{
    navigate('/about')
  }
  const handleLogin = () => {
      navigate("/login");
  };
  const handleRegister = () => {
      navigate("/register");
  };
  

  
  const [isLogIn , setIsLogIn] = useState(false)

  return (
   <div className='w-full fixed z-50 '>
    <div className='flex  justify-between items-center py-8 text-sm  px-10  max-w-7xl m-auto'  >
        <h2 className='w-auto'>Logo</h2>
        <div className='w-7/12 flex justify-between'>
          <div className='w-40 flex justify-between'>
              <button onClick={handleHome}>Home</button>
              <button onClick={HandleAboutPage}>About</button>
              <button>Contact</button>
          </div>
          <div className=''>
              <button className='rounded-button px-6 py-1 border mx-2' onClick={handleRegister}>Sign up</button>
              <button className='mx-2 rounded-button px-6 py-0.5' onClick={handleLogin}>Log in</button>
          </div>
        </div>
        
    </div>
    </div>

    
  )
}
//Default Syles (Initial Nav Styles)

// div className='flex  justify-between items-center py-8 text-sm w-full px-10 fixed z-50' id='back-to-top' >
//         <h2 className=' '>Logo</h2>
//         <div className='w-40 flex justify-between '>
//             <button>Home</button>
//             <button>About</button>
//             <button>Contact</button>
//         </div>
//         <div className=''>
//             <button className='rounded-button px-6 py-1 border mx-2'>Sign up</button>
//              <button className='mx-2 rounded-button px-6 py-0.5'>Log in</button>
//         </div>
//     </div>


//=================================================================================//

//Default Navigation for /Login

// div className='flex  justify-between items-center py-8 text-sm w-full px-10 fixed z-50' id='back-to-top' >
//         <h2 className=' '>Logo</h2>
//         <div className='w-40 flex justify-between '>
//             <button>Home</button>
//             <button>About</button>
//             <button>Contact</button>
//         </div>
//         <div className=''>
//             <button className='rounded-button px-6 py-1  mx-2'>Sign up</button>
//  
//         </div>
//     </div>

//=================================================================================//

//Default Navigation For /register

// div className='flex  justify-between items-center py-8 text-sm w-full px-10 fixed z-50' id='back-to-top' >
//         <h2 className=' '>Logo</h2>
//         <div className='w-40 flex justify-between '>
//             <button>Home</button>
//             <button>About</button>
//             <button>Contact</button>
//         </div>
//         <div className=''>
//             <button className='rounded-button px-6 py-1  mx-2'>Log in</button>
//  
//         </div>
//     </div>


//=================================================================================//

//Default User Logged In navigation

// div className='flex  justify-between items-center py-8 text-sm w-full px-10 fixed z-50' id='back-to-top' >
//         <h2 className=' '>Logo</h2>
//         <div className='w-40 flex justify-between '>
//             <button>Home</button>
//             <button>Questions</button>
//             <button>Profile</button>
//         </div>
//         <div className=''>
//             <button className='rounded-button px-6 py-1  mx-2'>Log out</button>
//  
//         </div>
//     </div>

export default Navigation