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

    
    
    

    //   addNewReview = () => {
        
    //     this.setState((state,props) => {
    //         return { movie: { 
    //           ...state.movie,
    //           reviews: state.movie.reviews.push('some')
    //         }};
    //       });
    //     }

    handleReviewSubmit = (review) => {
        this.setState((state) => {
                    return { movie: { 
                      ...state.movie,
                      reviews: [...state.movie.reviews, review]
                    }};
                  });

    }

    render() {

        const movie = this.state.movie

        return (
            <div className='body'>
                
                <p>{movie.reviews}</p>
                <p>{movie.stars}</p>
                <ReviewForm movie={movie} onReviewSubmit= {this.handleReviewSubmit}/>
            </div>
        )
    }
}