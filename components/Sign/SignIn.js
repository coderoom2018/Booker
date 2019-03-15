import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';
import Modal from 'react-responsive-modal';

@inject("signInStore")

@observer
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      signInStatus: this.props.signInStore.signInStatus,
      successModal: false,
      failModal: false,
      failMessage: ""
    }
  }

  _openSuccessModal = () => {
    this.setState({ successModal: true });
  };

  _closeSuccessModal = () => {
    this.setState({ successModal: false });
    const user_id = sessionStorage.getItem("user_id")

    Router.push(`/index?user_id=${user_id}`)
  };

  _openFailModal = (data) => {
    this.setState({ 
      failModal: true,
      failMessage: data,
    });
  };

  _closeFailModal = () => {
    this.setState({ failModal: false });
  };

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
        this._openFailModal(data)
      } else {
        this._openSuccessModal()
        this.setState({ user: data });
        // this.props.signInStore._changeSignInStatus();
        // this.props.signInStore._saveUserId(data.id);
        sessionStorage.setItem('user_id', data.id);
      }
    }); 
  }
    
  _clickHandler_changePageStatus = () => {
    this.props._changePageStatus()
  }

  render () {

    return (
      <div id="signIn_content">
        <div id="subTitle">Sign In</div>

        <Modal open={this.state.successModal} onClose={this._closeSuccessModal} center>
          <h3>로그인 되었습니다!</h3>
          <h3>홈페이지로 이동합니다!</h3>
        </Modal>

        <Modal open={this.state.failModal} onClose={this._closeFailModal} center>
          <h3>{this.state.failMessage}!</h3>
        </Modal>

          <div>
            <div className="input_email">
              email : <input className="email" placeholder="email" />
            </div>
            <div className="input_password">
              password : <input className="password" placeholder="password" type="password"/>
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

            @media screen and (max-width: 992px) {
              #signIn_content {
                width: 300px;
                margin-top: 100px;
              }
              #subTitle {
                font-size: 20px;
                padding: 5px;
              }
              input {
                font-size: 12px;
              }
              .input_email,
              .input_password {
                font-size: 15px;
                margin-top: 10px;
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
    )
  }
}
