import { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "../Quiz";
import "./Test.css";

export default function Test() {
  const [quiz, setQuiz] = useState(null);
  const showQuiz = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    setQuiz(JSON.parse(formData.data));
  };
  return (
    <>
      <h1 className="test-header">TESTING <Link className="test-link" to="/">Home</Link></h1>
      <main className="test-body">
        {quiz ? (
          <Quiz quizElement={quiz} quizId="0" />
        ) : (
          <form className="test__form" onSubmit={showQuiz}>
            <textarea name="data"></textarea>
            <button>Submit</button>
          </form>
        )}
      </main>
    </>
  );
}
