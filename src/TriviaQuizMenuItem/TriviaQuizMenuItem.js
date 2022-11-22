import { NavLink } from "react-router-dom";
import { getResult } from "../some_tools/ResultsRepository";
import "./TriviaQuizMenuItem.css";

export default function TriviaQuizMenuItem({ quiz }) {
    const completed = getResult(quiz.id);
    let difficultyKey = {
        "1": "Easy",
        "2": "Easy",
        "3": "Challenging",
        "4": "Hard",
        "5": "Very Hard"
    }
    const status = Boolean(completed) ? (<span title="You have already completed this quiz." className="subtitle status">✓</span>) : null;
  return (
    <div className="menu-item">
        <header className="menu-item__title">
            <span>Quiz</span>
            <h2>{quiz.name}</h2>
        </header>
        <div className="menu-item__info">
            <span className="subtitle difficulty">{difficultyKey[quiz.difficulty]}</span>
            <span className="subtitle length">{quiz.questions.length} questions</span>
            <span className="description">{quiz.description}</span>
            {status}
            <NavLink className="button menu-item__action" to={`/quiz/${quiz.id}`}>Play</NavLink>
        </div>
    </div>
  );
}
