import React, { Component } from "react";
import Head from "../components/Header";
import ReviewCardContainer from "../components/Mypage/ReviewCardContainer";
import BookmarkContainer from "../components/Mypage/BookmarkContainer";

export default class Mypage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews_card: [{id:0, bookImage: 'bookimage1', title: 'title1', review: 'review1', rate_average: 3, rate_my: 4}, {id:1, bookImage: 'bookimage2', title: 'title2', review: 'review2', rate_average: 4, rate_my: 5}],
      bookmarks: [{id:0, bookImage: 'bookimage1', title: 'title1'}, {id:1, bookImage: 'bookimage2', title: 'title2'}],
    }
  }

  render() {
    return (
      <div>
        <Head />
        <h1>Mypage</h1>
        <div id="mainContent">
          <ReviewCardContainer reviews_card={this.state.reviews_card}/>
          <BookmarkContainer bookmarks={this.state.bookmarks}/>
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
