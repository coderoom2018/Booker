import React, { Component } from "react";

export default class InputReview extends Component {
  constructor(props) {
    super(props);
  }

  _inputNewReview = () => {
    var newReview = document.getElementsByClassName("input_text")[0].value;

    this.props._inputNewReview(newReview);
  };

  render() {
    return (
      <div id="content">
        <div>
          <textarea className="input_text" placeholder="input review" />
        </div>
        <div className="button_container">
          <button className="submit_btn" onClick={this._inputNewReview}>등록</button>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
            #content {
              display: flex;
              flex-direction: column;

              width: 70%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .input_text {
              width: 100%;
              height: 100px;
              font-size: 20px;
            }
            .submit_btn {
              font-size: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}
