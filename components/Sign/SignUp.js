import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="signUp">
        <h2>Sign Up</h2>
        <div className="input_userName">
          <h3>userName</h3>
          <input placeholder="username"></input>
        </div>
        <div className="input_password">
          <h3>password</h3>
          <input placeholder="password"></input>
          <h3>re-password</h3>
          <input placeholder="re-password"></input>
        </div>
        <div className="input_phoneNumber">
          <h3>phoneNumber</h3>
          <input placeholder="phoneNumber"></input>
        </div>
        <div className="btn_container">
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
