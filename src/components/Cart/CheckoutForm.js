import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { CartContext } from '../../context/CartContext';
import '../../styles/Checkout.css';

const CheckoutForm = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async (e) => {
    e.preventDefault();

    const order = {
      items: cart,
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, 'orders'), order);
    setOrderId(docRef.id);
    clearCart();
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <button type="submit" className="submit-button">Completar compra</button>
      </form>
      {orderId && <p>Order ID: {orderId}</p>}
    </div>
  );
};

export default CheckoutForm;