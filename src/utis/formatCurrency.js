const formatCurrency = (value, currency) => {
  return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: currency // para real seria BRL, dolar USD
  })
}

export default formatCurrency;