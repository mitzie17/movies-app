import React from 'react';

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          movie: { ...this.props.movie },
        }
      }

    handleChange = (e) => {
       if (this.props.onReviewSubmit) {
        this.props.onReviewSubmit(e)
       }

    }
    
    render() {
        return (
            <div>
                <form>
                    <input type='textarea' placeholder='Add review...'></input>
                    <button onChange={this.handleChange} className='btn btn-primary' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}