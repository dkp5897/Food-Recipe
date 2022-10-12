import axios from "axios";
import React, {  useEffect, useState } from "react";
import "./Cards.css"

const RecipeCards=() => {

    const [getRecipes, setReipes] = useState([]);

    const Id = `5a25e98c`;
    const Key = "4bde6ba46c6550064a2f06008db2b33e";
    const url = `https://api.edamam.com/search?q=mango&app_id=${Id}&app_key=${Key}`;

   
  
    async function getData() {
      let recipeData = await axios.get(url);
      console.log(recipeData.data.hits);
      setReipes(recipeData.data.hits);
    }


    useEffect(()=>{
        getData()
    },[])

  return (
    <div className="recipeconatiner">
      {getRecipes.map((res,index)=>{
        return(
            <div className="cardsss" key={index}>
        <div className="cardss">
         <img src={res.recipe.image} alt='recipe'/>
          <div className="cardss__info">
            <span className="cardss__category">{res.recipe.label}</span>
          </div>
        </div>
      </div>
        )
      })}
    </div>
  );
}

export default RecipeCards;
