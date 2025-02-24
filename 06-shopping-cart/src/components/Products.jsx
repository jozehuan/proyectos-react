import './Products.css'

import { AddToCartIcon, RemoveFromCartIcon } from  './Icons.jsx'
import { useCart } from '../hooks/useCart.jsx'
import { useFilters } from '../hooks/useFilters.jsx'

export function Products ({products}) {
    const { addToCart, removeFromCart, cart } = useCart()

    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(products)

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {filteredProducts.slice(0,30).map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                    <li key={product.id}>
                      <img src={product.image}
                      alt={product.title}
                      />
                      <div>
                        <strong>{product.title}</strong>
                        <h6>[{product.category}]</h6>
                        <h4>${product.price}</h4>
                      </div>
                      <div>
                        <button style={{backgroundColor : isProductInCart ? 'red' : '#09f'}} 
                         onClick={() => { 
                            isProductInCart 
                            ? removeFromCart(product) 
                            : addToCart(product)}}>
                            {
                                isProductInCart 
                                ? <RemoveFromCartIcon />
                                : <AddToCartIcon/>
                            }
                        </button>
                      </div>
                    </li>
                )})}
            </ul>
        </main>
    )
}
