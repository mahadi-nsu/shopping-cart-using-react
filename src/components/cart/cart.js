import React from 'react';
import './cart.css';

export default function Cart({ cartData, removeCartItem }) {
    const total = cartData.reduce((sum, cart) => sum + cart.cost, 0);
    return (
        <div className="cart-style">
            <div>
                <h1> name of Product  - price</h1>
                {cartData.map((product, idx) =>
                    <div className="cart-item-style" key={idx}>
                        <p>
                            {product.name} - {product.cost} - <button onClick={() => removeCartItem(product)}>remove</button>
                        </p>

                    </div>
                )}
            </div>
            <hr />

            <p>
                Total to pay -  {total}
            </p>
        </div>
    )
}
