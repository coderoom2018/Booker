import React, { Component } from "react";
import Book_Information from "./Book_Information";
import Book_Rate from "./Book_Rate";
import Book_BookmarkBtn from "./Book_BookmarkBtn";
import Book_Image from "./Book_Image";

export default class BookInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myScore: 0
    }
  }

  componentDidMount = () => {
    this._searchMyScore()
  }

  _searchMyScore = () => {
    const reviews = this.props.book[0].reviews;
    const user_id = Number(this.props.user_id)
    let myScore = 0;

    
    for (var i = 0; i < reviews.length; i++) {
      if (reviews[i].user_id === user_id) {
        myScore = reviews[i].score
      }
    }

    this.setState({myScore: myScore})
    return myScore
  }

  _clickHandeler_decreaseMyscore = () => {
    if (this.state.myScore > 0) {
      this.setState({
        myScore: this.state.myScore - 1
      })
    }
  }

  _clickHandeler_increaseMyscore = () => {
    if (this.state.myScore < 10) {
      this.setState({
        myScore: this.state.myScore + 1
      })
    }
  }

  _clickHandeler_submitMyscore = () => {
    const score = this.state.myScore;
    const user_id = sessionStorage.getItem('user_id')
    const book_id = this.props.book[0].id;

    this.props._editMyScore(score, user_id, book_id)
    alert("평가점수가 수정되었습니다")
  }

  _clickHandeler_addBookmark = () => {
    const url = `http://localhost:3000/bookmark`;
    const user_id = sessionStorage.getItem('user_id')
    const book_id = this.props.book[0].id;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ user_id, book_id })
    })
    .then(res => res.json())
    .then(data => {
      if (typeof data === "string") {
        alert(data)
      } else {
        alert("북마크가 추가 되었습니다")
      }
    })
  }

  _clickHandeler_deleteBookmark = () => {
    const url = `http://localhost:3000/bookmark`;
    const user_id = sessionStorage.getItem('user_id')
    const book_id = this.props.book[0].id;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify({ user_id, book_id })
    })
    .then(res => res.json())
    .then(data => {
      if (typeof data === "string") {
        alert(data)
      } else {
        alert("북마크가 삭제 되었습니다")
      }
    })
  }
  
  render() {
    let book = this.props.book[0]
    
    return (
      <div id="bookInformation_content">
        <Book_Image />

        <div id="book_information">
          <Book_Information 
            title={book.title}
            publishedAt={book.publishedAt}
            description={book.description}
          />
          <Book_Rate 
            averageScore={book.averageScore}
            myScore={this.state.myScore}
            _clickHandeler_decreaseMyscore={this._clickHandeler_decreaseMyscore}
            _clickHandeler_increaseMyscore={this._clickHandeler_increaseMyscore}
            _clickHandeler_submitMyscore={this._clickHandeler_submitMyscore}
          />
          <Book_BookmarkBtn
            _clickHandeler_addBookmark={this._clickHandeler_addBookmark}
            _clickHandeler_deleteBookmark={this._clickHandeler_deleteBookmark}
          />
        </div>

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            textarea {
              resize: none;
            }
            #bookInformation_content {
              display: flex;
              justify-content: center;
              background: #262626;
            }
            #book_information {
              display: flex;
              flex-direction: column;
              width: 60%;
              background: whitesmoke;
            }
          `}
        </style>
      </div>
    );
  }
}
