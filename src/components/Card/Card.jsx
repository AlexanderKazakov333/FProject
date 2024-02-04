import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';
import Vector from "../../assets/Vector.png"


const Card = (props) => {
  
    const {item} = props
    const navigate = useNavigate()

   const goToDetailRoom = (id) => {
     navigate(`/${id}`)
   } 

  return (
    <div className='card'>
       <div className='photo'>
        <img className='underphoto' src={item.flat_images[0].image} alt="" />
       </div>
       <div>
          <h3 className='house-title'>{item.title}</h3>
          <div className='geo-div'>
          <img src={Vector} alt="" />
          <span className='geo'>Bishkek Kyrgyzstan</span>
          </div>
          <div className='rooms-area'>
            <div><span>Кол-во комнат: {item.rooms}</span></div>
            <div><span>Площадь: {item.total_area}м</span></div>
          </div>
          <div className='price-btn'>
            <div className='price-button'><h3>${item.price}</h3></div>
            <div><button className='real-button' onClick={() => goToDetailRoom(item.id)}>View details</button></div>
          </div>
       </div>
    </div>
  )
}

export default Card