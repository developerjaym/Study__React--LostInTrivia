import { Link } from "react-router-dom";
import "./Results.css";

export default function Results({ quiz }) {
  return (
    <div className="results">
      <h2>Results for {quiz.name}</h2>
        <span>Score: {quiz.score} points</span>
        <Link className="button" to="/">
          Return Home
        </Link>
    </div>
  );
}
