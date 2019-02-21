import React, { Component } from "react";
import Modal from "react-responsive-modal";

export default class Focus_Rate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmModal: false,
    }
  }

  _openConfirmModal = () => {
    this.setState({ confirmModal: true });
  }

  _closeConfirmModal = () => {
    this.setState({ confirmModal: false });
  }

  render() {

    return (
      <div className="book_rate">
        <Modal open={this.state.confirmModal} onClose={this._closeConfirmModal}>
          <h3>평가점수를 변경 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn"
              onClick={() => {
                this.props._clickHandeler_submitMyscore();
                this._closeConfirmModal();
              }}
            >변경</button>
            <button className="btn" onClick={this._closeConfirmModal}>취소</button>
          </div>
        </Modal>

        <div>평균점수: {this.props.averageScore}</div>
        <div>
          내가 평가한 점수: 
          <button className="btn" onClick={this.props._clickHandeler_decreaseMyscore}>-</button>
          {this.props.myScore}
          <button className="btn" onClick={this.props._clickHandeler_increaseMyscore}>+</button>
          <button className="btn" onClick={this._openConfirmModal}>수정하기</button>
        </div>

        <style jsx>
          {`
            .book_rate {
              display: flex;
              flex-direction: column;
              font-size: 20px;
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

            @media only screen and (max-width: 992px) {
              .book_rate {
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
                margin: 1px 1px;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
