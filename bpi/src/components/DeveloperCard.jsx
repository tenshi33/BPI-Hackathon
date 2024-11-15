import React from 'react'
import github from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
const DeveloperCard = (props) => {

  return (
    <div className='h-developer-card-height w-developer-card-width border border-purple-300 rounded-md flex p-3 bg-fuchsia-950/20  m-auto'>
    <div className='bg-fuchsia-900/50 h-full w-4/12 p-3 rounded-md flex flex-col justify-between'>
      <div className='w-full h-full text-center'>
        <div className='mb-1 circle-img w-developer-profile-width h-developer-profile-hight rounded-full bg-white m-auto'>
          <img src={props.image} alt="" className=' rounded-full' />
        </div>
        <h2 className='text-name-size font-bold'>{props.name}</h2>
        <p className='text-position-size'>{props.position}</p>
       
      </div>
      
    </div>
    <div className='h-full w-8/12 p-5 flex flex-col justify-between'>
        <h2 className='text-lg font-thin italic'>"{props.quotes}"</h2>
        <div className='flex gap-2 '>
          <a href={props.github} target='_blank' className='w-8 h-8 bg-white  rounded-md grid place-items-center'>
            <img className='w-7' src={github} alt="Github Logo" />
          </a>
          <a href='' className='w-8 h-8 bg-white  rounded-md grid place-items-center'>
            <img className='w-7' src={gmail} alt="Gmail Logo" />
          </a>
          <a href='' className='w-8 h-8 bg-white  rounded-md grid place-items-center'>
            <img className='w-7' src={linkedIn} alt="LinkedIn Logo" />
          </a>
        </div>
    </div>
  </div>
  )
}

export default DeveloperCard