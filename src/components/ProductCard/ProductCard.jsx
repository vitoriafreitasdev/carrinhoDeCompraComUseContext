import React, { useContext } from 'react'
import './ProductCard.css'
import { BsFillCartPlusFill } from "react-icons/bs";
import formatCurrency from '../../utis/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({data}) {
  const {title, thumbnail, price} = data
  const {cartItems, setCartItems} = useContext(AppContext)
  const handleAddCart = () => {
    // pode fazer assim ou do outro jeito a seguir
    // const updateCartItems = cartItems
    // updateCartItems.push(data)
    // setCartItems(updateCartItems)
    setCartItems([...cartItems, data])
  }
  return (
    <section className="product-card">
      {/* caso se fosse substituir alguma letra de thumbnail, seria assim:  thumbnail.replace(/\w\.jpg/gi, 'W.jpg')*/}
      <img src={thumbnail} alt="product" className="card__image"/>
      <div className="card__info">
        <h2 className="card__price">
          {formatCurrency(price, 'USD')}
        </h2>
        <h2 className="card__title">
          {title}
        </h2>
      </div>
      <button type="button" className="button__add-card" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard;

