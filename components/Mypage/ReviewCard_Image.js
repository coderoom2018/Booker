import React, { Component } from "react";
import Link from 'next/link';


export default class ReviewCard_Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link href={`/book?book_id=${this.props.book_id}`}>
          <div className="bookImg_container">
            <img className="bookImg" src={this.props.image} />
          </div>
        </Link>
        
        <style jsx>
          {`    
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
          `}
        </style>
      </div>

    )
  }
}
