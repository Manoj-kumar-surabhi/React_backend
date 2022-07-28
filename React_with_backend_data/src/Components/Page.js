import React from 'react'
import { useLocation } from 'react-router-dom'
import './Style.css'

const Page = () => {
const location = useLocation();
const {title, img, desc} = location.state;
console.log(title)
  return (
    <div className='page'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{desc}</p>
      
    </div>
  )
}

export default Page