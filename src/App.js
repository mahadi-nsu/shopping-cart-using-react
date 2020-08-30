import React, { useState } from 'react';
import './App.css';

import Cart from './components/cart/cart';
import Item from './components/items/items';

import datas from './data/data';

function App() {

  const [products] = useState(datas);
  const [cartdata, setcartdata] = useState([]);

  const addcartItem = (product) => {
    setcartdata([...cartdata, product])
  }
  const removeCartItem = (productToRemove) => {
    const cartafaterdelete = cartdata.filter(product => product !== productToRemove);
    setcartdata(cartafaterdelete);
  }
  // console.log(cartdata);
  return (
    <div className="app">
      <div className="app-items">
        <Item products={products} addcartItem={addcartItem}></Item>
        <Cart cartData={cartdata} removeCartItem={removeCartItem}></Cart>
      </div>
    </div>
  );
}

export default App;
