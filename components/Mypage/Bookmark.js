import React, { Component } from "react";
import Link from 'next/link';

export default class Bookmark extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandeler_deleteBookmark = () => {
    this.props._deleteBookmark(this.props.bookmark.id);
  };

  render() {
    
    return (
      <div id="bookmark_content">
        <Link href={`/book?book_id=${this.props.bookmark.book.id}`} >
          <div className="image_container">
            <img className="book_image" src={this.props.bookmark.book.image} />
          </div>
        </Link>
        <div className="book_title">{this.props.bookmark.book.title}</div>
        <div className="btn_container">
          <button className="delete_btn" onClick={this._clickHandeler_deleteBookmark}>삭제</button>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #bookmark_content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 40px;
              width: 200px;
              height: 380px;
            }
            .image_container {
              background: yellow;
              width: 200px;
              height: 320px;
            }
            .book_image {
              width: 100%;
            }
            .book_title {
              text-align: center;
              margin-top: 10px;
              font-size: 20px;
            }
            .delete_btn {
              font-size: 20px;
              margin-top: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
