import React from 'react';

const Ingredient = (props) => {
  console.log('ingredient.js', props.ingredient.name)
    return (
      <p 
      style={{backgroundColor: props.ingredient.color}}
      id={props.itemKey}
      onClick={props.clickFunc}
      >
        {props.ingredient.name}
      </p>
    )
}

export default Ingredient