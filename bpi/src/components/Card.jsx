import React from 'react'



const Card = ({star}) => {
  return (
  
    <div className='w-card-width h-card-height hover:bg-fuchsia-500/30  rounded-3xl p-8 space-y-4 backdrop-blur-sm z-50 bg-fuchsia-900/20 duration-500'>
        <div  className='w-20'>
            <img src={star}/>
        </div>
        <h2 className='font-bold text-xl'>"Lorem ipsum dolor sit amet, consectetur adi </h2>
        <p className='font-normal text-sm'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

    </div>
  )
}

export default Card