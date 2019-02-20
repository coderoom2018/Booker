import React, { Component } from "react";
import Header from "../components/Header";
import BookListContainer from "../components/Index/BookListContainer";
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

export default class Index extends Component {
  
  static async getInitialProps(context) {
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
      <div id="index_content">
        <Header />
        <div id="pageTitle">
          <h1>Books Page</h1>
        </div>
        <div id="bookListContainer_container">
          <div className="books_container">
            <div className="subTitle">
              <h2>Steady Best</h2>
            </div>
            <BookListContainer books={this.state.data} />
          </div>

          <div className="books_container">
            <div className="subTitle">
              <h2>Month Best</h2>
            </div>
            <BookListContainer books={this.state.data} />
          </div>

          <div className="books_container">
            <div className="subTitle">
              <h2>New</h2>
            </div>
            <BookListContainer books={this.state.data} />
          </div>

          <div className="books_container">
            <div className="subTitle">
              <h2>Recommend</h2>
            </div>
            <BookListContainer books={this.state.data} />
          </div>
        </div>

        <style jsx>
          {`
            h2 {
              color: white;
              opacity: 0.9;
            }
            #pageTitle {
              
              color: whiteSmoke;
              font-weight: bold;
            }
            #index_content {
              background: #262626;
            }
            #bookListContainer_container {
              width: 70%;
              margin-left: auto;
              margin-right: auto;

            }
            .books_container {
              background: #262626;
              margin-top: 20px;
            }
            .subTitle {
              background: orange;
              padding: 2px;
            }
            
          
          `}
        </style>
      </div>
    );
  }
}
