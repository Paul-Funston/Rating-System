import Star from "./Star";
import { useState } from "react";

const scoreResponse = {
  0: "Click on your Rating",
  1: "Poor",
  2: "Dissappointing",
  3: "Average",
  4: "Very Good",
  5: "Excellent"
}

function StarRating({
  numStars = 5,
}) {

  const [starArray, setStarArray] = useState(Array(numStars).fill(false))
  const [response, setResponse] = useState(scoreResponse[0]);

  const handleClickStar = (n) => {
    let newArray = Array(numStars).fill(false);
    newArray.fill(true, 0, Math.min(n, numStars))
    setStarArray(newArray);
    if(scoreResponse[n]) {
      setResponse(scoreResponse[n])
    } else {
      setResponse("");
    }
  }
  
  return(
    <div className="container text-center p-4">
      <div className="row justify-content-center">
        {starArray.map((star, index) => {
          return (
            <Star 
              key={index}
              isFilled={star} 
              onClick={handleClickStar} 
              number={index + 1}
            />
          )
        })}
      </div>
      <div className="row my-2">
        <h2>{response}</h2>
      </div>
      
    </div>
  )
}

export default StarRating;