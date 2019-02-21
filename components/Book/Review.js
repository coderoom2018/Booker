import React, { Component } from "react";
import Modal from 'react-responsive-modal';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertModal: false,
      confirmModal: false,
    }
  }

  _clickHandler_deleteReview = () => {
    var user_id = this.props.review.user_id;
    var book_id = this.props.review.book_id;

    this.props._deleteReview(user_id, book_id)
  }

  _openAlertModal = () => {
    this.setState({ alertModal: true });
  }

  _closeAlertModal = () => {
    this.setState({ alertModal: false });
  }

  _openConfirmModal = () => {
    this.setState({ confirmModal: true });
  }

  _closeConfirmModal = () => {
    this.setState({ confirmModal: false });
  }

  render() {

    return (
      <div id="review_content">
        <Modal open={this.state.alertModal} onClose={this._closeAlertModal}>
          <br />
          <h3>로그인을 해주세요!</h3>
        </Modal>

        <Modal open={this.state.confirmModal} onClose={this._closeConfirmModal}>
          <h3>리뷰를 삭제 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn"
              onClick={() => {
                this._clickHandler_deleteReview()
                this._closeConfirmModal()
              }}
            >삭제</button>
            <button className="btn" onClick={this._closeConfirmModal}>취소</button>
          </div>
        </Modal>

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
            className="btn" 
            onClick={ () => {
              !sessionStorage.getItem("user_id")
                ? this._openAlertModal()
                : this._openConfirmModal()
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
              align: center;
              width: 100px;
            }
            .btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }

            @media screen and (max-width: 992px) {
              #review_content {
                width: 99%;
                margin-bottom: 5px;
                margin-top: 5px;
                border: 0.1px solid orange;
              }
              .review_text {
                font-size: 15px;
              }
              .btn {
                border: 0.1px solid orange;
                padding: 2px;
                font-size: 15px;
                margin: 2px 5px;
                width: 80px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
