import React, { Component } from 'react'
import RecipeCard from './RecipeCard';

export class Recipes extends Component {

    constructor(props){
        super(props);

        this.state = {
            recipes: []
        }
    }

    componentDidMount(){

        this.props.getAllRecipes();
        
    }

    

  render() {
    return (
      <div className='container recipes-list'>
        
        <div className='grid'>
            {this.props.recipes.map((recipe, index)=>{
                return <h1 key={index}><RecipeCard id={recipe.id} name={recipe.recipe_name} image={recipe.recipe_image} recipe={recipe.recipe_steps} /></h1>
            })}

        </div>

      </div>
    )
  }
}

export default Recipes
