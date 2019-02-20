import React, { Component } from 'react';
import Head from '../components/Header';
import SignIn from '../components/Sign/SignIn';
import SignUp from '../components/Sign/SignUp';
import { inject, observer } from 'mobx-react';

@inject("signInStore")

@observer
export default class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageStatus: 'signIn'
    }
  }

  _changePageStatus = () => {
    this.state.pageStatus === 'signIn'
      ? this.setState({pageStatus: 'signUp'})
      : this.setState({pageStatus: 'signIn'})
  }

  render() {
    console.log('sign Status: ', this.state.pageStatus)

    return (
      <div id="signIn_content"> 
        <Head />
        <div id="pageTitle">
          <h1>Sign Page</h1>
        </div>
        <div id="mainContent">
          {this.state.pageStatus === 'signIn' ? (
            <SignIn _changePageStatus={this._changePageStatus} />
          ) : (
            <SignUp />
          )}
        </div>

        <style jsx>
          {`
            // * {
            //   box-shadow: 0px 0px 0px 0.1px black;
            // }
            #signIn_content {
              background: #262626;
              
            }
            #pageTitle {
              // background: orange;
              color: whiteSmoke;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    )
  }
}
