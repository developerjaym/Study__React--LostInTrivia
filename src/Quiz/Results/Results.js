import { useContext, useEffect } from "react";
import { ToastContext } from "../../context/Toasts";
import ClipboardCopier from "../../some_tools/ClipboardCopier";
import { saveResult } from "../../some_tools/ResultsRepository";
import "./Results.css";

export default function Results({ quiz, quizId }) {
  useEffect(() => {
    saveResult(quiz)
  }, [quiz])
  const {setToastMessage} = useContext(ToastContext);
  const resultsToString = results => results.map(result => result ? "🟩" : "⬛").join("");
  const share = e => {
    const clipboardCopier = new ClipboardCopier();
    clipboardCopier.copy(quizId, `#LostInTrivia: ${quiz.name}\nResults: ${resultsToString(quiz.results)}`, () => setToastMessage({message:"Copied!", mood: "happy"}), () => setToastMessage({message: "Hmm, copying failed. Sorry.", mood:"sad"}));
  }
  return (
    <div className="results">
      <h2>Results for {quiz.name}</h2>
      <span>Score: {quiz.score} points</span>
      <span>{resultsToString(quiz.results)}</span>
      <button className="button" onClick={share}>
      <svg className="share" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg>Share
      </button>
    </div>
  );
}
