import React, { Component } from "react";
import Focus_Image from "./Focus_Image";
import Focus_BookInformation from "./Focus_BookInformation";
import Focus_Rate from "./Focus_Rate"
import Modal from "react-responsive-modal";

export default class BookInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myScore: this.props.data[0].score,
      alertModal: false,
    }
  }

  _clickHandeler_decreaseMyscore = () => {
    if (this.state.myScore > 0) {
      this.setState({
        myScore: this.state.myScore - 1
      })
    }
  }

  _clickHandeler_increaseMyscore = () => {
    if (this.state.myScore < 10) {
      this.setState({
        myScore: this.state.myScore + 1
      })
    }
  }

  _clickHandeler_submitMyscore = () => {
    const score = this.state.myScore;
    const user_id = sessionStorage.getItem('user_id');
    const book_id = this.props.data[0].book_id;

    this.props._editMyScore(score, user_id, book_id);
    this._openAlertModal();
  }

  _openAlertModal = () => {
    this.setState({ alertModal: true });
  }

  _closeAlertModal = () => {
    this.setState({ alertModal: false });
  }

  render() {
    const data = this.props.data[0]
    
    return (
      <div id="content">
        <Modal open={this.state.alertModal} onClose={this._closeAlertModal}>
          <br />
          <h3>평가점수가 수정 되었습니다!</h3>
        </Modal>

        <Focus_Image image={data.book.image}/>

        <div id="book_information">
          <Focus_BookInformation 
            title={data.book.title}
            publishedAt={data.book.publishedAt}
            description={data.book.description}
          />
          <Focus_Rate 
            averageScore={data.book.averageScore}
            myScore={this.state.myScore}
            _clickHandeler_decreaseMyscore={this._clickHandeler_decreaseMyscore}
            _clickHandeler_increaseMyscore={this._clickHandeler_increaseMyscore}
            _clickHandeler_submitMyscore={this._clickHandeler_submitMyscore}
            data={data}
          />
        </div>

        <style jsx>
          {`
            #content {
              display: flex;
              justify-content: center;
              background: whiteSmoke;
              margin-right: auto;
              margin-left: auto;
            }
            #book_information {
              display: flex;
              flex-direction: column;
              width: 60%;
            }

            @media screen and (max-width: 992px) {
              #content {
                flex-direction: column;
                align-items: center;
                width: 99%;
              }
              #book_information {
                width: 99%;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
