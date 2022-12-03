// import axios from "axios";
import React from "react";
import "./Cards.css";

const RecipeCards = () => {

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
            <span className="cardss__category">Chilli Recipe - 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
