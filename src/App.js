import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Categories from './components/categories';
import Products from './components/products';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCategory: null,
    }
  }

  filterBy(category) {
    this.setState({ currentCategory: category })    
  }

  getCategories() {
    return categories.map( (category) => 
      <Categories 
        name = { category }
        filterBy = { this.filterBy.bind(this) }
        currentCategory = { this.state.currentCategory }
      />
    )
  }

  getInventory() {
    return inventory
      .filter((item) => {
        return (
          item.category === this.state.currentCategory || 
          this.state.currentCategory === null
        )
      })
      .map(({ id, name, category, description, price }) => 
        <Products  
          id = { id } 
          name = { name } 
          category = { category } 
          description = { description } 
          price = { price} 
        /> 
      )
  }

  render() {
    return (
      <div className="App">
        <h1>Cheaply</h1>

        <ul className='cat-list' >    
          { this.getCategories() }
        </ul>

        <h2>{ this.state.currentCategory || 'All Products' }</h2>

        <div className='product-container'>
          { this.getInventory() }
        </div>

      </div>
    );
  }
}

export default App;
