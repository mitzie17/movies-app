import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';

export default class Movie extends React.Component {

    constructor(props) {
        super(props)

        this.movies = props.movies
    }

    render() {

        return (
            <div className='container'>
                {this.movies.map((movie, index) => (
                    <div className='card'>
                        <div className='card-header' key={index}>
                            <h3 className='card-title'>{movie.title}</h3>
                        </div>
                        <div className='body'>
                            <p>{movie.reviews}</p>
                            <p>{movie.stars}</p>
                        </div>
                    </div>    
                ))}
            </div>
        )
    }
}