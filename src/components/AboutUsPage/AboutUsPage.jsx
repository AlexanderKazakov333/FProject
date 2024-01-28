import React from 'react'
import logo from '/Users/ADMIN/Desktop/FProject/src/acces/logo.svg'
import { useNavigate } from 'react-router-dom'
import '../AboutUsPage/AboutUsPage.css'






const AboutUsPage = () => {

  const navigate = useNavigate()

  const page2 = () => {
  navigate('/')
}
  return (
    <div>
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

            <li className='li'>About Us</li>
          </ul>
          <button className='btn1'>+ добавить обьявление</button>
        </div>
      </div>
      <div className='main'>
        <h1 className='title'>Property Featured</h1>
        <span className='text'>Real estate is a crowded field. But with the number of buyers purchasing homes <br />through real estate agents and brokers growing there’s plenty of </span>
      </div>
    </div>
  )
}

export default AboutUsPage