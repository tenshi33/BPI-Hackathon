import React from 'react'



const Card = ({star, title, paragraph}) => {
  return (
  
    <div className='w-card-width h-card-height hover:bg-fuchsia-500/30  rounded-3xl p-8 space-y-4 backdrop-blur-sm  bg-fuchsia-900/20 duration-500 z-10' >
        <div  className='w-20'>
            <img src={star}/>
        </div>
        <h2 className='font-bold text-xl'>{title}</h2>
        <p className='font-normal text-sm'>{paragraph}</p>

    </div>
  )
}

export default Card