import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1 className='text-white'>This is About Page</h1>
        <Link className="text-white border px-8 rounded-button py-2 m-2" to={'/profiles'}>click me</Link>
    </div>
  )
}

export default About