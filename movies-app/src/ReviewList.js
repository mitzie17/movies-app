import React from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props)

        this.movies = props.movies
    }
    render() {
        return (
            <div>
                <Review reviews={this.props.movies}/>
                <ReviewForm />
            </div>
        )
    }
}