import React, { Component } from 'react';
import Head from '../components/Header';
import BookInformation from '../components/Book/BookInformation';
import ReviewContainer from '../components/Book/ReviewContainer';
import fetch from 'isomorphic-unfetch';
import { inject, observer} from 'mobx-react';

@inject("signInStore")

export default class Book extends Component {
  static async getInitialProps(context) {
    const res = await fetch(`http://localhost:3000/book?book_id=${context.query.book_id}`);
    const data = await res.json();
    const book_id = context.query.book_id

    return { data, book_id }
  }
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      book_id: this.props.book_id
    }
  }

  _inputNewReview = (text, user_id, book_id) => {
    const url = "http://localhost:3000/review"

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ text, user_id, book_id })
    })
      .then(res => res.json())
      .then(data => {
        if (typeof data === "string") {
          alert(data)
         } else {
           this.setState({ data })
         }
      })
  }

  _deleteReview = (user_id, book_id) => {
    const url = "http://localhost:3000/review"

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify({user_id, book_id})
    })
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }

  _editMyScore = (score, user_id, book_id) => {
    const url = `http://localhost:3000/focus/myscore`;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({ score, user_id, book_id })
    })
      .then(res => res.json())
      .then(data => this.setState({ reviews_card: data }))
  };

  render() {
    let book = this.state.data
    let reviews = this.state.data[0].reviews

    return (
      <div> 
        <Head />
        <h1>Book Page</h1>
        <BookInformation 
          book={book} 
          reviews={reviews}
          _editMyScore={this._editMyScore}
        />
        <ReviewContainer
          reviews={reviews}
          book_id={this.state.book_id}
          _inputNewReview={this._inputNewReview}
          _deleteReview={this._deleteReview}
          _checkDelete={this._checkDelete}
        />

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
          `}
        </style>
      </div>
    )
  }
}
