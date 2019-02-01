import React from 'react'
import './products.css'

// const Product = ({ item }) => {
class Product extends React.Component {

  render () {
    return (
      <div key={this.props.item.id} className='product-item'>
        <div key={this.props.item.id} className='product-item'>
          <h1 className='title'>{this.props.item.name}</h1>
          <p className='cat-cat'>{this.props.item.category}</p>
          <p className='cat-desc'>{this.props.item.description}</p>
          <p>{this.props.item.price}</p>
       </div>
      </div>
    )
  }
}

export default Product