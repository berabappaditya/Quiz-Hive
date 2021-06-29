import React, { useContext, useState } from "react";
const ResultContext = React.createContext();
const ResultUpdateContext = React.createContext();

export function ResultCount() {
  return useContext(ResultContext);
}
export function ResultCountUpdate() {
  return useContext(ResultUpdateContext);
}

export function DataProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <ResultContext.Provider value={count}>
      <ResultUpdateContext.Provider value={setCount}>
        {children}
      </ResultUpdateContext.Provider>
    </ResultContext.Provider>
  );
}
