import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';


export default class Movie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: this.props.movies
        }
        
    }

    handleReviewSubmit = (e) => {
        e.preventDefault()
        this.setState((state, props) => {
            state.movie.reviews.push(e.target.value)
        })
        console.log(e)
        console.log('movie component')
    }

    render() {

        const movies = this.state.movies

        return (
            <div className='container'>
                {movies.map((movie, index) => (
                    <div className='card' key={index}>
                        <div className='card-header' key={index}>
                            <h3 className='card-title'>{movie.title}</h3>
                        </div>
                        <div className='body'>
                            <p>{movie.reviews}</p>
                            <p>{movie.stars}</p>
                            <ReviewForm movie={movie} onReviewSubmit= {this.handleReviewSubmit}/>
                        </div>
                    </div>    
                ))}
            </div>
        )
    }
}