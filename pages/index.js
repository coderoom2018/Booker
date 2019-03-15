import React, { Component } from "react";
import Header from "../components/Header";
import BookListContainer from "../components/Index/BookListContainer";
import fetch from 'isomorphic-unfetch';

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
          Books Page
        </div>

        <div id="bookListContainer_container">
          <div className="books_container">
            <div className="subTitle">
              Steady Best
            </div>
            <BookListContainer books={this.state.data} />
          </div>

          <div className="books_container">
            <div className="subTitle">
              Month Best
            </div>
            <BookListContainer books={this.state.data} />
          </div>

          <div className="books_container">
            <div className="subTitle">
              New
            </div>
            <BookListContainer books={this.state.data} />
          </div>

          <div className="books_container">
            <div className="subTitle">
              Recommend
            </div>
            <BookListContainer books={this.state.data} />
          </div>
        </div>

        <style jsx>
          {`
            #pageTitle {
              color: whiteSmoke;
              font-weight: bold;
              font-size: 30px;
              text-align: center;
              vertical-align: middle;
              padding: 10px;
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
            }
            .subTitle {
              background: orange;
              font-size: 20px;
              font-weight: bold;
              padding: 5px;
              color: white;
              opacity: 0.9;
            }

            @media screen and (max-width: 992px) {
              #pageTitle {
                font-size: 20px;
                padding: 5px;
              }
              .subTitle {
                font-size: 15px;
                padding: 5px;
              }
              #bookListContainer_container {
                width: 100%;  
              }
            }
          `}
        </style>
      </div>
    );
  }
}
