import React, { Component } from "react";
import book from '../../pages/book';
import Link from 'next/link';

export default class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="bookList_content">
        <Link href={`/book?book_id=${this.props.book.id}`} >
          <a>
            <div className="bookImg_container">
              <img className="book_img" src={this.props.book.image} />
            </div>
          </a>
        </Link>
        <div className="book_title">{this.props.book.title}</div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #bookList_content {
              // margin-left: 40px;
              margin-top: 40px;
              margin-bottom: 40px;
            }
            .bookImg_container {
              width: 200px;
              height: 350px;
            }
            .book_img {
              width: 100%;
            }
            .book_title {
              font-size: 20px;
              text-align: center;
            }

          `}
        </style>
      </div>
    );
  }
}
