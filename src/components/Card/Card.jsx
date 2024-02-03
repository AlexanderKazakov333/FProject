import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';


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
          <h3>{item.title}</h3>
          <span>Bishkek Kyrgyzstan</span>
          <div className='rooms-area'>
            <div><span>Кол-во комнат: {item.rooms}</span></div>
            <div><span>Площадь: {item.total_area}м</span></div>
          </div>
          <div className='price-btn'>
            <div className='price-button'><h3>Цена: {item.price}$</h3></div>
            <div><button onClick={() => goToDetailRoom(item.id)}>View</button></div>
          </div>
       </div>
    </div>
  )
}

export default Card