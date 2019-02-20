import React, { Component } from "react";
import ReviewCard_Image from "./ReviewCard_Image";
import ReveiwCard_Information from "./ReviewCard_Information";
import ReviewCard_Rate from "./ReviewCard_Rate";
import ReviewCard_Btn from "./ReviewCard_Btn"

export default class ReviewCard extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandeler_deleteReviewCard = () => {
    const id = this.props.review_card.id;
    const user_id = this.props.review_card.user_id;
    const book_id = this.props.review_card.book_id;

    this.props._deleteReviewCard(id, user_id, book_id);
  };

  render() {

    return (
      <div id="reviewCard_content">
        <ReviewCard_Image 
          book_id={this.props.review_card.book.id}
          image={this.props.review_card.book.image}
        />

        
        <div id="book_information">
          <ReveiwCard_Information
            title={this.props.review_card.book.title}
            createdAt={this.props.review_card.createdAt}
            book_id={this.props.review_card.book_id}
            text={this.props.review_card.text}
          />

          <ReviewCard_Rate 
            averageScore={this.props.review_card.book.averageScore}
            score={this.props.review_card.score}
          />

          <ReviewCard_Btn 
            book_id={this.props.review_card.book_id}
            _clickHandeler_deleteReviewCard={this._clickHandeler_deleteReviewCard}
          />
        </div>

        <style jsx>
          {`
            textarea {
              resize: none;
            }
            #reviewCard_content {
              display: flex;
              width: 70%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 20px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
              background: whitesmoke;
            }
            #book_information {
              display: flex;
              flex-direction: column;
              width: 75%;
              margin-right: 10px;
              margin-left: 20px;
              background: whitesmoke;
            }
          `}
        </style>
      </div>
    );
  }
}
