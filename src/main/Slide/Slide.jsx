import React, { useState, useEffect } from "react";
import axios from "axios";
//import './SlideStyle.scss'
import "./slide.css";

const Slide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/slideProducts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Slide">
      <h1>Ранее вы смотрели</h1>
      <div className="slide-list">
        {data.map((item) => (
          <div className="slide-product" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="slide-p">
              <p className="slide-text">{item.description}</p>
              <p className="slide-price">от {item.price} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
