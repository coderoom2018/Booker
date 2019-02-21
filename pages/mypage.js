import React, { Component } from "react";
import Head from "../components/Header";
import ReviewCardContainer from "../components/Mypage/ReviewCardContainer";
import BookmarkContainer from "../components/Mypage/BookmarkContainer";
import fetch from "isomorphic-unfetch";
import { inject, observer } from 'mobx-react';

@inject("mypageStore")

@observer
export default class Mypage extends Component {
  static async getInitialProps(context) {
    const { user_id } = context.query
    
    const res = await fetch(`http://localhost:3000/mypage?user_id=${user_id}`);
    const reviews_card = await res.json();

    return { reviews_card, user_id };
  }

  constructor(props) {
    super(props);

    this.state = {
      reviews_card: this.props.reviews_card,
      user_id: this.props.user_id,
      bookmarks: [],
      tagStatus: "reviewCards"
    };
  }

  _deleteReviewCard = (id, user_id, book_id) => {
    const url = `http://localhost:3000/mypage`;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "delete",
      body: JSON.stringify({ id, user_id, book_id })
    })
    .then(res => res.json())
    .then(data => this.setState({ reviews_card: data.newReviews }));
  };

  _editReviewCard = (user_id, book_id, text) => {
    const url = `http://localhost:3000/review?user_id=${user_id}&book_id=${book_id}`;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(data => this.setState({ reviews_card: data.newReviews }));
  };

  _getBookmarksData = () => {
    const url = `http://localhost:3000/bookmark?user_id=${this.state.user_id}`;

    const res = fetch(url, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => this.setState({ bookmarks: data }));
  };

  _deleteBookmark = book_id => {
    const url = `http://localhost:3000/bookmark`;
    const user_id = this.state.user_id;
   
    console.log('user_id: ', user_id)
    console.log("book_id: ", book_id)

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify({ user_id, book_id })
    })
    .then(res => res.json())
    .then(data => {
      console.log("data: ",data)
      this.setState({ bookmarks: data })});
  };

  _clickHandler_changeReviewsTag = () => {
    if (this.state.tagStatus === "reviewCards") {
      this.setState({ tagStatus: "bookmarks" });
    } 
  };

  _clickHandler_changeBookmarksTag = () => {
    if (this.state.tagStatus === "bookmarks") {
      this.setState({ tagStatus: "reviewCards" });
    } 
  };

  render() {
    let reviews_card = this.state.reviews_card;

    return (
      <div id="mypage_content">
        <Head />
        <div id="pageTitle">
          Mypage
        </div>
        <div className="tagBtn_container">
          <button
            className="reviewCards_btn"
            onClick={this._clickHandler_changeBookmarksTag}
          >
            리뷰카드
          </button>
          <button
            className="bookmarks_btn"
            onClick={() => {
              this._clickHandler_changeReviewsTag();
              this._getBookmarksData();
            }}
          >
            읽고싶어요
          </button>
        </div>
          <div id="mainContent">
            {this.state.tagStatus === "reviewCards" ? (
              <ReviewCardContainer
                reviews_card={reviews_card}
                _deleteReviewCard={this._deleteReviewCard}
                _editReviewCard={this._editReviewCard}
              />
            ) : (
              <BookmarkContainer
                bookmarks={this.state.bookmarks}
                _deleteBookmark={this._deleteBookmark}
              />
            )}
          </div>
        
        <style jsx>
          {`
            .tagBtn_container {
              
            }
            #mypage_content {
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
            #mainContent {
              background: #262626;
            }
            .reviewCards_btn,
            .bookmarks_btn {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              background-color: orange;
              border: 2px solid whitesmoke;
              color: white;
              padding: 10px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              margin: 4px 2px;
              cursor: pointer;
              align: center;
            }

            @media screen and (max-width: 992px) {
              #pageTitle {
                font-size: 20px;
                padding: 5px;
              }
              .reviewCards_btn,
              .bookmarks_btn {
                border: 1px solid whitesmoke;
                padding: 5px;
                font-size: 15px;
                margin: 4px 2px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
