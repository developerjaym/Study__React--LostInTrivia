import { useContext, useState } from "react";
import { ToastContext } from "../context/Toasts";
import Question from "./Question/Question";
import "./Quiz.css";
import Results from "./Results/Results";
export default function Quiz({ quizElement, quizId }) {
  const [quiz, setQuiz] = useState(() => {
    return {
      id: quizElement.id,
      description: quizElement.description,
      name: quizElement.name,
      questions: quizElement.questions,
      currentIndex: 0,
      currentQuestion: quizElement.questions[0],
      score: 0,
      results: [],
    };
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
      {quiz.currentIndex < quiz.questions.length ? (
        <div className="quiz">
          <details>
            <summary>
              <h3>{quiz.name}</h3>
            </summary>
            <p>{quiz.description}</p>
          </details>
          <div className="score">Score: {quiz?.score}</div>

          <Question question={quiz.currentQuestion} onAnswered={onAnswered} />
        </div>
      ) : (
        <Results quiz={quiz} quizId={quizId} />
      )}
    </>
  );
}
