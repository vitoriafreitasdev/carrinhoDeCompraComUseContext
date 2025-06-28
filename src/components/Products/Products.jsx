import React, { useEffect, useContext} from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

function Products() {
  const { products, setProducts, loading, setLoanding} = useContext(AppContext)
  

  useEffect(() => {
    fetchProducts('Iphone').then((response) => {
      setProducts(response)
      setLoanding(false)
    })
  }, []) // array vazio so vai chamar a função uma vez, quando o componente for montado

  return(
    // pode ser assim ou do outro jeito
    //  (loading ? <Loading/> :  <section className="products container"> 
    //    {
    //      products.map((product) => <ProductCard key={product.id} data={product}/>)
    //    }
    //  </section>)
     (loading && <Loading/>) || (<section className="products container"> 
      {
        products.map((product) => <ProductCard key={product.id} data={product}/>)
      }
    </section>)
    )
    
  
}

export default Products;