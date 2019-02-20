import React, { Component } from "react";
import Review from "./Review";
import InputReview from "./InputReview";

export default class ReviewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="review_content">
        <InputReview 
          _inputNewReview={this.props._inputNewReview} 
          reviews={this.props.reviews}
          book_id={this.props.book_id}
        />
        <div className="review_container">
          {this.props.reviews.map((review, id) => (
            <Review 
              review={review} 
              key={id} 
              _deleteReview={this.props._deleteReview}
              _checkDelete={this.props._checkDelete}
            />
          ))}
        </div>

        <style jsx>
          {`
            // * {
            //   box-shadow: 0px 0px 0px 0.1px black;
            // }
            #review_content {
              display: flex;
              flex-direction: column;
              margin-top: 20px;
              background: #262626;
            }
            .review_container {
              display: flex;
              flex-direction: column;
            }
          `}
        </style>
      </div>
    );
  }
}
