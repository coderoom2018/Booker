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
        <InputReview _inputNewReview={this.props._inputNewReview} />
        <div className="review_container">
          {this.props.reviews.map((review, id) => (
            <Review review={review} key={id} />
          ))}
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
            #review_content {
              display: flex;
              flex-direction: column;
              margin-top: 20px;
              background: whiteSmoke;
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
