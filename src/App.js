import React from "react";
import "./App.css";
import Filter from "./Component/Filter";
import SearchBar from "./Component/SearchBar";
import Title from "./Component/Title";
import BookData from "./Data";

function App() {
  return (
    <div className='App'>
      <Title />
      <SearchBar placeholder='Enter a Game and scroll ...' data={BookData} />
      <Filter placeholder='filter a Game and scroll ...' data={BookData} />
    </div>
  );
}

export default App;
