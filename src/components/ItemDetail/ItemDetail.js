import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import '../../styles/ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addToCart({ ...product, quantity });
    setAddedToCart(true);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <div className="item-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        {!addedToCart && <ItemCount stock={product.stock} onAdd={handleAddToCart} />}
        {addedToCart && <p>Producto agregado al carrito</p>}
      </div>
    </div>
  );
};

export default ItemDetail;