import React from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

export default class ReviewList extends React.Component {

    constructor(props) {
        super(props)

        this.movie.reviews = props.movie.reviews
    }

    render() {
        const reviews = this.props.reviews

        return(
            <div></div>
        )
    }
}