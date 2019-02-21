import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class Book_BookmarkBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmAddModal: false,
      confirmDeleteModal: false,
      alertModal: false,
    }
  }
  
  _openAddModal = () => {
    this.setState({confirmAddModal: true})
  }

  _closeAddModal = () => {
    this.setState({confirmAddModal: false})
  }

  _openDeleteModal = () => {
    this.setState({confirmDeleteModal: true})
  }

  _closeDeleteModal = () => {
    this.setState({confirmDeleteModal: false})
  }

  _openAlertModal = () => {
    this.setState({alertModal: true})
  }

  _closeAlertModal = () => {
    this.setState({alertModal: false})
  }

  render() {
    return (
      <div className="btn_container">
        <Modal open={this.state.confirmAddModal} onClose={this._closeAddModal}>
          <h3>북마크에 추가 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn" 
              onClick={() => {
                this.props._clickHandeler_addBookmark();
                this._closeAddModal();
              }}
            >추가</button>
            <button className="btn" onClick={this._closeAddModal}>취소</button>
          </div>
        </Modal>

        <Modal open={this.state.confirmDeleteModal} onClose={this._closeDeleteModal}>
          <h3>북마크를 삭제 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn"
              onClick={() => {
                this.props._clickHandeler_deleteBookmark();
                this._closeDeleteModal();
              }}
            >삭제</button>
            <button className="btn" onClick={this._closeDeleteModal}>취소</button>
          </div>
        </Modal>

        <Modal open={this.state.alertModal} onClose={this._closeAlertModal}>
          <h3>로그인을 해주세요!</h3>
        </Modal>


        <button 
          className="btn add_btn" 
          onClick={(e) => { 
            if (!sessionStorage.getItem("user_id")) {
              this._openAlertModal()
            } else {
              this._openAddModal()}
          }}
        >북마크 추가</button>

        <button 
          className="btn delete_btn" 
          onClick={(e) => { 
            if (!sessionStorage.getItem("user_id")) {
              this._openAlertModal()
            } else {
              this._openDeleteModal()}
            }}
        >북마크 삭제</button>

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            .btn_container {
              display: flex;
              justify-content: center;
              margin-bottom: 10px;
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
            }
            .btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }
            .add_btn {
              margin-right: 20px;
            }

            @media only screen and (max-width: 992px) {
              .btn_container {
                margin-bottom: 5px;
              }
              .btn {         
                border: 0.1px solid orange;
                padding: 5px;
                font-size: 15px;
                margin: 1px 5px;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
