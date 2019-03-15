import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class ConfirmModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ModalStatus: false,
    }
  }

  _openModal = () => {
    this.setState({ ModalStatus: true })
  }

  _closeModal = () => {
    this.setState({ ModalStatus: false })
  }

  render() {
    return (
      <Modal open={this.state.ModalStatus} onClose={this._closeModal}>
        <h3>{this.props.title}</h3>
        <div className="buttonContainer">
          <button 
            className="btn"
            onClick={() => {
              this.props.confirmEvent1();
              this.props.confirmEvent2();
              this.props.confirmEvent3();
              this._closeModal();
            }}
          >{this.props.confirmBtnTitle}</button>
          <button 
            className="btn" 
            onClick={() => {
              this.props.cancleEvent1();
              this.props.cancleEvent2();
              this.props.cancleEvent3();
              this._closeModal();
            }}>취소</button>
        </div>
      </Modal>
    )
  }
}
