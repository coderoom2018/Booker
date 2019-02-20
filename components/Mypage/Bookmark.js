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
            // * {
            //   box-shadow: 0px 0px 0px 0.1px black;
            // }
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
            .btn_container {
              display: flex;
              justify-content: center;
            }
            .delete_btn {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              background-color: orange;
              border: 2px solid orange;
              color: white;
              padding: 5px;
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
          `}
        </style>
      </div>
    );
  }
}
