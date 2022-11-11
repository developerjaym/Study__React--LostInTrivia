import "./Price.css";

export default function Price({ question, onAnswered }) {
  const onSubmitWrapper = (e) => {
    e.preventDefault();
    const answer = Number(Object.fromEntries(new FormData(e.target)).answer);
    const range = question.acceptableAnswers.map((answer) => Number(answer));
    const result = answer >= range[0] && answer <= range[1];
    let message = "";
    if(result) {
      message = `👍 Your answer is close enough to ${question.displayAnswer}!`;
    }
    else {
      message = `👎 It was actually ${question.displayAnswer}.`;
    }
    onAnswered({
      userAnswer: answer,
      result,
      message
    });
    e.target.reset();
  };

  return (
    <form className="input-form" onSubmit={onSubmitWrapper}>
      <div className="price-wrapper">
        $<input step="any" type="number" name="answer" />
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
