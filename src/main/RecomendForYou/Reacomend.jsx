import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recomend.css";

const Reacomend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recomendProducts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="recomend">
        <h2>Рекомендуемые для вас товары </h2>
        <div className="recomend-list">
          {data.map((item) => (
            <div className="recomend-product" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="recomend-price">
                <p>{item.price} ₽</p>
              </div>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="all-products">
          <h2>Все товары</h2>
        </div>
      </div>
    </div>
  );
};

export default Reacomend;
