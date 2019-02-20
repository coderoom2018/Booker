import React, { Component } from "react";
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _clickHandler_signUp = () => {
    const url = "http://localhost:3000/user/signup";

    const username = document.getElementsByClassName("username")[0].value;
    const email_front = document.getElementsByClassName("email_front")[0].value;
    const email_back = document.getElementsByClassName("email_back")[0].value;
    const password = document.getElementsByClassName("password")[0].value;
    const confirm_password = document.getElementsByClassName("confirm_password")[0].value;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        username,
        email_front,
        email_back,
        password,
        confirm_password
      })
    })
    .then(res => res.json())
    .then(data => alert(data))
    .then(Router.push('/'))
  };

  render() {
    return (
      <div id="signUp_content">
        <div id="subTitle">
          <h2>Sign Up</h2>
        </div>
        <div className="input_username">
          username : <input className="username" placeholder="username" />
        </div>

        <div className="input_email">
          email : <input className="email_front" placeholder="email" />
          @
          <input className="email_back" placeholder="email" />
        </div>

        <div className="input_password">
          password : <input className="password" placeholder="password" />
        </div>
        <div className="input_password">
          confirm password :{" "}
          <input className="confirm_password" placeholder="confirm password" />
        </div>

        <div className="btn_container">
          <button onClick={this._clickHandler_signUp}>회원가입</button>
        </div>

        <style jsx>
          {`
            
            input {
              font-size: 15px;
            }
            #signUp_content {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 450px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 200px;
              background: whitesmoke;
              padding: 10px;
            }
            #subTitle {
            }
            .password_container {
              display: flex;
              flex-direction: column;
            }
            .input_username,
            .input_email,
            .input_password {
              width: 100%;
              content-align: center;
              font-size: 20px;
              margin-top: 20px;
            }
            .btn_container {
              margin-top: 20px;
              display: flex;
            }
            button {
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
          `}
        </style>
      </div>
    );
  }
}
