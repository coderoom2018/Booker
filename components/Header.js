import React, { Component } from 'react';
import Head from "next/head";
import Link from "next/link";
import Router from 'next/router';
import Modal from "react-responsive-modal";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: null,
      confirmModal: false,
      alertModal: false,
    }
  }

  componentDidMount = () => {
    this.setState({user_id: sessionStorage.getItem('user_id')})
  }

  _clickHandler_logOut = () => {
    sessionStorage.removeItem('user_id');
    this.setState({ user_id: 0 });
    this._openAlertModal();
    Router.push('/index');
  }

  _openConfirmModal = () => {
    this.setState({ confirmModal: true });
  }

  _closeConfirmModal = () => {
    this.setState({ confirmModal: false });
  }

  _openAlertModal = () => {
    this.setState({ alertModal: true });
  }

  _closeAlertModal = () => {
    this.setState({ alertModal: false });
  } 

  render () {

    return (
      <div>
        <Modal open={this.state.confirmModal} onClose={this._closeConfirmModal}>
          <h3>로그아웃 하시겠습니까?</h3>
          <div className="btn_container">
            <button 
              className="btn" 
              onClick={() => {
                this._clickHandler_logOut()
                this._closeConfirmModal()
            }}>로그아웃</button>
            <button className="btn">취소</button>
          </div>
        </Modal>

        <Modal open={this.state.alertModal} onClose={this._closeAlertModal}>
          <h3>홈페이지로 이동합니다!</h3>
        </Modal>

        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
          { this.state.user_id === null ? (
            <div id="navbar">
              <div className="navbar_btn">
                <Link href="/index"><a>Books</a></Link>
              </div>
              <div className="navbar_btn">
                <Link href="/sign"><a>Sign</a></Link>
              </div>
            </div>
          ) : (
            <div id="navbar">
              <div className="navbar_btn">
                <Link href={`/index?user_id=${this.state.user_id}`}><a>Books</a></Link>
              </div>
              <div className="navbar_btn">
                <Link href={`/mypage?user_id=${this.state.user_id}`}><a>Mypage</a></Link>
              </div>
              <div className="navbar_btn" onClick={this._openConfirmModal}>
                <span>LogOut</span>
              </div>
            </div>



          )}
    
        <style jsx>
          {`
            a {
              text-decoration: none;
              color: white;
            }
            #navbar {
              display: flex;
              background: orange;
            }
            .navbar_btn {
              background-color: orange;
              border: 2px solid orange;
              color: white;
              padding: 10px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              margin: 4px 2px;
              cursor: pointer;
              align: center;
            }
            .btn_container {
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .btn {
              background-color: orange;
              border: 2px solid orange;
              color: white;
              padding: 10px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              margin: 4px 2px;
              cursor: pointer;
              align: center;
              width: 100px;
            }
            .btn:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }

            @media screen and (max-width: 992px) {
              .navbar_btn {
                border: 0.1px solid orange;
                padding: 0px;
                font-size: 12px;
                font-weight: bold;
                margin: 2px;
                cursor: pointer;
                align: center;
              }
              .btn_container {
                display: flex;
                justify-content: center;
              }
              .btn {
                border: 0.1px solid orange;
                padding: 2px;
                font-size: 15px;
                margin: 2px 5px;
                width: 80px;
              }
            }
          `}
        </style>
      </div>






      // <div>
      //   <Head>
      //     <title>My page title</title>
      //     <meta
      //       name="viewport"
      //       content="initial-scale=1.0, width=device-width"
      //       key="viewport"
      //     />
      //   </Head>
      //   <Head>
      //     <meta
      //       name="viewport"
      //       content="initial-scale=1.2, width=device-width"
      //       key="viewport"
      //     />
      //   </Head>
      //     { this.state.user_id === null ? (
      //       <div id="navbar">
      //         <div className="navbar_btn">
      //           <Link href="/index"><a>Books</a></Link>
      //         </div>
      //         <div className="navbar_btn">
      //           <Link href="/sign"><a>Sign</a></Link>
      //         </div>
      //       </div>
      //     ) : (
      //       <div id="navbar">
      //         <div className="navbar_btn">
      //           <Link href={`/index?user_id=${this.state.user_id}`}><a>Books</a></Link>
      //         </div>
      //         <div className="navbar_btn">
      //           <Link href={`/mypage?user_id=${this.state.user_id}`}><a>Mypage</a></Link>
      //         </div>
      //         <div onClick={(e) => {if (confirm("로그아웃 하시겠습니까?")) this._clickHandler_logOut()}}>
      //           LogOut
      //         </div>
      //       </div>



      //     )}
    
      //   <style jsx>
      //     {`
      //       * {
      //         box-shadow: 0px 0px 0px 0.1px black;
      //       }
      //       #navbar {
      //         display: flex;
      //       }
      //       .navbar_btn {
      //         margin-left: 10px;
      //         padding: 10px;
      //         font-size: 20px;
      //       }
      //     `}
      //   </style>
      // </div>
    )
  }
 
}
