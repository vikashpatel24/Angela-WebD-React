import React from 'react';
import photo from "../assets/photo.jpg"

export default function Card(props) {
  return (
    <>
    <div className="card">
    <div className='name'>{props.name}</div>
    <img src={props.photo} alt='an_image'/>
    <div className='tel'>{props.tel}</div>
    <div className='email'>{props.email}</div>
    </div>
    </>
  )
}
