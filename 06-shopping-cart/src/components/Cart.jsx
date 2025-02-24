import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";

function CartItem ({image, price, title, quantity, addToCart}) {
    return (
        <li>
            <img src = {image}
            alt = {title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

function TotalPrice ({cart}) {
    let total_price = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0).toFixed(2)

    return (
        <div className="total-price">
            <strong>TOTAL: ${total_price}</strong>
        </div>   
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart} = useCart()

    return(
        <>
           <label className='cart-button' htmlFor={cartCheckboxId}>
              <CartIcon />
           </label>
           <input id={cartCheckboxId} type='checkbox' hidden />
           
           <aside className="cart">
            <ul>
                {cart.map(product => (
                    <CartItem key={product.id}
                      addToCart={() => {
                        addToCart(product)
                      }}
                      {...product} />
                ))}
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>

            <TotalPrice cart={cart}/>

           </aside>
        </>
    )
}