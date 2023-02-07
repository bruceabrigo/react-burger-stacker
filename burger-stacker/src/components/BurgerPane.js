import Ingredient from './Ingredient';
const BurgerPane = (props) => {
    // define the ingredients array
    console.log(props)
    let burgerBits = props.ingredients.map((ing, i) => { // maps/loops over each ingredient from parent
      return ( //returns key ingredients as an <li> with an item key
        <li key={i}>
          <Ingredient
            ingredient={ing}
            itemKey={i}
            // clickFunc={props.add} //calls to its click event handler
            />
          </li>
      )
    })
      return (
        <section className='pane'>
          <h3>Burger Pane</h3>
              {burgerBits}
            <button onClick={props.clear}>Clear Bunger</button>
        </section>
      )
}
export default BurgerPane