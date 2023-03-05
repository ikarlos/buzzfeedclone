export default function Questionblock({ question, quezitemId,
  setAnserItem,
  chosenAnserItem,
  UnanserdQuestionids,
  setUnanserdQuestionids
}) {
  function handelClick(params) {
    setAnserItem((previousState) => [...previousState, question.text])
    setUnanserdQuestionids(UnanserdQuestionids.filter((id) => id != quezitemId))

  }
  const validpick = !chosenAnserItem?.includes(question.text) && !UnanserdQuestionids?.includes(quezitemId)
  return (
    <button className="question-block" onClick={handelClick}
      disabled={validpick}

    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit}</a>
        <a href="unsplash.com/">Unsplash</a>
      </p>

    </button>
  );
}
