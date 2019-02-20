import React, { Component } from "react";

export default class FocusReview extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandler_editReview = () => {
    const data = this.props.data[0];
    const user_id = sessionStorage.getItem('user_id');
    const book_id = data.book_id;
    const text = document.getElementsByClassName(book_id)[0].value;

    this.props._editReview(user_id, book_id, text)
  }

  render() {
    
    const data = this.props.data[0];

    return (
      <div id="review_content">
        <div id="subTitle">
          <h2>내가 작성한 리뷰</h2>
        </div>
        <div className="reviewText_container">
          <textarea className={`${data.book_id} review_text`} defaultValue={data.text} />
        </div>
        <div className="btn_container">
          <button 
            className="edit_btn" 
            onClick={(e) => {
              if (confirm("수정된 리뷰를 등록 하시겠습니까?")) this._clickHandler_editReview()
            }}>수정하기</button>
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
            }
            #subTitle {
              color: whiteSmoke;
              font-weight: bold;
            }
            .reviewText_container {
              width: 100%;
              height: 1000px;
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
            .edit_btn {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              background-color: orange;
              border: 2px solid orange;
              color: white;
              padding: 5px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              margin: 2px 2px;
              cursor: pointer;
              align: center;
            }
          `}
        </style>
      </div>
    );
  }
}
