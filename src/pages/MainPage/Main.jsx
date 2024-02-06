import React from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getFlats } from "../../URL/getFlats";
import Card from "../../components/Card/Card";
import "./Main.css";
import { partners } from "../../components/Partners/Partners";
import Rectangle from "../../assets/Rectangle.png";
import Comments from "../../components/Comments/Commenst";
import Slider from "../../components/Slider/Slider";
import { motion } from "framer-motion";

const Main = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getFlats();
        setData(response.data.results);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);



  return (
    <div className="Main">
      {error && (
        <div className="error-div">
          <Alert className="alert" variant="filled" severity="error">
            Не получилось загрузить данные, повторите попытку позже!
          </Alert>
        </div>
      )}

      {isLoading ? (
        <div className="loading">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <div>
          <div className="big-picture">
            <motion.div
              className="big-text-div"
              animate={{ x: 30 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h1 className="big-text">
                Find the perfect place to stay with your family
              </h1>
            </motion.div>
            <motion.div
              animate={{ x: -30 }}
              transition={{ type: "spring", stiffness: 100 }}
              exit={{ opacity: 0 }}
            >
              <img src={Rectangle} alt="" />
            </motion.div>
          </div>

          <div />

          <div className="part">
            <h1 className="our-partners">Our partners</h1>
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
          <div>
            <Comments />
            <Slider />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
