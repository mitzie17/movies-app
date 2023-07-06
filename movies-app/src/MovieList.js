import React from 'react';
import Movie from './Movie';

export default function MovieList() {
    let movies = [
        {'title': 'Pirates of the Caribbean',
        'reviews': ['Good movie. Will recommend', ],
        'stars': '****'
        },
        {'title': 'Transformers',
        'reviews': ['Not the best'],
        'stars': '***'
        },
        {'title': 'The Lion King',
        'reviews': ['Best Disney movie of all time!'],
        'stars': '*****'}
    ]
    
    return (
        <div>
            <Movie movies={movies} />
        </div>
    )
    
}