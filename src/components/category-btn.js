import React from 'react'
import './category-btn.css'

const CategoryButton = ({ label }) => {
  return (
    <button className='active-btn'>{label}</button>
  )
}


export default CategoryButton