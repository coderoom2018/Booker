import React, { Component } from "react";
import Header from "../components/Header";
import BookListContainer from "../components/Index/BookListContainer";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_steady: [
        { id: 0, book_id: 0, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Steady_title01" },
        { id: 1, book_id: 2, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Steady_title02" },
        { id: 2, book_id: 3, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Steady_title03" },
        { id: 3, book_id: 4, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Steady_title04" }
      ],
      book_month: [
        { id: 0, book_id: 0, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Month_title01" },
        { id: 1, book_id: 2, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Month_title02" },
        { id: 2, book_id: 3, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Month_title03" },
        { id: 3, book_id: 4, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Month_title04" }
      ],
      book_new: [
        { id: 0, book_id: 0, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "New_title01" },
        { id: 1, book_id: 2, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "New_title02" },
        { id: 2, book_id: 3, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "New_title03" },
        { id: 3, book_id: 4, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "New_title04" }
      ],
      book_recommend: [
        { id: 0, book_id: 0, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Recommend_title01" },
        { id: 1, book_id: 2, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Recommend_title02" },
        { id: 2, book_id: 3, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Recommend_title03" },
        { id: 3, book_id: 4, image: 'http://covers.openlibrary.org/b/id/240716.jpg', title: "Recommend_title04" }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Index Page</h1>

        <div id="bookListContainer_container">
          <div>
            <h2>Steady Best</h2>
            <BookListContainer books={this.state.book_steady} />
          </div>

          <div>
            <h2>Month Best</h2>
            <BookListContainer books={this.state.book_month} />
          </div>

          <div>
            <h2>New</h2>
            <BookListContainer books={this.state.book_new} />
          </div>

          <div>
            <h2>Recommend</h2>
            <BookListContainer books={this.state.book_recommend} />
          </div>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
          `}
        </style>
      </div>
    );
  }
}
