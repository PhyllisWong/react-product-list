import React from 'react'
import './categories.css'
// Code help from Nicolai Safai

const Categories = ({ name, filterBy, currentCategory }) => {
  if(currentCategory === name) {
    return (
      <li 
        key={name} 
        className='cat-list-item'
        onClick ={ () => { filterBy(name) } } 
      >
        <button className='cat-btn'>{name}</button>
      </li>
    )
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