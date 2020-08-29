import React from 'react';
import './App.css';

import Cart from './components/cart/cart';
import Item from './components/items/items';
function App() {
  return (
    <div className="app">
      <div className="app-items">
       <Item></Item>
       <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
