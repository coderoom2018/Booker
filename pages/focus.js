import React, { Component } from 'react';
import Head from '../components/Header';
import BookInformation from '../components/Focus/BookInformation';
import FocusReview from '../components/Focus/FocusReview';
import fetch from 'isomorphic-unfetch';

export default class Focus extends Component {
  static async getInitialProps(context) {
    const url = `http://localhost:3000/focus?user_id=${context.query.user_id}&book_id=${context.query.book_id}`
    const res = await fetch(url);
    const data = await res.json();

    return { data }
  }
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      newReview: []
    }
  }

  _editReview = (user_id, book_id, text) => {
    const url = `http://localhost:3000/focus?user_id=${user_id}&book_id=${book_id}`;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(data => this.setState({ data: data.review }));
  };

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
    console.log('data: ', this.state.data)

    return (
      <div id="focus_content"> 
        <Head />
        <div id="pageTitle">
          Focus and Edit Page
        </div>
        <BookInformation 
          data={this.state.data} 
          _editMyScore={this._editMyScore}
        />
        <FocusReview 
          data={this.state.data} 
          _editReview={this._editReview}
        />

        <style jsx>
          {`
            #focus_content {
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
