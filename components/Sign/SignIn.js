import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      loginStatus: false
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
          alert("로그인 되었습니다")
          this.setState({ 
            user: data,
            loginStatus: true
          })
        }
      });
  }

  render () {
    console.log(this.state.user)

    return (
      <div id="signIn_content">
        <h2>Sign In</h2>
        {this.state.loginStatus ? (
          <div>
            <Link href={`/index/?id:${this.state.user.id}`}>
              <button>홈페이지로 이동</button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="input_email">
              email : <input className="email" placeholder="email" />
            </div>
            <div className="input_password">
              password : <input className="password" placeholder="password" />
            </div>

            <div className="btn_container">
              <button onClick={this._clickHandler_signIn}>로그인</button>
              <button>회원가입</button>
            </div>
          </div>
        )}

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #signIn_content {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 450px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 200px;
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
              margin-top: 20px;
            }
          `}
        </style>
      </div>
    )
  }
}
