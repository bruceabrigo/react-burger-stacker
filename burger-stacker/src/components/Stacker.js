import React, { Component } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import { clear } from '@testing-library/user-event/dist/clear';
class Stacker extends Component {
  // define the ingredients array
      state = {
        ingredients: [
          {name: 'Kaiser Bun', color: 'saddlebrown'},
          {name: 'Sesame Bun', color: 'sandybrown'},
          {name: 'Gluten Free Bun', color: 'peru'},
          {name: 'Lettuce Wrap', color: 'olivedrab'},
          {name: 'Beef Patty', color: '#3F250B'},
          {name: 'Soy Patty', color: '#3F250B'},
          {name: 'Black Bean Patty', color: '#3F250B'},
          {name: 'Chicken Patty', color: 'burlywood'},
          {name: 'Lettuce', color: 'lawngreen'},
          {name: 'Tomato', color: 'tomato'},
          {name: 'Bacon', color: 'maroon'},
          {name: 'Onion', color: 'lightyellow'}
        ],
        burgerIngredients: []
      }

      addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        console.log(`clicked on ${ingName} and it is ${ingColor}`)

        this.setState({
          burgerIngredients: [
            {
              name: ingName,
              color: ingColor
            },
            ...this.state.burgerIngredients
          ]
        })
      }
      // this function will remove indivdual items from the burger
      removeFromStack = (e) => {
        console.log('the original stack', this.state.burgerIngredients)
        const clickIndex = e.target.id 
        console.log('the index of the item clicked', clickIndex)
        // get a copy of the current burger array 
        const currBurger = this.state.burgerIngredients.slice() //slice makes a shallow copy of array
        console.log('this current burger(copy)', currBurger)
        // splice out the ingredients we click on from that copy 
        currBurger.splice(clickIndex, 1)
        console.log('the copy after click')
        // then we'll set state with the freshly updated copy
        this.setState({
          burgerIngredients: currBurger
        })
      }

      // clear the array
      clearBurger = () => {
        this.setState({
          burgerIngredients: []
        })
      }

  // render our import
  render() {
    return (
      <div>
        <h1>Burger Stacker</h1>
        <div className='panes'>
          <IngredientList //comes from import of IngredientList.js (content is rendered on IngredientList.js)
            ingredients={this.state.ingredients} //look at ingredients
            add={this.addToStack} // calls back to addToStack func
          />
          <BurgerPane 
            ingredients={this.state.burgerIngredients}
            remove={this.remove}
            clear={this.clearBurger}
          />
        </div>
      </div>
    )
  }
}

export default Stacker