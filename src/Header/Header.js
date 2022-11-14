import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ children }) {
  return (
    <header className="App-header">
      <Link to="/">
        <img src="https://localstorage.tools/trivia/app/logo_squares.png" className="App-logo" alt="logo with three squares in a row with slight overlap between each" />
      </Link>
      <h1>Lost in Trivia</h1>
      {children}
    </header>
  );
}
