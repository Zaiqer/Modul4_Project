import React, { useState } from 'react';
import "./SearchBox.css"

function SearchBox({ onAddToSelected }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const addToSelectedList = (movie) => {
        onAddToSelected(movie);
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=e8ea33d8`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('API Response:', data);
            setSearchResults(data.Search || []);
        } catch (error) {
            console.error('Error searching for movies:', error);
        }
    };

    return (
        <div className='col-sm-6 col-md-8'>
            <form className="d-flex col-6 py-2 my-3" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by Name" aria-label="Search" />
                <button type='submit' className="btn btn-outline-dark" onClick={handleSearch}>Search</button>
            </form>
            {searchResults.map(movie => (
                <div key={movie.imdbID} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={movie.Poster} className="img-fluid rounded-start" alt={movie.Title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>{movie.Title}</b></h5>
                                <p className="card-text"><b>Year:</b> {movie.Year}; <b>Type:</b> {movie.Type}</p>
                                <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='_blank' rel='noopener noreferrer' className='btn btn-sm btn-info me-3'><i className="fa-solid fa-newspaper"></i> Details</a>
                                <button className='btn btn-sm btn-warning' onClick={() => addToSelectedList(movie)}><i className="fa-solid fa-plus"></i> Add to List</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default SearchBox;
