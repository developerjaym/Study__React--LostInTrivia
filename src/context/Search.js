import React, { useState } from "react";

const SearchContext = React.createContext();

//provider component
function SearchProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  const [searchRequest, setSearchRequest] = useState({
    term: "",
    categories: {
      Entertainment: true,
      History: true,
      Language: true,
      Pricing: true,
      Science: true,
      Geography: true
    },
  });
  return (
    <SearchContext.Provider value={{ searchRequest, setSearchRequest }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
