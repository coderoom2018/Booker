import React, { Component } from "react";

export default class ReveiwCard_Information extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="book_title">{this.props.title}</div>
        <div className="book_createdAt">{this.props.createdAt}</div>
        <textarea 
          className={`${this.props.book_id} book_review`} 
          readOnly="readonly"
          defaultValue={this.props.text}
        />

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            textarea {
              resize: none;
              width: 100%;
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

            @media screen and (max-width: 992px) {
              .book_title {
                font-size: 20px;
                margin-top: 5px;
              }
              .book_createdAt {
                font-size: 12px;
                margin-top: 2px;
              }
              .book_review {
                height: 200px;
                font-size: 15px;
                margin-top: 2px;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
