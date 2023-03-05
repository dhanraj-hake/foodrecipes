import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Recipe = () => {

    const {id} = useParams();

    const [recipe , setRecipe] = useState(null);


    useEffect(()=>{
        const fetchRecipe = async()=>{
            const response = await fetch(`https://foodrecipesapi.pythonanywhere.com/recipe/${id}`);

            const result = await response.json();
            setRecipe(result);
        }

        fetchRecipe();
    }, [])

  return (
    <div className="container recipe-page">

        { recipe &&
        <>
         <h1 className="py-2">
            {recipe.recipe_name}
        </h1>

        <img  src={`https://foodrecipesapi.pythonanywhere.com${recipe.recipe_image}` }/>

        <div className="steps-box py-4">
            <p>
                {recipe.recipe_steps}
            </p>
        </div>
        </>}

    </div>
  )
}

export default Recipe
