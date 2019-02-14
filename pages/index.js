import React, { Component } from "react";
import Header from "../components/Header";
import BookListContainer from "../components/Index/BookListContainer";
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

export default class Index extends Component {
  
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/index')
    const data = await res.json()

    return { data }
  }

  constructor(props) {  
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  
  render() {

    return (
      <div>
        <Header />
        <h1>Books Page</h1>

        <div id="bookListContainer_container">
          <div>
            <h2>Steady Best</h2>
            <BookListContainer books={this.state.data} />
          </div>

          <div>
            <h2>Month Best</h2>
            <BookListContainer books={this.state.data} />
          </div>

          <div>
            <h2>New</h2>
            <BookListContainer books={this.state.data} />
          </div>

          <div>
            <h2>Recommend</h2>
            <BookListContainer books={this.state.data} />
          </div>
        </div>

        <style jsx>
          {`
            * {
              box-shadow: 0px 0px 0px 0.1px black;
            }
            #bookListContainer_container {
              width: 70%;
              margin-left: auto;
              margin-right: auto;
            }
          `}
        </style>
      </div>
    );
  }
}
