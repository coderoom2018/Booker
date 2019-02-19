import React, { Component } from "react";

export default class Review extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandler_deleteReview = () => {
    var user_id = this.props.review.user_id;
    var book_id = this.props.review.book_id;

    this.props._deleteReview(user_id, book_id)
  }

  render() {

    return (
      <div id="review_content">
        <div className="reviewText_container">
          <textarea 
            className="review_text" 
            defaultValue={this.props.review.text} 
            readOnly="readonly"
          />
        </div>
        <div className="btn_container">
          <button 
            className="delete_btn" 
            onClick={ (e) => {
              if (window.confirm("작성하신 리뷰를 삭제 하시겠습니까?")) 
                this._clickHandler_deleteReview()
            }}
          >삭제 </button>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
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
            .reviewText_container {
              width: 100%;
              height: 100px;
              background: white;
              font-size: 20px;
            }
            .review_text {
              width: 100%;
              height: 100%;
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
