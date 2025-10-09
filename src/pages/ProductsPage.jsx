import React from 'react'
import Products from '../components/products/Products'
import Header from '../components/layout/Header'

const ProductsPage = () => {
  return (
    <div className='products-page'>
        <Header />
        <h1>Products Page</h1>

        <Products />
    </div>
  )
}

export default ProductsPage