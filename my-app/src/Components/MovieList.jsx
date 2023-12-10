import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveMoviesToServer } from '../api';

function MovieList({ selectedMovies, newListName, onRemoveFromList, onListNameChange }) {
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const removeFromList = (movie) => {
    onRemoveFromList(movie);
  };

  const handleSave = () => {
    saveMoviesToServer(selectedMovies)
      .then((response) => {
        console.log('Movies saved successfully:', response);
        setIsSaved(true);
      })
      .catch((error) => {
        console.error('Error saving movies:', error);
      });
  };

  const handleGoToBasket = () => {
    navigate('/basket');
  };

  return (
    <div className="card col-6 col-md-4 my-3">
      <h5 className="card-header">My List</h5>
      <div className="card-body">
        <form className="py-2 d-flex">
          <input className="form-control me-2" type="text" aria-label="Search" value={newListName}
            onChange={onListNameChange} />
          {!isSaved ? (
            <button type="button" className="btn btn-outline-success" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button type="button" className="btn btn-outline-primary" onClick={handleGoToBasket}>
              Go to Basket
            </button>
          )}
        </form>
          {selectedMovies.map((movie) => (
            <p className='my-2 d-flex justify-content-between' key={movie.imdbID}>{movie.Title} ({movie.Year})
              <button className='btn' onClick={() => removeFromList(movie)}>
                <i className="fa-solid fa-circle-xmark" style={{ color: '#fa0000' }}></i>
              </button>
            </p>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
