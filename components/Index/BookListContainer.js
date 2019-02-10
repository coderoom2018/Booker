import React, { Component } from "react";
import BookList from "./BookList";

export default class BookListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="bookList_container">
          { this.props.books.map((book, id) => (
            <BookList book={book} key={id} />
          ))}
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
            #bookList_container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin-left: auto;
              margin-right: auto;
            }
          `}
        </style>
      </div>
    );
  }
}
