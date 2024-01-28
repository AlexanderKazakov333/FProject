import React from "react";
import { useEffect, useState } from 'react';
import { baseURL } from "../../BaseURL/BaseURL";
import Card from "../../components/Card/Card";
import './Main.css'
import { partners } from "../../components/Partners/Partners";



const Main = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    (async () => {
      try {
        const response = await baseURL();
        setData(response.data.results);
      } catch (e) {
        console.log(e);
      } finally {
      }
    })();
  }, []);
  return <div>

    <h1>Our partners</h1>

    <div className="partners">
      {partners.map((item) =>   <img src={item.scr} alt="" /> )}
    </div>

    <h1>Popular Properties</h1>
    
    <div className="card-grid">
      {data.map((item, idx) => {
        return (
          <Card 
            key={idx}
            item={item}
          />
        )
      })}
    </div>

  </div>;
};

export default Main;
