import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ children }) {
  return (
    <header className="App-header">
      <Link to="/">
        <img src="https://localstorage.tools/trivia/app/logo_squares.png" className="App-logo" alt="logo" />
      </Link>
      <h1>Lost in Trivia</h1>
      {children}
    </header>
  );
}
