import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Board from "./Board";
import Tickets from "./Tickets";
import Header from "../components/Header/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background: linear-gradient(90deg, #48C6EF 0%, #6F86D6 100%);
  }
 `;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Board lanes={lanes} dataSource={"../../assets/data.json"} />
        <Tickets dataSource={"../../assets/data.json"} />
      </AppWrapper>
    </>
  );
}

export default App;
