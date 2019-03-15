import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class AlertModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: this.props.modalStatus,
    }
  }

  // _openModal = () => {
  //   this.setState({ modalStatus: this.props.modalStatus });
  // }

  // _closeModal = () => {
  //   this.setState({ modalStatus: this.props.modalStatus });
  // }

  render() {
    return (
      <Modal open={this.props.modalStatus} onClose={this.props_closeModal}>
        <br />
        <h3>{this.props.alertMsg}</h3>
      </Modal>
    )
  }
}
