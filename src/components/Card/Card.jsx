import React from 'react'
import './Card.css'
const Card = ({image,heading,detail}) => {
  return (
    <div className="Card">
        <img src={image} alt="" className='c-image' />
        <span>{heading}</span> 
        <span>{detail}</span>
    </div>
  )
}

export default Card