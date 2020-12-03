import styled from "styled-components";
import React, { useState } from "react";

const Search = ({ search, setSearch }) => {
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
    console.log(textInput);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(textInput);
    console.log(textInput);
    setTextInput("");
  };

  return (
    <StyledSearch>
      <h1>Crypto Price Tracker</h1>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="coin-input"
          onChange={inputHandler}
        />
        <button onClick={submitSearch} type="submit">
          Submit
        </button>
      </form>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    0deg,
    rgba(26, 26, 26, 1) 12%,
    rgba(58, 83, 125, 0.21192226890756305) 100%
  );

  h1 {
    margin: 1rem;
    font-family: "Press Start 2P", cursive;
  }

  input {
    width: 30%;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: none;
    margin-top: 2rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    color: black;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #223475;
  }
`;

export default Search;
