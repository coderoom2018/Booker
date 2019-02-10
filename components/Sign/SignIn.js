import React, { Component } from 'react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="signIn">
        <h2>Sign In</h2>
        <div className="input_userName">
          <h3>userName</h3>
          <input placeholder="username"></input>
        </div>
        <div className="input_password">
          <h3>password</h3>
          <input placeholder="password"></input>
        </div>

        <div className="btn_container">
          <button>로그인</button>
          <button>회원가입</button>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 1px black;
            }
          `}
        </style>
      </div>
    )
  }
}
