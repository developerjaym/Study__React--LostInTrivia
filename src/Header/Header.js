import "./Header.css";
import logo from "../logo_squares.png";
import { Link } from "react-router-dom";

export default function Header({ children }) {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <h1>Lost in Trivia</h1>
      {children}
    </header>
  );
}
