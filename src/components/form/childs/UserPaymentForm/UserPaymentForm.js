import React, { Component } from "react";

class UserPaymentForm extends Component {
  render() {
    return <>
    <button type="next" onClick={this.props.handleSubmit}><span>Continuar</span></button>
    </>;
  }
}

export default UserPaymentForm;
