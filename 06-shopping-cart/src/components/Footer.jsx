import './Footer.css'
import { useCart } from '../hooks/useCart'

export function Footer () {
    const { cart } = useCart()
    
    return (
        <footer className="footer">
            Made by: Jose Juan Morales Oliver
        </footer>
    )
}