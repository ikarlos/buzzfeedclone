import { useEffect } from "react";
import { useState } from "react";

export default function Answer({ ansewerOptions, chosenAnswers }) {
  const [result, setresult] = useState(null)
  useEffect(() => {
    ansewerOptions.forEach(answer => {
      if (chosenAnswers.includes(answer.combination[0])
        && chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2])

      ) {
        setresult(answer)

      } else if (!result) {
        setresult(ansewerOptions[0])
      }

    });

  }, [result])
  console.log(result);


  return <div id="answer-block" className="answer-block">
    <h2>
      {result?.text}
    </h2>
    <img src={result?.image} alt={result?.text} />



  </div>;
}
