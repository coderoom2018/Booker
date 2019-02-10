import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

export default class ReviewCardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.reviews_card.map((review_card, id) => (
          <ReviewCard review_card={review_card} key={id}/>
        ))}
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
