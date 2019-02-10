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
            <Bookmark bookmark={bookmark} key={id} />
          ))}
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
            #bookmark_container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              width: 70%;
              margin-left: auto;
              margin-right: auto;
            }
          `}
        </style>
      </div>
    );
  }
}
