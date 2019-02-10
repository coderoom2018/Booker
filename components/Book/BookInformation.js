import React, { Component } from "react";

export default class BookInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        <div className="bookImg_container">
          <img
            className="bookimage"
            src="http://covers.openlibrary.org/b/id/240716.jpg"
          />
        </div>

        <div id="book_information">
          <div className="book_title">BOOK_Title</div>
          <div className="book_publishedAt">BOOK_PublishedAt</div>
          <div className="book_description">BOOK_Description</div>
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
            .book_description {
              height: 300px;
              font-size: 18px;
              margin-bottom: 10px;
            }
            .book_rate {
              display: flex;
              flex-direction: column;
            }
          `}
        </style>
      </div>
    );
  }
}
