import React, { Component } from "react";
import book from '../../pages/book';
import Link from 'next/link';

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: ''
    }
  }

  componentDidMount = () => {
    this.setState({user_id: sessionStorage.getItem('user_id')})
  }

  render() {

    return (
      <div id="bookList_content">
        <Link href={`/book?user_id=${this.state.user_id}&book_id=${this.props.book.id}`} >
          <a>
            <div className="bookImg_container">
              <img className="book_img" src={this.props.book.image} />
            </div>
          </a>
        </Link>
        <div className="book_title">{this.props.book.title}</div>

        <style jsx>
          {`
            #bookList_content {
              margin-top: 40px;
              margin-bottom: 40px;
            }
            .bookImg_container {
              width: 200px;
              height: 320px;
            }
            .book_img {
              width: 100%;  
            }
            .book_img:hover {
              box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            .book_title {
              font-size: 20px;
              text-align: center;
              color: white;
              opacity: 0.6;
            }

            @media screen and (max-width: 992px) {
              #bookList_content {
                margin-top: 10px;
                margin-bottom: 10px;
                margin-right: 5px;
              }
              .bookImg_container {
                width: 130px;
                height: 200px;
              }
              .book_title {
                font-size: 12px;
              }
            }

          `}
        </style>
      </div>
    );
  }
}
