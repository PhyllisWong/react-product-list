import React from 'react'
import './products.css'
import Product from './product'

const Products = ({ id, name, price, category, description }) => {
  
    return(
      <div key={id} className='product-item'>
        <Product 
          id={id} 
          name={name} 
          price={price} 
          category={category} 
          description={description} 
        />
      </div>
    ) 
}

export default Products