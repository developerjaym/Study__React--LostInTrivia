import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContext } from "../context/Toasts";
import Header from "../Header/Header";
import Question from "./Question/Question";
import "./Quiz.css";
import Results from "./Results/Results";

export default function Quiz() {
  const { data } = useLoaderData();
  const { id } = useParams();

  const [quiz, setQuiz] = useState(() => {
    const q = data.find((each) => each.id === id);
    return {
      id: q.id,
      description: q.description,
      name: q.name,
      questions: q.questions,
      currentIndex: 0,
      currentQuestion: q.questions[0],
      score: 0,
      results: [],
    }
  });
  const { setToastMessage } = useContext(ToastContext);


  const onAnswered = (response) => {
    const result = response.result;
    let newScore;
    if (result) {
      setToastMessage({ message: response.message ?? "👍 +1", mood: "happy" });
      newScore = quiz.score + 1;
    } else {
      setToastMessage({
        message:
          response.message ??
          `👎 No. It was ${quiz.questions[quiz.currentIndex].displayAnswer}.`,
        mood: "sad",
      });
      newScore = quiz.score;
    }
    setQuiz({
      ...quiz,
      score: newScore,
      currentIndex: quiz.currentIndex + 1,
      currentQuestion: quiz.questions[quiz.currentIndex + 1],
      results: [...quiz.results, response.result],
    });
  };

  return (
    <>
      <Header>
        <Link to="/" className="button button--icon dark-fg">
          ←
        </Link>
      </Header>
      <main>
        {quiz.currentIndex < quiz.questions.length ? (
          <div className="quiz slide-in">
            <details>
              <summary>
                <h3>{quiz.name}</h3>
              </summary>
              <p>{quiz.description}</p>
            </details>
            <div className="score">Score: {quiz?.score}</div>
            
              <Question
                question={quiz.currentQuestion}
                onAnswered={onAnswered}
              />
          </div>
        ) :  (
          <Results quiz={quiz} quizId={id} />
        )}
      </main>
    </>
  );
}
