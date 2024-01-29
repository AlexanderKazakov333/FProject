import React from 'react' 
import {aboutUs} from '../../components/AboutUsCard/CardAboutUs' 
import {aboutUs2} from '../../components/AboutUsCard/CardAboutUs' 
import img from '../../assets/AboutUsFoto.svg' 
import '../../pages/AboutUsPage/AboutUsPage.css' 
 
 
const AboutUsPage = () => { 


  return ( 
    <div> 
      <div className='main'> 
        <h1 className='title'>Property Featured</h1> 
        <span className='text'>Real estate is a crowded field. But with the number of buyers purchasing homes <br />through real estate agents and brokers growing there’s plenty of </span> 
        <div className='card-grid2'> 

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