import React from 'react'
import { useParams } from "react-router-dom"; 
import { getFlat } from '../../BaseURL/getFlat';
import { useEffect, useState } from "react";


const DetaildeRoomPage = () => {

  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const response = await getFlat(id);
        setData(response.data);
    
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false)
      }
    })();
  }, []);

  console.log(data);

  return (
    <div>
      {isLoading ? 
      <div>
      Load....
      </div>  
      :

      <>
      <div>
        {data?.title}
      </div>
      </>
    }
    </div>
  )
}

export default DetaildeRoomPage