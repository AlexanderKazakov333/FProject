import React from "react";
import { useEffect, useState } from "react";
import { baseURL } from "../../BaseURL/BaseURL";
import Card from "../../components/Card/Card";
import "./Main.css";
import { partners } from "../../components/Partners/Partners";
import Rectangle from "../../assets/Rectangle.png";

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
  return (

    <div>
      <div className="big-picture">
        <div className="big-text-div">
          <h1 className="big-text">
            Find the perfect place to stay with your family
          </h1>
        </div>
        <div>
        <img src={Rectangle} alt="" />
        </div>
      </div>

      <div className="part">
        <h1>Our partners</h1>
        <div className="partners">
          {partners.map((item, idx) => (
            <div key={idx}>
              <img src={item.scr} alt="" />
            </div>
          ))}
        </div>
      </div>

      <h1 className="popular-prop">Popular Properties</h1>

      <div className="card-grid">
        {data.map((item, idx) => {
          return <Card key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
