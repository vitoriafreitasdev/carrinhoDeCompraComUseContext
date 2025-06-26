import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './CartButton.css'
import AppContext from '../../context/AppContext';
function CartButton () {
  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext)
  return (
    // se aperta isCartVisible vira o acontrario do estado que tava, se tava vdd, vira falso, se tava falso vira vdd
    <button type="button" className="cart__buton" onClick={() => setIsCartVisible(!isCartVisible)}>

        <AiOutlineShoppingCart />
        {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;