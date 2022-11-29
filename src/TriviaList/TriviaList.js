import "./TriviaList.css";
import { useState, useEffect, useContext } from "react";
import TriviaQuizMenuItem from "../TriviaQuizMenuItem/TriviaQuizMenuItem";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { SearchContext } from "../context/Search";
import { useLoaderData } from "react-router-dom";

const searchAndSort = (quizzes, searchRequest) => {
  quizzes.sort((a, b) => a.name.localeCompare(b.name));
  quizzes = quizzes.filter(quiz => quiz.name.toLocaleUpperCase().includes(searchRequest.term.toLocaleUpperCase()))
  quizzes = quizzes.filter(quiz => quiz.categories.some(category => searchRequest.categories[category]));
  return quizzes;
}

export default function TriviaList() {
  const { data } = useLoaderData();

  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const {searchRequest} = useContext(SearchContext);
  useEffect(() => {
        const searchedAndSortedQuizzes = searchAndSort(data, searchRequest);
        setQuizzes(searchedAndSortedQuizzes);
        setLoading(false);
  }, [data, searchRequest]);
  const quizElements = searchAndSort(quizzes, searchRequest).map((quiz) => (
    <TriviaQuizMenuItem key={quiz.id} quiz={quiz} />
  ));
  return (isLoading ? <LoadingIcon/> : <menu className="menu-list">{quizElements}</menu>);
}
