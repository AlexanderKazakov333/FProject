import './App.css';
import { instance } from './API/API';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])
  console.log(data);

  useEffect(() => {
    baseURL()
  }, [])

  const baseURL = async () => {
    try{
      const response = await axios.get('https://realty-ggcv.onrender.com/main/flats/')
      setData(response.data)
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="App">

    </div>
  );
}

export default App;
