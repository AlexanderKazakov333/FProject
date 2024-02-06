import React from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Swiper from "../../components/Swiper/Swiper";
import { useParams } from "react-router-dom";
import { getOneFlat } from "../../URL/getOneFlat";
import { useEffect, useState } from "react";
import "./DetaildeRoomPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetaildeRoomPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getOneFlat(id);
        setData(response.data);
      } catch (e) {
        setError(true);
        setData({});
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const Notify = () => {
    toast("Гена Генадьевич Генадьев Телефон: 666-66-66-66", {
      position: "bottom-right",
    });
  };

  return (
    <div>
      {error && (
        <div className="error-div">
          <Alert className="alert" variant="filled" severity="error">
            Не получилось загрузить данные, повторите попытку позже!
          </Alert>
        </div>
      )}
      <ToastContainer />
      {isLoading ? (
        <div className="loading">
          <Box sx={{ display: "flex" }}>
            <CircularProgress className="loading" />
          </Box>
        </div>
      ) : (
        <div className="detailed-text-photo">
          <div className="detailed-photo">
            <Swiper items={data.flat_images} />
          </div>
          <div className="detailed-text">
            <div>
              <div className="title">{data.title}</div>
              <div className="other-about">Район: {data?.district}</div>
              <div className="other-about">
                Этаж: {data?.floor} из {data?.number_of_floors}
              </div>
              <div className="other-about">Площадь: {data?.total_area}</div>
              <div className="other-about">Тип документа: {data?.document}</div>
              <div className="other-about">Состояние: {data?.condition}</div>
              <div className="other-about-descript">
                Описание: {data?.description}
              </div>
              <div className="other-about">Цена: {data?.price} $</div>
              <div className="other-about">ID: {data?.id}</div>
            </div>
            <div className="button-div">
              <button onClick={Notify} className="detailed-btn">
                Контакты
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetaildeRoomPage;
