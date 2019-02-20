import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

@inject("signInStore")

@observer
export default class InputReview extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandler_inputNewReview = () => {
    var text = document.getElementsByClassName("input_text")[0].value;
    var book_id = this.props.book_id;
    var user_id = sessionStorage.getItem("user_id")

    this.props._inputNewReview(text, user_id, book_id);
  };

  render() {

    return (
      <div id="inputReview_content">
        <div className="inputText_container">
          <textarea className="input_text" placeholder="감상평을 작성 해주세요" />
        </div>
        <div className="button_container">
          <button 
            className="submit_btn" 
            onClick={(e) => {
              if (!sessionStorage.getItem("user_id")) {
                alert("로그인을 해주세요")
              } else {
                if (confirm("등록 하시겠습니까?")) this._clickHandler_inputNewReview()
              }
            }}>등록</button>
        </div>

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            textarea {
              resize: none;
            }
            #inputReview_content {
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
            .inputText_container {
              width: 100%;
            }
            .input_text {
              width: 100%;
              height: 100px;
              font-size: 20px;
            }
            .submit_btn {
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
              float: right;
              width: 100px;
            }
          `}
        </style>
      </div>
    );
  }
}
