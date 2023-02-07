import React, { Component } from 'react';
import { useState } from 'react';
import IngredientList from './components/IngredientList';
import BurgerPane from './components/BurgerPane';
import Stacker from './components/Stacker';
import './App.css';

// class App extends Component {
//   // create a prop state
//   handleClick = (e) => {
//     e.preventDefault()
//     console.log('Clicked')
//   }

//   render() {
//     return (
//       <div className="layout">
//         <Stacker />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div className='layout'>
    <Stacker />
    </div>
  )
}

export default App;
