import { NavLink } from "react-router-dom";
import "./TriviaQuizMenuItem.css";

export default function TriviaQuizMenuItem({ quiz }) {
    let difficultyKey = {
        "1": "Easy",
        "2": "Easy",
        "3": "Challenging",
        "4": "Hard",
        "5": "Very Hard"
    }
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
            <NavLink className="button menu-item__action" to={`/quiz/${quiz.id}`}>Play</NavLink>
        </div>
    </div>
  );
}
