import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class Book_Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeMyRateModal: false,
      alertModal: false,
    }
  }

  _openRateModal = () => {
    this.setState({changeMyRateModal: true});
  }

  _closeRateModal = () => {
    this.setState({changeMyRateModal: false});
  }

  _openAlertModal = () => {
    this.setState({alertModal: true});
  }

  _closeAlertModal = () => {
    this.setState({alertModal: false});
  }

  render () {

    return (
      <div className="book_rate">
        <Modal open={this.state.changeMyRateModal} onClose={this._closeRateModal}>
          <h3>변경 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn"
              onClick={() => {
                this.props._clickHandeler_submitMyscore()
                this._closeRateModal()
              }}
            >변경</button>
            <button className="btn" onClick={this._closeRateModal}>취소</button>
          </div>
        </Modal>

        <Modal open={this.state.alertModal} onClose={this._closeAlertModal}>
          <h3>로그인을 해주세요!</h3>
        </Modal>

        <div className="averageScore">평균점수: {this.props.averageScore}</div>
        <div className="myScore">나의 점수: {this.props.myScore ? this.props.myScore : 0}</div>
        <div className="editScore">
          평가점수 변경: 
          <button className="btn" onClick={this.props._clickHandeler_decreaseMyscore}>-</button>
            {this.props.myScore ? this.props.myScore : 0}
          <button className="btn" onClick={this.props._clickHandeler_increaseMyscore}>+</button>
          <button 
            className="btn" 
            onClick={(e) => {
              if (!sessionStorage.getItem("user_id")) {
                this._openAlertModal()
              } else {
                this._openRateModal()          
              }
            }}>변경하기</button>
        </div>

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            textarea {
              resize: none;
            }
            .book_rate {
              display: flex;
              flex-direction: column;
              font-size: 20px;
            }
            .averageScore,
            .myScore,
            .editScore {
              margin-bottom: 5px;
              font-weight: bold;
              background: whitesmoke;
            }
            .btn_container {
              display: flex;
              justify-content: center;
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
            .myScore_btn:hover,
            .submit_btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }

            @media only screen and (max-width: 992px) {
              .book_rate {
                font-size: 15px;
              }
              .btn {
                border: 0.1px solid orange;
                padding: 2px;
                font-size: 15px;
                margin: 1px 1px;
                margin-right: 5px;
              }
            }
          `}
        </style>
      </div>
    )
  }
}