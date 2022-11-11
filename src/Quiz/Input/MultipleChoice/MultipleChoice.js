import "./MultipleChoice.css";

export default function MultipleChoice({ question, onAnswered }) {
    const onSubmitWrapper = (e) => {
      e.preventDefault();
      const answer = Object.fromEntries(new FormData(e.target))
        .answer.toUpperCase();
        
      onAnswered({
        userAnswer: answer,
        result:
          question.acceptableAnswers
            .map((acceptableAnswer) => acceptableAnswer.toUpperCase())
            .includes(answer) || question.displayAnswer.toUpperCase() === answer,
      });
      e.target.reset();
    };

    const options = question.options.map(option => (<label key={option}>{option} <input type="radio" name="answer" value={option}/></label>))
  
    return (
      <form className="input-form input-form--multiple-choice" onSubmit={onSubmitWrapper}>
        {options}
        <button className="button" type="submit">Submit</button>
      </form>
    );
  }