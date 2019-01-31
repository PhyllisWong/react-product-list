// Code help from Nicolai Safai
import React from 'react'
import './categories.css'
import CategoryButton from './category-btn'

const Categories = ({ name, filterBy, currentCategory }) => {
  if(currentCategory === name) {
    return (
      <li 
        key={name} 
        className='cat-list-item'
        onClick ={ () => { filterBy(name) } } 
      >
        <CategoryButton 
          className='cat-btn' 
          label={name} 
          onClick={() => this.filterBy(name) }/>
      </li>
    )
    // - Set the label and click function as props, something like: 
    // `<CategoryButton label={cat} onClick={() => clickCategory(name) } />`
  } else {
    return (
      <li key={name} 
          className='cat-list-item'
          onClick ={ () => { filterBy(name) } } 
          >
          <button className='cat-btn'>{name}</button>
      </li>
    )
  }
}

export default Categories