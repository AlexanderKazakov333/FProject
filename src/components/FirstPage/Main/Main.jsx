import React from "react";
import { useEffect, useState } from 'react';
import { baseURL } from "../../../BaseURL/BaseURL";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


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
    <Header />
    <div>Main</div>
    <Footer />
  </div>;
};

export default Main;
