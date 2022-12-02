import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Quiz from "./Quiz";
import "./Quiz.css";

export default function QuizWrapper() {
  const { data } = useLoaderData();
  const { id } = useParams();

  return (
    <>
      <Header>
        <Link to="/" className="button button--icon dark-fg">
          ←
        </Link>
      </Header>
      <main className="expand">
        <Quiz quizElement={data.find((ele) => ele.id === id)} quizId={id} />
      </main>
    </>
  );
}
