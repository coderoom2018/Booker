import React, { Component } from "react";

export default class ReviewCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="reviewCard_content">
        <div className="bookImg_container">
          <img className="bookImg" src="http://covers.openlibrary.org/b/id/240716.jpg" />
        </div>

        <div id="book_information">
          <div className="book_title">BOOK_Title</div>
          <div className="book_createdAt">BOOK_CreatedAt</div>
          <textarea className="book_review">BOOK_Review</textarea>
          <div className="book_rate">
            <div>BOOK_Rate_Average</div>
            <div>BOOK_Rate_MyRate</div>
          </div>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
            #reviewCard_content {
              display: flex;
              width: 70%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 20px;
            }
            .bookImg_container {
              width: 250px;
              margin-left: auto;
              margin-right: auto;
            }
            .bookImg {
              width: 100%;
            }
            #book_information {
              display: flex;
              flex-direction: column;
              width: 75%;
              margin-right: auto;
              margin-left: auto;
            }
            .book_title {
              font-size: 30px;
              text-align: center;
              margin-top: 10px;
            }
            .book_createdAt {
              font-size: 15px;
              text-align: right;
              margin-top: 5px;
            }
            .book_review {
              height: 200px;
              font-size: 20px;
              margin-top: 5px;
            }
            .book_rate {
              font-size: 30px;
              margin-top: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
