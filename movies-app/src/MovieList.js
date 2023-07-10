import React from 'react';
import Movie from './Movie';
import { movies } from './MoviesData';

export default class MovieList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            movies: movies
        }  
    }

    render() {
        const movies = this.state.movies
        return (
            <div>
                <div className='container'>
                {movies.map((movie, index) => (
                    <div className='card' key={index}>
                        <div className='card-header' key={index}>
                            <h3 className='card-title'>{movie.title}</h3>
                        </div>
                        <Movie movie={movie}/>
                    </div>    
                    ))}
                </div>
            </div>
        )
    }
    
    
}