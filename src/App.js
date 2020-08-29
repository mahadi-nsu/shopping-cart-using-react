import React from 'react';
import './App.css';
import Items from './data/components/item/items';
import Cart from './data/components/cart/cart';

function App() {
  return (
    <div className="app">
      <div className = "app-items">
        <Items></Items>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
