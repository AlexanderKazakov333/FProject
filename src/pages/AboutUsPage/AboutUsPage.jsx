import React from 'react' 
import logo from '../../assets/logo.svg' 
import { useNavigate } from 'react-router-dom' 
import {aboutUs} from '../../components/AboutUsCard/CardAboutUs' 
import {aboutUs2} from '../../components/AboutUsCard/CardAboutUs' 
import img from '../../assets/AboutUsFoto.svg' 
import '../../pages/AboutUsPage/AboutUsPage.css' 
 
 
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
        <div className='card-grid'> 
 
        <div> 
        {aboutUs.map((item,idx) => { 
        return( 
            <div key={idx}> 
                <div> 
                    <div className='card'> 
                        <img className='icon' src={item.icon} alt="" /> 
                        <h2 className='icon'>{item.security}</h2> 
                        <span className='text'>{item.text}</span> 
                    </div> 
                </div> 
            </div> 
        ) 
        })} 
        </div> 

        <div> 
            <img className='img' src={img} alt="" /> 
        </div> 

        <div> 
        {aboutUs2.map((item,idx) => { 
        return( 
            <div key={idx}> 
              <div> 
                <div className='card'> 
                  <img className='icon' src={item.icon} alt="" /> 
                  <h2 className='icon'>{item.security}</h2> 
                  <span className='text'>{item.text}</span> 
                </div> 
              </div> 
            </div> 
          ) 
        })} 
        </div> 
 
        </div> 
         
      </div> 
    </div> 
  ) 
} 
 
export default AboutUsPage