import React, { Component } from 'react';
import Head from '../components/Header';
import BookInformation from '../components/Focus/BookInformation';
import FocusReview from '../components/Focus/FocusReview';
import fetch from 'isomorphic-unfetch';

export default class Focus extends Component {
  static async getInitialProps(context) {
    const url = `http://localhost:3000/focus?user_id=${1}&book_id=${context.query.book_id}`
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

  render() {
    // console.log(this.state.data)
    // console.log(this.state.data)

    return (
      <div> 
        <Head />
        <h1>Focus and Edit Page</h1>
        <BookInformation data={this.state.data} />
        <FocusReview 
          data={this.state.data} 
          _editReview={this._editReview}
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
