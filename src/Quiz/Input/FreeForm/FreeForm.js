import "./FreeForm.css";
import "../Input.css";
import { useRef } from "react";

export default function FreeForm({ question, onAnswered }) {
  const inputElement = useRef(null);
  const onSubmitWrapper = (e) => {
    e.preventDefault();
    const answer = Object.fromEntries(new FormData(e.target))
      .answer.trim()
      .toUpperCase();

    onAnswered({
      userAnswer: answer,
      result:
        question.acceptableAnswers
          .map((acceptableAnswer) => acceptableAnswer.toUpperCase())
          .includes(answer) || question.displayAnswer.toUpperCase() === answer,
    });
    e.target.reset();
    inputElement.current.focus();
  };

  return (
    <form className="input-form" onSubmit={onSubmitWrapper}>
      <input autoFocus name="answer" ref={inputElement} />
      <button className="button" type="submit">Submit</button>
    </form>
  );
}
