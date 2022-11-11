import "./Home.css";
import Header from "../Header/Header";
import TriviaList from "../TriviaList/TriviaList";
import { SearchProvider } from "../context/Search";
import FilterHeader from "../Header/FilterHeader/FilterHeader";

export default function Home() {
  return (
    <SearchProvider>
      <Header>
        <FilterHeader />
      </Header>
      <main>
        <TriviaList />
      </main>
    </SearchProvider>
  );
}
