import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';


export default class Movie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: {...this.props.movie}
        }
        
    }

    saveInput = (e) => {
        this.setState({ input: e.target.value });
        console.log(e.target.value)
      };

      addNewReview = () => {
        this.setState(prevState => ({
            
          //reviews: [...prevState.movie.reviews, prevState.input],
        }));
      };


    handleReviewSubmit = (e) => {
        e.preventDefault()

    }

    render() {

        const movie = this.state.movie

        return (
            <div className='body'>
                <p>{movie.reviews}</p>
                <p>{movie.stars}</p>
                <ReviewForm movie={movie} onReviewSubmit= {this.addNewReview} saveInput={this.saveInput}/>
            </div>
        )
    }
}