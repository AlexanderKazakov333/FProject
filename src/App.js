import './App.css';
import { instance } from './API/API';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([])
  // console.log(data);

  const baseURL = async () => {
    
    

    try{
      const response = await axios.get('https://realty-ggcv.onrender.com')
      console.log(response);
      // setData(response)
    }
    catch (e) {
      console.log(e);
    }
  }



  return (
    <div className="App">
      <button onClick={baseURL}>123</button>
    </div>
  );
}

export default App;
