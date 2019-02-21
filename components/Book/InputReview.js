import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import Modal from 'react-responsive-modal';

@inject("signInStore")

@observer
export default class InputReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertModal: false,
      confirmModal: false,
    }
  }

  _clickHandler_inputNewReview = () => {
    var text = document.getElementsByClassName("input_text")[0].value;
    var book_id = this.props.book_id;
    var user_id = sessionStorage.getItem("user_id")

    this.props._inputNewReview(text, user_id, book_id);
  };

  _openAlertModal = () => {
    this.setState({ alertModal: true })
  }

  _closeAlertModal = () => {
    this.setState({ alertModal: false})
  }

  _openConfirmModal = () => {
    this.setState({ confirmModal: true })
  }

  _closeConfirmModal = () => {
    this.setState({ confirmModal: false})
  }

  render() {

    return (
      <div id="inputReview_content">
        <Modal open={this.state.alertModal} onClose={this._closeAlertModal}>
          <h3>로그인을 해주세요!</h3>
        </Modal>

        <Modal open={this.state.confirmModal} onClose={this._closeConfirmModal}>
          <h3>등록 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn"
              onClick={() => {
                this._clickHandler_inputNewReview()
                this._closeConfirmModal()
              }}
            >등록</button>
            <button className="btn">취소</button>
          </div>
        </Modal>

        <div className="inputText_container">
          <textarea className="input_text" placeholder="감상평을 작성 해주세요" />
        </div>
        <div className="btn_container">
          <button 
            className="btn" 
            onClick={(e) => {
              !sessionStorage.getItem("user_id") 
                ? this._openAlertModal()
                : this._openConfirmModal()
              }
            }>등록</button>
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
            .btn {
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
              width: 100px;
            }
            .btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }

            @media screen and (max-width: 992px) {
              #inputReview_content {
                width: 99%;
                margin-bottom: 5px;
                margin-top: 5px;
                border: 2px solid orange;
              }
              .input_text {
                height: 100px;
                font-size: 15px;
              }
              .btn {
                border: 0.1px solid orange;
                padding: 2px;
                font-size: 15px;
                margin: 2px 2px;
                width: 80px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
