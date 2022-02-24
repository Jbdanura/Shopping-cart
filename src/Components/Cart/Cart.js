import React from "react";

const Cart = ({products}) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i].price
    }
    return(
        <div className="cart">
            {products.map(product => {
                return (
                    <div className="cart-product" key={product.id}>
                        <img src={product.img} alt="component"></img>
                        <p className="cart-product-name">{product.brand} {product.name}</p>
                        <p className="cart-product-price">{product.price}</p>
                        <div className="cart-modify">
                            <button className="cart-product-add">+</button>
                            <p>{product.quantity}</p>
                            <button className="cart-product-remove">-</button>
                        </div>
                    </div>
                )
            })}
            <p className="cart-total">${total}</p>
        </div>
    )
}
export default Cart