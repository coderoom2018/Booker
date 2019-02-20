import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

@inject("signInStore")

@observer
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      signInStatus: this.props.signInStore.signInStatus
    }
  }

  _clickHandler_signIn = () => {
    const url = "http://localhost:3000/user/signin";

    const email = document.getElementsByClassName("email")[0].value;
    const password = document.getElementsByClassName("password")[0].value;

    const res = fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (typeof data === "string") {
        alert(data)
      } else {
        alert("로그인 되었습니다");
        this.setState({ user: data });
        this.props.signInStore._changeSignInStatus();
        this.props.signInStore._saveUserId(data.id);
        sessionStorage.setItem('user_id', data.id);
        Router.push(`/index?user_id=${data.id}`)
        }
    }); 
  }
    
  _clickHandler_changePageStatus = () => {
    this.props._changePageStatus()
  }

  render () {

    return (
      <div id="signIn_content">
        <h2>Sign In</h2>
          <div>
            <div className="input_email">
              email : <input className="email" placeholder="email" />
            </div>
            <div className="input_password">
              password : <input className="password" placeholder="password" />
            </div>

            <div className="btn_container">
              <button onClick={this._clickHandler_signIn}>로그인</button>
              <button onClick={this._clickHandler_changePageStatus}>회원가입</button>
            </div>
          </div>

        <style jsx>
          {`
            #signIn_content {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 450px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 200px;
              margin-bottom: ;
              background: whitesmoke;
            }
            input {
              font-size: 15px;
            }
            .input_email,
            .input_password {
              font-size: 20px;
              margin-top: 20px;
            }
            .btn_container {
              display: flex;
              justify-content: center; 
              margin-top: 20px;
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
    )
  }
}
