import React from 'react'

const Product = ({ id, name, price, category, description }) => {
  return (
    <div key={id} className='product-item'>
    <h1 className='title'>{name}</h1>
    <p className='cat-cat'>{category}</p>
    <p className='cat-desc'>{description}</p>
    <p>{price}</p>
  </div>
  )
}

export default Product