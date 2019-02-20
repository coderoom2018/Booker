import React, { Component } from "react";
import Link from "next/link";

export default class ReviewCard_Btn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn_container">
        <Link href={`/focus?user_id=${sessionStorage.getItem('user_id')}&book_id=${this.props.book_id}`}>
          <button className="focus_btn">수정하러 가기</button>
        </Link>
        <button
          className="delete_btn"
          onClick={(e) => {if (confirm("평가카드를 삭제 하시겠습니까?")) this.props._clickHandeler_deleteReviewCard()}}
        >삭제하기</button>

        <style jsx>
          {`
            .btn_container {
              margin-top: 5px;
              margin-left: auto;
              margin-right: 10px;
              margin-bottom: 5px;
            }
            .focus_btn,
            .delete_btn {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              background-color: orange;
              border: 2px solid orange;
              color: white;
              padding: 5px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              margin: 2px 2px;
              cursor: pointer;
              align: center;
            }
          `}
        </style>
      </div>
    )
  }
}
