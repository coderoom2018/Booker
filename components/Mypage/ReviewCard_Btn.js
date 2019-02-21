import React, { Component } from "react";
import Link from "next/link";
import Modal from 'react-responsive-modal';

export default class ReviewCard_Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmModal: false,
    }
  }

  _openComfirmModal = () => {
    this.setState({confirmModal: true})
  }

  _closeConfirmModal = () => {
    this.setState({confirmModal: false})
  }

  render() {
    return (
      <div className="btn_container">
        <Modal open={this.state.confirmModal} onClose={this._closeConfirmModal}>
          <h3>평가카드를 삭제 하시겠습니까?</h3>
          <div className="btn_container">
            <button className="btn" onClick={this.props._clickHandeler_deleteReviewCard}>삭제</button>
            <button className="btn" onClick={this._closeConfirmModal}>취소</button>
          </div>
        </Modal>

        <Link href={`/focus?user_id=${this.props.user_id}&book_id=${this.props.book_id}`}>
          <button className="btn">수정하러 가기</button>
        </Link>
        <button className="btn" onClick={this._openComfirmModal}>삭제하기</button>

        <style jsx>
          {`
            .btn_container {
              margin-top: 5px;
              margin-left: auto;
              margin-right: 10px;
              margin-bottom: 5px;
            }
            .btn,
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
              margin: 2px 5px;
              cursor: pointer;
              align: center;
            }
            .focus_btn:hover,
            .delete_btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }

            @media screen and (max-width: 992px) {
              .btn_container {
                display: flex;
                justify-content: center;
                margin-left: auto;
                margin-right: auto;
              }
              .btn {
                border: 0.1px solid orange;
                padding: 2px;
                text-align: center;
                font-size: 15px;
                margin: 2px 5px;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
