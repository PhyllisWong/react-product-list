import React from 'react'
import './products.css'
import Product from './product'

const Products = ({ item }) => {
  
    return(
      
        <Product 
          item = {item}
        />
 
    ) 
}

export default Products