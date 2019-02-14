import React, { Component } from "react";

export default class BookInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let book = this.props.book[0]
    let score = 0;
    
    // console.log("[*] book: ", this.props.book[0])
    return (
      <div id="content">
        <div className="bookImg_container">
          <img
            className="bookimage"
            src="http://covers.openlibrary.org/b/id/240716.jpg"
          />
        </div>

        <div id="book_information">
          <div className="book_title">{book.title}</div>
          <div className="book_publishedAt">{book.publishedAt}</div>
          <div className="bookDescription_container">
            <textarea 
              className="book_description"
              readOnly="readonly"
              defaultValue={book.description}
            />
          </div>
          <div className="book_rate">
            <div>{book.averageScore}</div>
            <div>{this.props.reviews[0] ? this.props.reviews[0].score : 0}</div>
          </div>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #content {
              display: flex;
              justify-content: center;
              background: whiteSmoke;
            }
            .bookImg_container {
              width: 300px;
              height: 500px;
              margin-right: 3%;
            }
            .bookimage {
              display: block;
              width: 100%;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            #book_information {
              display: flex;
              flex-direction: column;
              width: 60%;
            }
            .book_title {
              font-size: 50px;
              text-align: center;
              margin-bottom: 10px;
            }
            .book_publishedAt {
              text-align: right;
              margin-bottom: 10px;
            }
            .bookDescription_container {
              height: 300px;
              font-size: 18px;
              margin-bottom: 10px;
            }
            .book_description {
              width: 100%;
              height: 100%;
              font-size: 20px;
            }
            .book_rate {
              display: flex;
              flex-direction: column;
              font-size: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}