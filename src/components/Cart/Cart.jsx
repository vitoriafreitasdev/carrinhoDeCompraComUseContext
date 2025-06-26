import React, { useContext } from 'react'
import './Cart.css'
import Cartitem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utis/formatCurrency';

function Cart(){
  const {cartItems, isCartVisible} = useContext(AppContext)
  // pode ser assim
  // let totalPrice = 0
  // cartItems.forEach((item) => {
  //   totalPrice = item.price + totalPrice
  // })
  // ou assim:
  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return(
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => <Cartitem key={cartItem.id} data={cartItem}/>)}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice, 'USD')}</div>
    </section>
  )
}

export default Cart;

