import React from "react";
import Questionblock from "./Questionblock";

function Questionsblock({ quizItem, setAnserItem, chosenAnserItem, UnanserdQuestionids, setUnanserdQuestionids }) {
  // console.log(quizItem);
  return <>

    <h2 id={quizItem.id} className="questiontitle">{quizItem.text}</h2>
    <div className="questions-container">
      {quizItem.questions.map((question, _index) => (
        <Questionblock chosenAnserItem={chosenAnserItem}
          setUnanserdQuestionids={setUnanserdQuestionids}

          UnanserdQuestionids={UnanserdQuestionids}
          key={_index}
          quezitemId={quizItem.id}
          question={question}
          setAnserItem={setAnserItem} />
      ))}

    </div>
  </>;
}
export default Questionsblock;