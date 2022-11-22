import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContext } from "../context/Toasts";
import Header from "../Header/Header";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import Question from "./Question/Question";
import "./Quiz.css";
import Results from "./Results/Results";

export default function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setToastMessage } = useContext(ToastContext);

  const { id } = useParams();
  useEffect(() => {
    fetch("https://localstorage.tools/trivia/test.json")
      .then((res) => res.json())
      .then((json) => {
        const q = json.find((each) => each.id === id);
        setQuiz({
          id: q.id,
          description: q.description,
          name: q.name,
          questions: q.questions,
          currentIndex: 0,
          currentQuestion: q.questions[0],
          score: 0,
          results: []
        });
        setLoading(false);
      });
  }, [id]);

  const onAnswered = (response) => {
    const result = response.result;
    let newScore;
    if (result) {
      setToastMessage({message: response.message ?? "👍 +1", mood: "happy"});
      newScore = quiz.score + 1;
    } else {
      setToastMessage(
        {message: response.message ?? `👎 No. It was ${quiz.questions[quiz.currentIndex].displayAnswer}.`, mood: "sad"}
      );
      newScore = quiz.score;
    }
    setQuiz({
      ...quiz,
      score: newScore,
      currentIndex: quiz.currentIndex + 1,
      currentQuestion: quiz.questions[quiz.currentIndex + 1],
      results: [...quiz.results, response.result]
    });
  };

  return (
    <>
      <Header>
        <Link to="/" className="button button--icon dark-fg">←</Link>
      </Header>
      <main>
        {!loading && quiz.currentIndex < quiz.questions.length ? (
          <div className="quiz">
            <details>
              <summary>
                <h3>{quiz.name}</h3>
              </summary>
              <p>{quiz.description}</p>
            </details>
            <div className="score">Score: {quiz?.score}</div>
            {loading ? (
              <LoadingIcon />
            ) : (
              <Question
                question={quiz.currentQuestion}
                onAnswered={onAnswered}
              />
            )}
          </div>
        ) : !loading ? (
          <Results quiz={quiz} quizId={id} />
        ) : (
          <LoadingIcon />
        )}
      </main>
    </>
  );
}
