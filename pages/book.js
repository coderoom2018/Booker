import React, { Component } from 'react';
import Head from '../components/Header';
import BookInformation from '../components/Book/BookInformation';
import ReviewContainer from '../components/Book/ReviewContainer';
import fetch from 'isomorphic-unfetch';
import { inject, observer} from 'mobx-react';
import Modal from 'react-responsive-modal';

@inject("signInStore")

export default class Book extends Component {
  static async getInitialProps(context) {
    const res = await fetch(`http://localhost:3000/book?user_id=${context.query.user_id}&book_id=${context.query.book_id}`);
    const data = await res.json();
    const book_id = context.query.book_id;
    const user_id = context.query.user_id;

    return { data, book_id, user_id }
  }
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      book_id: this.props.book_id,
      user_id: this.props.user_id,
      alertModal: false,
      alertMessage: '',
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
        this._openAlertModal(data);
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

  _openAlertModal = (alertMessage) => {
    this.setState({ 
      alertModal: true, 
      alertMessage: alertMessage,
    });
  }

  _closeAlertModal = () => {
    this.setState({ alertModal: false });
  }

  render() {
    let book = this.state.data
    let reviews = this.state.data[0].reviews

    return (
      <div id="book_content">
        <Modal open={this.state.alertModal} onClose={this._closeAlertModal}>
          <br />
          <h3>{this.state.alertMessage}</h3>
        </Modal>

        <Head />
        <div id="pageTitle">
          Book Page
        </div>
        <BookInformation 
          book={book} 
          reviews={reviews}
          user_id={this.state.user_id}
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
              margin: 0;
              padding: 0;
            }
            #book_content {
              background: #262626;
            }
            #pageTitle {
              color: whiteSmoke;
              font-weight: bold;
              font-size: 30px;
              text-align: center;
              vertical-align: middle;
              padding: 10px;
            }

            @media screen and (max-width: 992px) {
              #pageTitle {
                font-size: 20px;
                padding: 5px;
              }
            }

          `}
        </style>
      </div>
    )
  }
}
