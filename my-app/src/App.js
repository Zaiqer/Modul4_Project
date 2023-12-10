import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import SearchBox from "./Components/SearchBox";
import MovieList from "./Components/MovieList";
import Basket from "./Components/Basket";
import "./App.css";

function App() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [newListName, setNewListName] = useState("New list");

  const addToSelectedList = (movie) => {
    if (!selectedMovies.find((m) => m.imdbID === movie.imdbID)) {
      setSelectedMovies((prevMovies) => [...prevMovies, movie]);
    }
  };

  const removeFromList = (movie) => {
    const updatedMovies = selectedMovies.filter((m) => m.imdbID !== movie.imdbID);
    setSelectedMovies(updatedMovies);
  };

  const handleListNameChange = (event) => {
    setNewListName(event.target.value);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={(
              <div className="row g-0">
                <SearchBox onAddToSelected={addToSelectedList} />
                <MovieList
                  selectedMovies={selectedMovies}
                  newListName={newListName}
                  onRemoveFromList={removeFromList}
                  onListNameChange={handleListNameChange}
                />
              </div>
            )} />
            <Route path="/basket" element={(
              <Basket basketMovies={selectedMovies} listName={newListName} />
            )} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
