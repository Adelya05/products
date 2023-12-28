import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import ProductModal from "../Modal/ProductModal";

const Kupit = ({ onAdd }) => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="kupit">
        <h2>Успей купить</h2>
        <div className="product-list">
          {data.map((item, index) => (
            <div
              className="product"
              key={item.index }
              onClick={() => openModal(item)}
            >
              <img className="img" src={item.image} alt={item.name} />
              <div className="price">
                <p className="price1">{item.price} ₽</p>
                <p className="previousPrice">{item.previousPrice} ₽</p>
              </div>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="all-products">
          <h2>Все товары</h2>
        </div>
      </div>

      {isModalVisible && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};

export default Kupit;
