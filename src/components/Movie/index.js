import React from 'react';
import './style.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie__card">
            <div className="movie__poster">
                <div className="movie__rating">{rating} z 10</div>
                <img src={`./assets/${poster}`} alt="test" />
            </div>
            <div className="movie__desc">
                <div className="movie__desc__common">
                    <h2 className="movie__desc__title">{title}</h2>
                    <ul>
                        <li><span className="bold">Rok vydání: </span>{year}</li>
                        <li><span className="bold">Žánr: </span>{genre}</li>
                        <li><span className="bold">Režie: </span>{director}</li>
                    </ul>
                </div>
                <div className="movie__desc__cast">
                    

                    { cast.map( it => { return (<div className="cast__item">  <p><span className="bold">{it.name}</span><br />{it.as}</p> </div>)
                        
                    })}
                   
                   
                </div>
            </div>

        </div>
    )
}

export default Movie;