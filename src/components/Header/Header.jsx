import React from 'react'
import logo from '../../assets/logo.svg' 
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const navigate = useNavigate() 
  const page2 = () => { 
  navigate('/') 
} 
  const pageAboutUs = () => {
    navigate('/aboutUs')
  }



  return (
    <div className='Header'> 
    <div> 
      <img className='logo' src={logo} alt="" />   
    </div> 

    <div className='menu'> 
      <ul className='lishki'> 
        <li  
        onClick={page2} 
        className='li1'>Home 
        </li> 

        <li 
        onClick={pageAboutUs}
        className='li'>About Us
        </li> 
      </ul> 
      <button className='btn1'>+ добавить обьявление</button> 
    </div> 
  </div> 
  )
}

export default Header