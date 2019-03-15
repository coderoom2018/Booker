import App, { Container } from "next/app";
import React from "react";
import MypageStore from "../stores/mypage"
import SignInStore from "../stores/signIn";
import { Provider } from "mobx-react";

const mypageStore = new MypageStore();
const signInStore = new SignInStore();

class BookerApp extends App {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider 
          mypageStore={mypageStore}
          signInStore={signInStore}
        >
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default BookerApp;
