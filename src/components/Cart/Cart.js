import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import '../../styles/Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item}/>
      ))}
      <CheckoutForm />
    </div>
  );
};

export default Cart;