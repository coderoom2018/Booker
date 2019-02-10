import React, { Component } from 'react';
import Head from '../components/Header';
import BookInformation from '../components/Book/BookInformation';
import ReviewContainer from '../components/Book/ReviewContainer';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ['1111', '2222'],
      newReview: '',
    }
  }

  _inputNewReview = (newReview) => {
    this.setState({
      reviews: this.state.reviews.concat(newReview) 
    })
  }

  _deleteReveiw = () => {

  }

  render() {
    return (
      <div> 
        <Head />
        <h1>Book Page</h1>
        <BookInformation />
        <ReviewContainer
          reviews={this.state.reviews}
          newReview={this.state.newReview}
          _inputNewReview={this._inputNewReview}
        />

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
          `}
        </style>
      </div>
    )
  }
}
