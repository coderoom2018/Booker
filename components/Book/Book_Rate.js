import React, { Component } from 'react';

export default class Book_Rate extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="book_rate">
        <div className="averageScore">평균점수: {this.props.averageScore}</div>
        <div className="myScore">
          내가 평가한 점수: 
          <button className="myScore_btn" onClick={this.props._clickHandeler_decreaseMyscore}>-</button>
            {this.props.myScore ? this.props.myScore : 0}
          <button className="myScore_btn" onClick={this.props._clickHandeler_increaseMyscore}>+</button>
          <button 
            className="submit_btn" 
            onClick={(e) => {
              if (!sessionStorage.getItem("user_id")) {
                alert("로그인을 해주세요")
              } else {
                if (confirm("평가점수를 변경 하시겠습니까?")) this.props._clickHandeler_submitMyscore()
              }
            }}>평가하기</button>
        </div>

        <style jsx>
          {`
            * {
              box-sizing: border-box;
            }
            textarea {
              resize: none;
            }
            .book_rate {
              display: flex;
              flex-direction: column;
              font-size: 20px;
            }
            .averageScore,
            .myScore {
              margin-bottom: 5px;
              font-weight: bold;
              background: white;
            }
            .myScore_btn, 
            .submit_btn {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
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
          `}
        </style>
      </div>
    )
  }
}