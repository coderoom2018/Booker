import React, { Component } from 'react';

export default class Book_BookmarkBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bookmarkBtn_conatainer">
        <button 
          className="bookmark_btn add_btn" 
          onClick={(e) => { 
            if (!sessionStorage.getItem("user_id")) {
              alert("로그인을 해주세요")
            } else {
              if (confirm("북마크에 추가 하시겠습니까?")) this.props._clickHandeler_addBookmark()}}
            }
        >북마크 추가</button>
        <button 
          className="bookmark_btn delete_btn" 
          onClick={(e) => { 
            if (!sessionStorage.getItem("user_id")) {
              alert("로그인을 해주세요")
            } else {
              if (confirm("북마크를 삭제 하기겠습니까?")) this.props._clickHandeler_deleteBookmark()}}
            }
        >북마크 삭제</button>

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            textarea {
              resize: none;
            }
            .myScore_btn, 
            .submit_btn {
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
            .bookmarkBtn_conatainer {
              display: flex;
              justify-content: center;
              margin-bottom: 10px;
            }
            .bookmark_btn {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              background-color: orange;
              border: 2px solid orange;
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
            .add_btn {
              margin-right: 20px;
            }
          `}
        </style>
      </div>
    )
  }
}
