import React, { useState } from "react";
import "./header.css";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

const Header = ({ items, onRemoveFromCart }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleRemoveFromCart = (index) => {
    onRemoveFromCart(index);
  };

  return (
    <div className="header">
     
      
      <div className="bask">
        
        <LuShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`basket ${cartOpen ? "active" : ""}`}
        />
        <p>Корзина</p>
      </div>
      <div className="favorite">
      <MdFavoriteBorder />
      </div>
      {cartOpen && (
        <div className="shop-cart">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <img className="img" src={item.image} alt={item.name} />
                <div className="bask-p">
                  <div className="price">
                    <p className="price1">{item.price} ₽</p>
                    <p className="previousPrice">{item.previousPrice} ₽</p>
                  </div>
                  <p className="bask-desc">{item.description}</p>
                  
                  <AiOutlineDelete  className=""
                    onClick={() => handleRemoveFromCart(index)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
