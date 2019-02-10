import React, { Component } from "react";

export default class Review extends Component {
  constructor(props) {
    super(props);
  }

  _deleteReview = () => {};

  render() {
    return (
      <div id="review_content">
        <div className="review_text">{this.props.review}</div>
        <div className="btn_container">
          <button className="delete_btn" onClick={this._deleteReview}>삭제 </button>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
            #review_content {
              width: 70%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 10px;
              margin-top: 10px;
            }
            .review_text {
              width: 100%;
              height: 100px;
              background: white;
              font-size: 20px;
            }
            .btn_container {
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .delete_btn {
              font-size: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}
