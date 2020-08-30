import React from 'react';
import './cart.css';

export default function Cart({ cartData }) {
    const total = cartData.reduce((sum, cart) => sum + cart.cost, 0);
    return (
        <div className="cart-style">
            <div>
                <h1> name of Product  - price</h1>
                {cartData.map((product, idx) =>
                    <div className="cart-item-style" key={idx}>
                        <p>
                            {product.name} - {product.cost}
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
