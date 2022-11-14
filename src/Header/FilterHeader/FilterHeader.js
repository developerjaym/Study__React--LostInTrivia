import "./FilterHeader.css";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/Search";

export default function FilterHeader() {
  const { searchRequest, setSearchRequest } = useContext(SearchContext);
  const [displayFilter, setDisplayFilter] = useState(false);

  const onChecked = (e, category) => {
    setSearchRequest({
      ...searchRequest,
      categories: {
        ...searchRequest.categories,
        [category]: e.target.checked,
      },
    });
  };

  const filters = Object.keys(searchRequest.categories).map((category) => {
    return (
      <label key={category}>
        {category}
        <input
          type="checkbox"
          defaultChecked={searchRequest.categories[category]}
          onChange={(e) => onChecked(e, category)}
        />
      </label>
    );
  });
  return (
    <>
      <button
        className="button button--icon"
        onClick={(e) => setDisplayFilter(!displayFilter)}
      >
        🔍
      </button>
      {displayFilter ? (
        <div className="header-search-pane">
          <input
            type="search"
            defaultValue={searchRequest.term}
            autoFocus
            onChange={(e) =>
              setSearchRequest({ ...searchRequest, term: e.target.value })
            }
          />
          <div className="filters">{filters}</div>
        </div>
      ) : null}
    </>
  );
}
