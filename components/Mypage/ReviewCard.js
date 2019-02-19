import React, { Component } from "react";
import Link from 'next/link';

export default class ReviewCard extends Component {
  constructor(props) {
    super(props);
  }

  _clickHandeler_deleteReviewCard = () => {
    const id = this.props.review_card.id;
    const user_id = this.props.review_card.user_id;
    const book_id = this.props.review_card.book_id;

    this.props._deleteReviewCard(id, user_id, book_id);
  };

  _clickHandeler_editReviewCard = () => {
    const book_id = this.props.review_card.book_id;
    const user_id = this.props.review_card.user_id;
    const text = document.getElementsByClassName(book_id)[0].value;

    this.props._editReviewCard(user_id, book_id, text);
  };

  render() {
    console.log("score: ", this.props.review_card.score)    
    return (
      <div id="reviewCard_content">
        <Link href={`/book?book_id=${this.props.review_card.book.id}`}>
          <div className="bookImg_container">
            <img className="bookImg" src={this.props.review_card.book.image} />
          </div>
        </Link>
        <div id="book_information">
          <div className="book_title">{this.props.review_card.book.title}</div>
          <div className="book_createdAt">
            {this.props.review_card.createdAt}
          </div>
          <textarea 
            className={`${this.props.review_card.book_id} book_review`} 
            readOnly="readonly"
            defaultValue={this.props.review_card.text}
          />
          <div className="book_rate">
            <div>{this.props.review_card.book.averageScore}</div>
            <div className="myScore">{this.props.review_card.score}</div>
          </div>
          <div className="btn_container">
            <Link href={`/focus?user_id=${sessionStorage.getItem('user_id')}&book_id=${this.props.review_card.book_id}`}>
              <button className="focus_btn">
                수정하러 가기
              </button>
            </Link>
            <button
              className="delete_btn"
              onClick={(e) => {
                if (confirm("평가카드를 삭제 하시겠습니까?")) 
                this._clickHandeler_deleteReviewCard()
              }}
            >
              삭제하기
            </button>
          </div>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #reviewCard_content {
              display: flex;
              width: 70%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 20px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            .bookImg_container {
              width: 250px;
              margin-left: auto;
              margin-right: auto;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            .bookImg {
              width: 100%;
            }
            #book_information {
              display: flex;
              flex-direction: column;
              width: 75%;
              margin-right: auto;
              margin-left: auto;
            }
            .book_title {
              font-size: 30px;
              text-align: center;
              margin-top: 10px;
            }
            .book_createdAt {
              font-size: 15px;
              text-align: right;
              margin-top: 5px;
            }
            .book_review {
              height: 200px;
              font-size: 20px;
              margin-top: 5px;
            }
            .book_rate {
              font-size: 30px;
              margin-top: 10px;
            }
            .btn_container {
              margin-top: 5px;
              margin-left: auto;
              margin-right: 10px;
              margin-bottom: 5px;
            }
          `}
        </style>
      </div>
    );
  }
}
