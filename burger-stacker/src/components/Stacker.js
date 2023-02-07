import React, { useState } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

const Stacker = () => {
  // define the ingredients array
      const ingredients =  [
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
      ]
       const [burgerIngredients, setBurgerIngredients] = useState([])

      const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        console.log(`clicked on ${ingName} and it is ${ingColor}`)


        setBurgerIngredients([
            {
              name: ingName,
              color: ingColor
            },
            ...burgerIngredients //this is called SPREAD syntax
          ]
        )
      }
      // this function will remove indivdual items from the burger
      const remove = (e) => {
        // console.log('the original stack', this.state.burgerIngredients)
        const clickIndex = e.target.id 
        console.log('the index of the item clicked', clickIndex)
        // get a copy of the current burger array 
        const currBurger = burgerIngredients.slice() //slice makes a shallow copy of array
        console.log('this current burger(copy)', currBurger)
        // splice out the ingredients we click on from that copy 
        currBurger.splice(clickIndex, 1)
        console.log('the copy after click')
        // then we'll set state with the freshly updated copy
        setBurgerIngredients(currBurger)
      }

      // clear the array
      const clearBurger = () => {
        setBurgerIngredients([])
      }

  // render our import
    return (
      <div>
        <h1>Burger Stacker</h1>
        <div className='panes'>
          <IngredientList //comes from import of IngredientList.js (content is rendered on IngredientList.js)
            ingredients={ingredients} //look at ingredients
            add={addToStack} // calls back to addToStack func
          />
          <BurgerPane 
            ingredients={burgerIngredients}
            remove={remove}
            clear={clearBurger}
          />
        </div>
      </div>
    )
}

export default Stacker