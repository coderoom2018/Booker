import React, { Component } from "react";
import Modal from "react-responsive-modal";

export default class FocusReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmModal: false,
    }
  }

  _clickHandler_editReview = () => {
    const data = this.props.data[0];
    const user_id = sessionStorage.getItem('user_id');
    const book_id = data.book_id;
    const text = document.getElementsByClassName(book_id)[0].value;

    this.props._editReview(user_id, book_id, text)
  }

  _openConfirmModal = () => {
    this.setState({ confirmModal: true });
  }

  _closeConfirmModal = () => {
    this.setState({ confirmModal: false });
  }

  render() {
    
    const data = this.props.data[0];

    return (
      <div id="review_content">
        <Modal open={this.state.confirmModal} onClose={this._closeConfirmModal}>
          <h3>수정된 리뷰를 등록 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn"
              onClick={() => {
                this._clickHandler_editReview();
                this._closeConfirmModal();
              }}
            >등록</button>
            <button className="btn" onClick={this._closeConfirmModal}>취소</button>
          </div>
        </Modal>

        <div id="subTitle">
          내가 작성한 리뷰
        </div>
        <div className="reviewText_container">
          <textarea className={`${data.book_id} review_text`} defaultValue={data.text} />
        </div>
        <div className="btn_container">
          <button className="btn" onClick={this._openConfirmModal}>수정하기</button>
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
              font-size: 30px;
              text-align: center;
              vertical-align: middle;
              padding: 10px;
            }
            .reviewText_container {
              width: 100%;
              height: 700px;
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
            .btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }

            @media screen and (max-width: 992px) {
              #review_content {
                width: 99%;
                margin-bottom: 5px;
                margin-top: 5px;
              }
              #subTitle {
                font-size: 20px;
                padding: 5px;
                margin-top: 10px;
              }
              .reviewText_container {
                height: 400px;
              }
              .review_text {
                font-size: 15px;
              }
              .btn_container {
                display: flex;
                justify-content: center;
              }
              .btn {
                border: 0.1px solid orange;
                padding: 2px;
                font-size: 15px;
                margin: 2px 2px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
