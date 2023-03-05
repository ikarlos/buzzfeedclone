

import { useEffect, useState } from "react";
import Title from "./components/title";
import QuestionsBlock from "./components/QuestionsBlock";
import AnswerBlock from "./components/Anserblock";
import React from "react";
export default function App() {
  const [quiz, setQuiz] = useState(false)
  const [chosenAnserItem, setAnserItem] = useState([])
  const [UnanserdQuestionids, setUnanserdQuestionids] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quiz")
      const json = await response.json()
      setQuiz(json)
      // console.log(json);

    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    fetchData()

  }, [])
  useEffect(() => {
    const UnanserdQuestionids = quiz.content?.map(({ id }) => id)
    setUnanserdQuestionids(UnanserdQuestionids)

  }, [quiz])
  useEffect(() => {
    if (UnanserdQuestionids) {
      if (chosenAnserItem.length >= 1 && UnanserdQuestionids.length <= 0) {
        // scroll to ansers
        setShowAnswer(true)
        const answerblock = document.getElementById('answer-block')
        answerblock?.scrollIntoView({ behavior: "smooth" })
      }
      const hieghestId = Math.min(...UnanserdQuestionids)
      const heighestElement = document.getElementById(hieghestId)
      heighestElement?.scrollIntoView({ behavior: "smooth" })
    }


  }, [UnanserdQuestionids, chosenAnserItem, showAnswer])
  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz && quiz?.content.map(contentItem => (
        // console.log(contentItem);
        <QuestionsBlock
          chosenAnserItem={chosenAnserItem}
          quizItem={contentItem}
          setAnserItem={setAnserItem}
          UnanserdQuestionids={UnanserdQuestionids}
          setUnanserdQuestionids={setUnanserdQuestionids}
          key={contentItem.id} />
      ))}
      {showAnswer && (
        <AnswerBlock
          ansewerOptions={quiz?.answers}
          chosenAnswers={chosenAnserItem}
        />
      )}
    </div>
  );
}
