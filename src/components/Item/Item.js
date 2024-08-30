import React from 'react';
import '../../styles/ItemList.css';

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Ver detalles</button>
    </div>
  );
};

export default Item;