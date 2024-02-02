import React from "react";
import { useParams } from "react-router-dom";
import { getFlat } from "../../BaseURL/getFlat";
import { useEffect, useState } from "react";

const DetaildeRoomPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getFlat(id);
        setData(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log(data);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <div>{data?.title}</div>
            <div>Район: {data?.district}</div>
            <div>
              Этаж: {data?.floor} из {data?.number_of_floors}
            </div>
            <div>Площадь: {data?.total_area}</div>
            <div>Тип документа: {data?.document}</div>
            <div>Состояние: {data?.condition}</div>
            <div>Описание: {data?.description}</div>
            <div>Цена: {data?.price} $</div>
            <div>ID: {data?.id}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetaildeRoomPage;
