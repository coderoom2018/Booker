import React, { Component } from 'react';
import Head from "next/head";
import Link from "next/link";
import Router from 'next/router';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: null
    }
  }

  componentDidMount = () => {
    this.setState({user_id: sessionStorage.getItem('user_id')})
    console.log("sessionStorage: ", sessionStorage.getItem('user_id'))
  }

  _clickHandler_logOut = () => {
    sessionStorage.removeItem('user_id');
    this.setState({user_id: 0})
    alert("홈페이지로 이동합니다")
    Router.push('/index');
  }

  render () {
    console.log('books page user_id: ', this.state.user_id)

    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.2, width=device-width"
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
              <div className="navbar_btn" onClick={(e) => {if (confirm("로그아웃 하시겠습니까?")) this._clickHandler_logOut()}}>
                <span>LogOut</span>
              </div>
            </div>



          )}
    
        <style jsx>
          {`
            * {
              // box-shadow: 0px 0px 0px 0.1px black;
            }
            a {
              text-decoration: none;
              color: white;
            }
            #navbar {
              display: flex;
              background: orange;
            }
            .navbar_btn {
              // box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
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
