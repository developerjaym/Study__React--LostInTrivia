import { NavLink } from "react-router-dom";
import { getResult } from "../some_tools/ResultsRepository";
import "./TriviaQuizMenuItem.css";

export default function TriviaQuizMenuItem({ quiz }) {
    const completed = getResult(quiz.id);
    let difficultyKey = {
        "1": "Very Easy",
        "2": "Easy",
        "3": "Medium",
        "4": "Hard",
        "5": "Very Hard"
    }
    const difficultyConverter = dif => {
        // const difNum = Number(dif)
        // const arr = Array(difNum)
        // arr.fill("🧠")
        // return arr.join("")
        return difficultyKey[dif]
    }
    const status = Boolean(completed) ? (<span title="You have already completed this quiz." className="subtitle status">✓</span>) : null;
  return (
    <div className="menu-item expand">
        <header className="menu-item__title">
            <span>Quiz</span>
            <h2>{quiz.name}</h2>
        </header>
        <div className="menu-item__info">
            <span className="subtitle difficulty">{difficultyConverter(quiz.difficulty)}</span>
            <span className="subtitle length">{quiz.questions.length} questions</span>
            <span className="description">{quiz.description}</span>
            {status}
            <NavLink className="button menu-item__action" to={`/quiz/${quiz.id}`}>Play</NavLink>
        </div>
    </div>
  );
}
