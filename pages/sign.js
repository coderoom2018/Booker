import React, { Component } from 'react';
import Head from '../components/Header';
import SignIn from '../components/Sign/SignIn';
import SignUp from '../components/Sign/SignUp';

export default class Sign extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        <Head />
        <h1>Sign Page</h1>
        <div id="mainContent">
          <SignIn />
          <SignUp />
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
          `}
        </style>
      </div>
    )
  }
}
