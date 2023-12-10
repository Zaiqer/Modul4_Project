import React from 'react';
import "./Basket.css";

function Basket({ basketMovies, listName }) {
    return (
        <div className='d-flex justify-content-center my-3'>
            <div className="card text-center">
                <h4 className="card-header">Your Basket</h4>
                <h5 className='card-title my-3'>{listName}</h5>
                <div className="card-body">
                    {basketMovies.map((movie) => (
                        <div key={movie.imdbID} className='d-flex align-items-center my-2'>
                            <img className='img' src={movie.Poster} alt={movie.Title} />
                            <p className="card-text me-5 mx-3">{movie.Title} ({movie.Year})</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Basket;
