import React, { Component } from "react";
import Link from 'next/link';
import Modal from 'react-responsive-modal';

export default class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmModal: false,
    }
  }

  _openConfirmModal = () => {
    this.setState({confirmModal: true})
  }

  _closeConfirmModal = () => {
    this.setState({confirmModal: false})
  }

  _clickHandeler_deleteBookmark = () => {
    this.props._deleteBookmark(this.props.bookmark.book_id);
    this.setState({confirmModal: false})
  };

  render() {

    return (
      <div id="bookmark_content">
        <Modal open={this.state.confirmModal} onClose={this._closeConfirmModal}>
          <h3>삭제 하시겠습니까?</h3>
          <div className="btn_container">
            <button className="btn" onClick={this._clickHandeler_deleteBookmark}>삭제</button>
            <button className="btn" onClick={this._closeConfirmModal}>취소</button>
          </div>
        </Modal>

        <Link href={`/book?book_id=${this.props.bookmark.book.id}`} >
          <div className="image_container">
            <img className="book_image" src={this.props.bookmark.book.image} />
          </div>
        </Link>
        <div className="book_title">{this.props.bookmark.book.title}</div>
        <div className="btn_container">
          <button className="btn" onClick={this._openConfirmModal}>삭제</button>
        </div>

        <style jsx>
          {`
            #bookmark_content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 40px;
              margin-top: 20px;
              margin-bottom: 20px;
              width: 200px;
              height: 380px;
              background: whitesmoke;
              box-shadow: 5px 10px 8px #888888;
            }
            .image_container {
              width: 200px;
              height: 320px;
            }
            .book_image {
              width: 100%;
            }
            .book_title {
              text-align: center;
              // margin-top: 10px;
              font-size: 20px;
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
              margin: 2px 5px;
              cursor: pointer;
              align: center;
              width: 80px;
            }
            .delete_btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }

            @media screen and (max-width: 992px) {
              #bookmark_content {
                margin-left: 0px;
                margin-top: 10px;
                margin-bottom: 10px;
                width: 150px;
                height: 280px;
                background: whitesmoke;
                box-shadow: 5px 10px 8px #888888;
              }
              .image_container {
                width: 150px;
                height: 250px;
              }
              .book_title {
                font-size: 15px;
              }
              .btn {
                border: 0.1px solid orange;
                padding: 2px;
                text-align: center;
                font-size: 15px;
                margin: 2px 5px;
                width: 60px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
