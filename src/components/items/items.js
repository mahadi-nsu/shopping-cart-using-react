import React from 'react';

import './items.css';


export default function Items({ products, addcartItem }) {

    // let addItem = (product) => {
    //     addcartItem(product);
    // }

    return (

        <div className='items-style'>
            {products.map((product, idx) =>
                <div className="individual-product" key={idx}>
                    <img src={product.image} alt={product.name} />
                    <p>
                        {product.name} - {product.cost}
                    </p>
                    <button onClick={() => addcartItem(product)} >Add to Cart</button>
                </div>
            )}
        </div>
    )
}
