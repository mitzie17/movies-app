import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props)

        this.movies = props.movies
    }
    render() {
        return (
            <div>
                {this.movies.map((movie, index) => (
                    <p key={index}>{movie.reviews}</p>
                ))}
            </div>
        )
    }
}