import React, { Component } from "react";

export default class ReviewCard_Rate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book_rate">
        <div>평균 평가점수: {this.props.averageScore}</div>
        <div className="myScore">나의 평가점수: {this.props.score}</div>

        <style jsx>
          {`
            .book_rate {
              font-size: 20px;
              margin-top: 10px;
            }
          `}
        </style>
      </div>
    )
  }

}