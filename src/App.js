import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Recipes from './component/Recipes';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Recipe from './component/Recipe';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }
  
  searchRecipes = (search) => {
    fetch(`https://foodrecipesapi.pythonanywhere.com/search/?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ ...this.state, recipes: data });
      });
  }

  getAllRecipes =()=> {
    fetch("https://foodrecipesapi.pythonanywhere.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ ...this.state, recipes: data });
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar searchRecipes={this.searchRecipes} getAllRecipes={this.getAllRecipes} />
          <Routes>
            <Route path='/' element={<Recipes recipes={this.state.recipes} getAllRecipes={this.getAllRecipes}  />} />
            <Route path='/:id' element={<Recipe />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
