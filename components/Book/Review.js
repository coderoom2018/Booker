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
        <div className="userEmail">
          작성자: {this.props.review ? this.props.review.user.email : "user"}
        </div>
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
              if (!sessionStorage.getItem("user_id")) {
                alert("로그인을 해주세요")
              } else {
                if (window.confirm("작성하신 리뷰를 삭제 하시겠습니까?")) this._clickHandler_deleteReview()
              }
            }}
          >삭제 </button>
        </div>

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            textarea {
              resize: none;
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
              background: whitesmoke;
              border: 4px solid orange;
            }
            .userEmail {
              font-size: 15px;
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
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              background-color: orange;
              border: 2px solid orange;
              color: white;
              padding: 10px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              margin: 4px 2px;
              cursor: pointer;
              align: center;
              width: 100px;
            }
          `}
        </style>
      </div>
    );
  }
}
