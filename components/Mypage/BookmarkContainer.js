import React, { Component } from "react";
import Bookmark from "./Bookmark";

export default class BookmarkContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="bookmark_container">
          {this.props.bookmarks.map((bookmark, id) => (
            <Bookmark 
              bookmark={bookmark} 
              key={id}
              _deleteBookmark={this.props._deleteBookmark} 
            />
          ))}
        </div>

        <style jsx>
          {`
            #bookmark_container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              width: 70%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 20px;
              background: whitesmoke;
            }
            @media screen and (max-width: 992px) {
              #bookmark_container {
                width: 99%;
                justify-content: space-around;

              }
            }
          `}
        </style>
      </div>
    );
  }
}
