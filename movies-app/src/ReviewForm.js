import React from 'react';

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          movie: { ...this.props.movie },
        }
      }

    handleClick = (e) => {
        e.preventDefault()
        console.log(e)
       if (this.props.onReviewSubmit && this.props.saveInput) {
        this.setState((state, props) => {
            return { movie: {
                ...state.movie,
                reviews: state.movie.reviews.push('some')
            }}
        })
        this.props.onReviewSubmit(e)
        this.props.saveInput(e)
       }

    }
    
    render() {
        return (
            <div>
                <form>
                    <input type='textarea' value={this.saveInput} placeholder='Add review...'></input>
                    <button onClick={this.handleClick} className='btn btn-primary' type='button'>Submit</button>
                </form>
            </div>
        )
    }
}