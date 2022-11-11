import "./TriviaList.css";
import { useState, useEffect, useContext } from "react";
import TriviaQuizMenuItem from "../TriviaQuizMenuItem/TriviaQuizMenuItem";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { SearchContext } from "../context/Search";

const searchAndSort = (quizzes, searchRequest) => {
  quizzes.sort((a, b) => a.name.localeCompare(b.name));
  quizzes = quizzes.filter(quiz => quiz.name.toLocaleUpperCase().includes(searchRequest.term.toLocaleUpperCase()))
  quizzes = quizzes.filter(quiz => quiz.categories.some(category => searchRequest.categories[category]));
  return quizzes;
}

export default function TriviaList() {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const {searchRequest} = useContext(SearchContext);
  
  useEffect(() => {
    fetch("https://localstorage.tools/trivia/test.json")
      .then((res) => res.json())
      .then((json) => {
        const searchedAndSortedQuizzes = searchAndSort(json, searchRequest);
        setQuizzes(searchedAndSortedQuizzes);
        setLoading(false);
      });
  }, [searchRequest]);
  const quizElements = searchAndSort(quizzes, searchRequest).map((quiz) => (
    <TriviaQuizMenuItem key={quiz.id} quiz={quiz} />
  ));
  return (isLoading ? <LoadingIcon/> : <menu className="menu-list">{quizElements}</menu>);
}
