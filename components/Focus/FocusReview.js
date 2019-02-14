import React, { Component } from "react";

export default class FocusReview extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandler_editReview = () => {
    const data = this.props.data[0];
    const user_id = data.user_id;
    const book_id = data.book_id;
    const text = document.getElementsByClassName(book_id)[0].value;

    this.props._editReview(user_id, book_id, text)
  }

  render() {
    
    const data = this.props.data[0];

    return (
      <div id="review_content">
        <h2>FocusReview</h2>
        <div className="reviewText_container">
          <textarea className={`${data.book_id} review_text`} defaultValue={data.text} />
        </div>
        <div className="btn_container">
          <button 
            className="edit_btn" 
            onClick={(e) => {
              if (confirm("수정된 리뷰를 등록 하시겠습니까?")) this._clickHandler_editReview()
            } }>수정하기</button>
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
            .delete_btn {
              font-size: 20px;
            }
            .edit_btn {
              font-size: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}
