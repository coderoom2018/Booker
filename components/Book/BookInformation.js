import React, { Component } from "react";

export default class BookInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myScore: this.props.book[0].reviews.length > 0  ? this.props.book[0].reviews[0].score : 0,
    }
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

    // console.log("score: ", score);
    // console.log("user_id: ", user_id);
    // console.log("book_id: ", book_id)

    this.props._editMyScore(score, user_id, book_id)
    alert("평가점수가 수정되었습니다")
  }

  _clickHandeler_addBookmark = () => {
    const url = `http://localhost:3000/bookmark`;
    const user_id = sessionStorage.getItem('user_id')
    const book_id = this.props.book[0].id;

    console.log("user_id: ", user_id);
    console.log("book_id: ", book_id);

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

    console.log("user_id: ", user_id);
    console.log("book_id: ", book_id);

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
      <div id="content">
        <div className="bookImg_container">
          <img
            className="bookimage"
            src="http://covers.openlibrary.org/b/id/240716.jpg"
          />
        </div>

        <div id="book_information">
          <div className="book_title">{book.title}</div>
          <div className="book_publishedAt">{book.publishedAt}</div>
          <div className="bookDescription_container">
            <textarea 
              className="book_description"
              readOnly="readonly"
              defaultValue={book.description}
            />
          </div>
          <div className="book_rate">
            <div>평균점수: {book.averageScore}</div>
            <div>
              내가 평가한 점수: 
              <button className="myScore_btn" onClick={this._clickHandeler_decreaseMyscore}>-</button>
              {this.state.myScore ? this.state.myScore : 0}
              <button className="myScore_btn" onClick={this._clickHandeler_increaseMyscore}>+</button>
              <button 
                className="submit_btn" 
                onClick={(e) => {
                  if (confirm("평가점수를 변경 하시겠습니까?")) this._clickHandeler_submitMyscore()
                }}>평가하기</button>
            </div>
          </div>
          <div className="bookmarkBtn_conatainer">
           {/* {
             this.state.bookmarkStatus === false ? ( */}
               <button onClick={(e) => { if (confirm("북마크에 추가 하시겠습니까?")) this._clickHandeler_addBookmark()}}>북마크 추가</button>
             {/* ) : ( */}
               <button onClick={(e) => { if (confirm("북마크를 삭제 하기겠습니까?")) this._clickHandeler_deleteBookmark()}}>북마크 삭제</button>
             {/* ) */}
           {/* } */}
          </div>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #content {
              display: flex;
              justify-content: center;
              background: whiteSmoke;
            }
            .bookImg_container {
              width: 300px;
              height: 500px;
              margin-right: 3%;
            }
            .bookimage {
              display: block;
              width: 100%;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            #book_information {
              display: flex;
              flex-direction: column;
              width: 60%;
            }
            .book_title {
              font-size: 50px;
              text-align: center;
              margin-bottom: 10px;
            }
            .book_publishedAt {
              text-align: right;
              margin-bottom: 10px;
            }
            .bookDescription_container {
              height: 300px;
              font-size: 18px;
              margin-bottom: 10px;
            }
            .book_description {
              width: 100%;
              height: 100%;
              font-size: 20px;
            }
            .book_rate {
              display: flex;
              flex-direction: column;
              font-size: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}
