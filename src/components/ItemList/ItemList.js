import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import '../../styles/ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <Link key={product.id} to={`/item/${product.id}`}>
          <Item product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;