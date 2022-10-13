// import axios from "axios";
import React from "react";
import "./Cards.css";

const RecipeCards = () => {
  // const [getRecipes, setReipes] = useState([]);

  // const Id = `5a25e98c`;
  // const Key = "4bde6ba46c6550064a2f06008db2b33e";
  // const url = `https://api.edamam.com/search?q=mango&app_id=${Id}&app_key=${Key}`;

  // async function getData() {
  //   let recipeData = await axios.get(url);
  //   console.log(recipeData.data.hits);
  //   setReipes(recipeData.data.hits);
  // }

  // useEffect(()=>{
  //     getData()
  // },[])

  return (
     
    <div className="recipeconatiner">
      <div className="cardsss">
        <div className="cardss">
          <img src="../Images/1.jpg" alt="recipe" />
          <div className="cardss__info">
            <span className="cardss__category">Lemon Recipe</span>
          </div>
        </div>
      </div>
      <div className="cardsss">
        <div className="cardss">
          <img src="../Images/2.jpg" alt="recipe" />
          <div className="cardss__info">
            <span className="cardss__category">Fruits Recipe</span>
          </div>
        </div>
      </div>
      <div className="cardsss">
        <div className="cardss">
          <img src="../Images/3.jpg" alt="recipe" />
          <div className="cardss__info">
            <span className="cardss__category">Rice Recipe</span>
          </div>
        </div>
      </div>
      <div className="cardsss">
        <div className="cardss">
          <img src="../Images/f2.jpg" alt="recipe" />
          <div className="cardss__info">
            <span className="cardss__category">Chilli Recipe - 1</span>
          </div>
        </div>
      </div>
      <div className="cardsss">
        <div className="cardss">
          <img src="../Images/front.jpg" alt="recipe" />
          <div className="cardss__info">
            <span className="cardss__category">Chilli Recipe - 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
