import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

export default class ReviewCardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="reviewCard_content">
        {this.props.reviews_card.map((review_card, id) => (
          <ReviewCard 
            review_card={review_card} 
            key={id}
            user_id={this.props.user_id}
            _deleteReviewCard={this.props._deleteReviewCard}
            _editReviewCard={this.props._editReviewCard}
            _editMyScore={this.props._editMyScore}
          />
        ))}
        <style jsx>
      {`
      
      `}
    </style>
      </div>
    )
  }
}
