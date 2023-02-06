import React, { Component } from 'react';
import Ingredient from './Ingredient'
// loops over ingredients derived fro props, produces a clickable ingredient for each of them
class IngredientList extends Component {

  render() {
    let allIngredients = this.props.ingredients.map((ing, i) => (
      // this is going to produce a list item for me
      <li key={i}>
        <Ingredient
          ingredient={ing}
          itemKey={i}
          clickFunc={this.props.add}
          />
        </li>
    ))
    return (
      <section className='pane'>
        <h3>IngredientList</h3>
        <ul>
          {allIngredients}
        </ul>
      </section>
    )
  }
}

export default IngredientList