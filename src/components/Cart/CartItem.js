import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default CartItem;