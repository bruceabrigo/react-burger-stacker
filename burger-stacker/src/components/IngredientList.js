import Ingredient from './Ingredient'
const IngredientList = (props) => { // passes in props from parent in Stacker
  console.log(props)
  let allIngredients = props.ingredients.map((ing, i) => { // maps/loops over each ingredient from parent
    return ( //returns key ingredients as an <li> with an item key
      <li key={i}>
        <Ingredient
          ingredient={ing}
          itemKey={i}
          clickFunc={props.add} //calls to its click event handler
          />
        </li>
    )
  })
  return (
    <section className='pane'>
    <h3>IngredientList</h3>
    {/* returns our allIngredients variable define above to webpage */}
      {allIngredients} 
  </section>
  )
}

export default IngredientList