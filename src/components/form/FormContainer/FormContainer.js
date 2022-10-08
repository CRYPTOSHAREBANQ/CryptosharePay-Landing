import React, { Component } from "react";
import UserDataForm from "../childs/UserDataForm/UserDataForm";
import UserPaymentForm from "../childs/UserPaymentForm/UserPaymentForm";

import "./FormContainer.css"

class FormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSecondForm: false
    }

    this.handleUserDataForm = this.handleUserDataForm.bind(this);
    this.handleUserPaymentForm = this.handleUserPaymentForm.bind(this);
  }

  handleUserDataForm(e) {
    e.preventDefault();

    this.setState({
      showSecondForm: true
    });

    alert("First submit!");
  }

  handleUserPaymentForm(e) {
    e.preventDefault();
    alert("Second submit!");
    alert(this.state.showSecondForm);
  }

  render() {
    return <>
      <section className="payments">
        <div className="p-4">
        <UserDataForm showSecondForm={this.state.showSecondForm} handleSubmit={this.handleUserDataForm} />
        {this.state.showSecondForm && <UserPaymentForm handleSubmit={this.handleUserPaymentForm} />}
        </div>
      </section>
    </>;
  }
}

export default FormContainer;
