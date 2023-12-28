import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './new.css'
//import './KupitStyle.scss'; 


const New = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/newProducts')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return (
        
     <div className="new">
      <h2 className='title'>Новинки</h2>
      <div className='new-list'>
        {data.map(item => (
          <div className='new-product' key={item.id}> 
          <img src={item.image} alt={item.name} />
          <div className="new-price">
          <p >{item.price} ₽</p>
          </div>
          <p className='desc' >{item.description}</p>
          </div>
        ))}
      </div>
      <div className="all-products">
        <h2>Все товары</h2>
      </div>
    </div>
    
    );
}

export default New;
