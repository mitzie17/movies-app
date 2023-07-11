import React from 'react';

export default class ReviewForm extends React.Component {

    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       movie: { ...this.props.movie },
    //     }
    //   }

    

    onSubmit = (event) => {
        
        this.props.onReviewSubmit(event.target.reviewInput.value)
        event.preventDefault()
        console.log(event)
       //if (this.props.onReviewSubmit && this.props.saveInput) {
        // this.setState((state, props) => {
        //     return { movie: {
        //         ...state.movie,
        //         reviews: state.movie.reviews.push('some')
        //     }}
        // })
        // this.props.onReviewSubmit()
        // this.props.saveInput()
       }

    
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='textarea' name='reviewInput' placeholder='Add review...'></input>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}