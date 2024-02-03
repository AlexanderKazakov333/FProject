import React from 'react'
import logo from '../../assets/logo.svg' 
import social1 from '../../assets/1-sucial.png'
import social2 from '../../assets/2-sucial.png'
import social3 from '../../assets/3-sucial.png'
import social4 from '../../assets/4-sucial.png'
import social5 from '../../assets/5-sucial.png'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      
        <div className='footer-logo'>
          <img className='logo-footer' src={logo} alt="" /> 
          <span className='footer-text'>Contrary to popular is not simply random text. It has</span>
          <div className='social'>
              <img src={social1} alt="" />
              <img src={social2} alt="" />
              <img src={social3} alt="" />
              <img src={social4} alt="" />
              <img src={social5} alt="" />
          </div>
        </div>

        <div className='more'>
          <div className='About'>
            <h2>About</h2>
            <ul>
            <li>Company</li>
            <li>Team</li>
            <li>Career</li>
            <li>Blogs</li>
              
            </ul>
          </div>

          <div className='Products'>
            <h2>Products</h2>
            <ul>
              <li>E-Books</li>
              <li>Preasantation</li>
              <li>Management</li>
              <li>Dashboard</li>
            </ul>
          </div>

          <div className='Address'>
            <h2>Address</h2>
            <ul>
              <li>Country Delevery</li>
              <li>Counter Beach Post</li>
              <li>www.itobd.com</li>
              <li>+880176565655</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer