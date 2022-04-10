import React from 'react'
import dietSvg from "../../assets/diet.svg"
import { DetailContainer, DetailPart, IngredContainer, OtherPart, ImgContainer, HeaderContainer,Nutrients} from './style'
import { useLocation } from "react-router-dom"

const Details = () => {

  const location = useLocation();
  const recipe = location.state.recipe1;
  console.log(recipe);
  return (
    <div>
    <DetailContainer>
     <HeaderContainer>
       <h1>{recipe.label}</h1>
       <img src={dietSvg} alt="" />
     </HeaderContainer>
     <DetailPart>
     <OtherPart>
     <Nutrients>Nutrients</Nutrients>
     <p>
            {recipe.totalNutrients.CA.label} :
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
     </OtherPart>
     <ImgContainer>
       <img src={recipe.img} alt={recipe.label} />
     </ImgContainer>

     <IngredContainer>
       {recipe.ingredientLines.map((malzeme, index)=> (
         <div key={index}>
         <p>
           {index + 1}* {malzeme}
         </p>
         </div>
       ))}
     </IngredContainer>
     </DetailPart>
    </DetailContainer>
    </div>
  )
}

export default Details