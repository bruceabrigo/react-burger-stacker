import React, { Component } from 'react';
class Ingredient extends Component {

  render() {
    const {name, color} = this.props.ingredient
    return (
      <p 
      style={{backgroundColor: color}}
      id={this.props.itemKey}
      onClick={this.props.clickFunc}
      >
        {name}
      </p>
    )
  }

}

export default Ingredient