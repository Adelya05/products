import React from "react";
import "./modal.css";

const ProductModal = ({ product, onClose, onAdd }) => {
  const handleAddToCart = () => {
    onAdd(product);
    console.log(`Продукт добавлен ` );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          х
        </span>
        <img className="modal-img" src={product.image} alt="img" />
        <div className="modal-price">
          <p className="modal-price1">{product.price} ₽</p>
          <p className="modal-previousPrice">{product.previousPrice} ₽</p>
        </div>
        <div className="reviews">
          <p>4.9</p>
          <img src="" alt="" />
          <p>14 отзывов</p>
        </div>
        <h3>Marple</h3>

        <p className="modal-desc">{product.description}</p>
        <button className="delete" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
