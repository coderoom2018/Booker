import React, { Component } from "react";

export default class Bookmark extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="bookmark_content">
        
          <div className="image_container">
            <img className="book_image" src="http://covers.openlibrary.org/b/id/240716.jpg" />
          </div>
          <div className="book_title">Book_Title</div>
          <div className="btn_container"> 
            <button className="delete_btn">삭제</button>
          </div>
       
        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
            #bookmark_content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 40px;
              width: 200px;
              height: 380px;
            }
            .image_container {
              background: yellow;
              width: 200px;
              height: 320px;
            }
            .book_image {
              width: 100%;
            }
            .book_title {
              text-align: center;
              margin-top: 10px;
              font-size: 20px;
            }
            .delete_btn {
              font-size: 20px;
              margin-top: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
