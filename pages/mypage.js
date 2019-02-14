import React, { Component } from "react";
import Head from "../components/Header";
import ReviewCardContainer from "../components/Mypage/ReviewCardContainer";
import BookmarkContainer from "../components/Mypage/BookmarkContainer";
import fetch from "isomorphic-unfetch";

export default class Mypage extends Component {
  static async getInitialProps() {
    const res = await fetch(`http://localhost:3000/mypage?user_id=${1}`);
    const reviews_card = await res.json();

    return { reviews_card };
  }

  constructor(props) {
    super(props);

    this.state = {
      reviews_card: this.props.reviews_card,
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
      .then(data => {
        this.setState({ reviews_card: data.newReviews });
      });
  };

  _editReviewCard = (user_id, book_id, text) => {
    const url = `http://localhost:3000/review?user_id=${user_id}&book_id=${book_id}`;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ reviews_card: data.newReviews });
      });
  };

  _getBookmarksData = () => {
    const url = `http://localhost:3000/bookmark?user_id=${1}`;

    const res = fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ bookmarks: data });
      });
  };

  _deleteBookmark = id => {
    const url = `http://localhost:3000/bookmark?id=${id}`;

    const res = fetch(url, {
      method: "delete"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ bookmarks: data.newBookmarks });
      });
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
    console.log(reviews_card)

    return (
      <div>
        <Head />
        <h1>Mypage</h1>
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
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            .tagBtn_container {
            }
            #mainContent {
              background: whiteSmoke;
            }
          `}
        </style>
      </div>
    );
  }
}
