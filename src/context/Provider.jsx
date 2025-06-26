import React, { useState } from 'react'
import AppContext from './AppContext'

function Provider({children}) {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoanding] = useState(true)
  const [isCartVisible, setIsCartVisible] = useState(false)

  const value = {
    products,
    setProducts,
    loading, 
    setLoanding,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible
  }

  return(
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default Provider;