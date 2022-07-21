import React from 'react'
import './NewCard.css'
const NewCard = ({image,heading,detail,href,alt,title}) => {
  return (
    <div className="n-Card">
      <a href={href}>
    <img src={image} alt={alt} title={title}  className='c-image' />
      </a>
    <span>{heading}</span>
    <span>{detail}</span> 
</div>
  )
}

export default NewCard