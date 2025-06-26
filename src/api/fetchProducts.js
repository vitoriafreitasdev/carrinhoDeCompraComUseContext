const fetchProducts = async (query) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
  const data = await response.json()

  return data.products;
}

export default fetchProducts;

//https://dummyjson.com/products