import { useState } from 'react'

import { products as initialProducts} from './mocks/products.json'

import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Cart } from './components/Cart.jsx'

import { CartProvider } from './context/cart.jsx'

function App() {
  const [products] = useState(initialProducts)

  return (
    <CartProvider>
    <Header />
    <Cart />
    <Products products={products}/>
    <Footer />
    </CartProvider>    
  )
}

export default App
