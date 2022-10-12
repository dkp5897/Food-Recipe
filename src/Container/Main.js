
import React from "react";
import axios from "axios";
import {useState} from 'react'
import RecipeCards from "./RecipeCards";
import './Main.css'
import Loading from "./Loading";


function Main() {
    const [getText, setText] = useState("");
    const [getRecipes, setReipes] = useState([]);
    const [loading,setLoading] = useState(false)
  
    const Id = `5a25e98c`;
    const Key = "4bde6ba46c6550064a2f06008db2b33e";
    const url = `https://api.edamam.com/search?q=${getText}&app_id=${Id}&app_key=${Key}`;
  
    async function getData() {
      let recipeData = await axios.get(url);
      console.log(recipeData.data);
      setReipes(recipeData.data.hits);
    }
  
    const sumbit = (event) => {
      event.preventDefault();
      setLoading(true)

      setTimeout(()=>{
        setLoading(false)
        getData();
      },2000)
    };
  
    return (
      <div className="App">
          <div className="searchbar">
            <input
              type="text"
              className="userInput"
              placeholder="Food Name..."
              value={getText}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="submit_app" onClick={sumbit}>
              Search
            </button>
          </div>
          {loading ? <Loading/> :
          <div className="recipe-conatiner">
            {getRecipes.map((recipe, index) => {
              return <RecipeCards item={recipe} index={index} />;
            })}
          </div>
          }
      </div>
    );
}

export default Main
