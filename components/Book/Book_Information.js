import React, { Component } from 'react';

export default class Book_Information extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div id="information_content">
        <div className="book_title">{this.props.title}</div>
        <div className="book_publishedAt">{this.props.publishedAt}</div>
        <div className="bookDescription_container">
          <textarea 
            className="book_description"
            readOnly="readonly"
            defaultValue={this.props.description}
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
            .book_title {
              font-size: 50px;
              font-weight: bold;
              color: whitesmoke;
              text-align: center;
              margin-bottom: 10px;
              background: orange;
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
              // background: #262626;
              // color: whitesmoke;
            }
          `}
        </style>
      </div>
    )
  } 
    
}