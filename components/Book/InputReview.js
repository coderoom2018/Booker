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
      <div id="content">
        <div>
          <textarea className="input_text" placeholder="감상평을 작성 해주세요" />
        </div>
        <div className="button_container">
          <button 
            className="submit_btn" 
            onClick={(e) => {
              if (confirm("등록 하시겠습니까?")) 
              this._clickHandler_inputNewReview()
            }}>등록</button>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #content {
              display: flex;
              flex-direction: column;

              width: 70%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .input_text {
              width: 100%;
              height: 100px;
              font-size: 20px;
            }
            .submit_btn {
              font-size: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}
