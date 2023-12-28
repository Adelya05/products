import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shop.css";
//import './ShopStyle.scss'

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/shopProducts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="Shop">
        <h2 className="shop-h2">Магазины для вас</h2>
        <div className="shop-list">
          {data.map((item) => (
            <div className="shop-products" key={item.id}>
              <div className="shop-p">
                <img src={item.logo} alt={item.name} />
                <p className="shop-title">{item.title}</p>
              </div>

              <div className="shop-imgs">
                <img className="imgs" src={item.image} alt={item.name} />
                <img className="imgs" src={item.image2} alt={item.name} />
                <img className="imgs" src={item.image3} alt={item.name} />
              </div>
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

export default Shop;
