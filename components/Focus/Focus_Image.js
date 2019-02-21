import React, { Component } from "react";

export default class Focus_Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bookImg_container">
        <img className="bookimage" src={this.props.image} />
        
        <style jsx>
          {`
            .bookImg_container {
              width: 300px;
              height: 500px;
              margin-right: 10px;
              margin-top: 10px;
            }
            .bookimage {
              display: block;
              width: 100%;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            @media screen and (max-width: 992px) {
              .bookImg_container {
                width: 200px;
                height: 300px;
                margin-top: 5px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
