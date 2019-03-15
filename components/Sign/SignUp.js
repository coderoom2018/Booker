import React, { Component } from "react";
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import Modal from 'react-responsive-modal';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };  
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
    Router.push('/')
  };

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
    .then(this.onOpenModal())
  };

  render() {
    const open = this.state.open;

    return (
      <div id="signUp_content">
        <Modal className="modal" open={open} onClose={this.onCloseModal} center>
          <br />
          <h3>가입이 완료되었습니다!</h3>
          <h3>홈페이지로 이동합니다!</h3>
          <br/>
        </Modal>

        <div id="subTitle">
          Sign Up
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
          password : <input className="password" placeholder="password" type="password"/>
        </div>
        <div className="input_password">
          confirm password :{" "}
          <input className="confirm_password" placeholder="confirm password" type="password"/>
        </div>

        <div className="btn_container">
          <button onClick={this._clickHandler_signUp}>회원가입</button>
        </div>

        <style jsx>
          {`
            .modal_text {
              color: red;
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
              color: black;
              font-weight: bold;
              font-size: 30px;
              text-align: center;
              vertical-align: middle;
              padding: 10px;
            }
            input {
              font-size: 15px;
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

            @media screen and (max-width: 992px) {
              #signUp_content {
                width: 400px;
                margin-top: 100px;
                padding: 5px;
              }
              #subTitle {
                font-size: 20px;
                padding: 5px;
              }
              input {
                font-size: 12px;
              }
              .input_username,
              .input_email,
              .input_password {
                font-size: 15px;
                margin-top: 15px;
              }
              button {
                border: 0.1px solid orange;
                padding: 3px;
                font-size: 15px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
