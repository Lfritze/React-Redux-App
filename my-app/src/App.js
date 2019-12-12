import React from "react";
import PeopleCard from "./components/PeopleCard";
import "./App.css";
import styled from "styled-components";

const TitleH1 = styled.h1`
  color: white;
`;

function App() {
  return (
    <div className="App">
      <TitleH1>Wanted: Dead or Alive</TitleH1>
      <PeopleCard />
    </div>
  );
}

export default App;
