import React, { Component } from "react";
import BookList from "./BookList";

export default class BookListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="bookListContainer_content">
        <div id="bookList_container">
          { this.props.books.map((book, id) => (
            <BookList book={book} key={id} />
          ))}
        </div>

        <style jsx>
          {`
            #bookList_container {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin-left: auto;
              margin-right: auto;
              padding: 20px;
            }

            @media screen and (max-width: 992px) {
              #bookList_container {
                padding: 0px;
                width: 80%;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
