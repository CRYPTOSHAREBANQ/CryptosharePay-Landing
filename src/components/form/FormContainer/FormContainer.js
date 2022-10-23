import React, { Component } from "react";
import ShowTransactionResult from "../childs/ShowTransactionResult";
import UserDataRegistrationForm from "../childs/UserDataRegistrationForm";
import UserDataForm from "../childs/UserDataForm/UserDataForm";
import UserPaymentForm from "../childs/UserPaymentForm/UserPaymentForm";
import "./FormContainer.css"

class FormContainer extends Component {
  EMAIL_STEP = 1;
  USER_INFO_STEP = 2;
  TRANSACTION_DATA_STEP = 3;
  SHOW_TRANSACTION_RESULT = 4;

  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.EMAIL_STEP,
      data: {
        email: "",
        password: "",
        api_key:"",
        customer_id:"",
        business_id:""
      }
    }

    this.saveFormData = this.saveFormData.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  saveFormData(category, value) {
    this.setState((prevState, _) => ({
      	data: {...prevState.data, [category]: value}
    }));
  }

  changeState(state) {
    this.setState({
      currentStep: state
    }, () => {
      console.log("New state:");
      console.log(this.state);
    });
  }

  render() {
    return <>
      <section className="payments">
        <div className="p-4">
        {this.state.currentStep === this.EMAIL_STEP && <UserDataForm handleSubmit={this.changeState} saveFormData={this.saveFormData} />}
        {this.state.currentStep === this.USER_INFO_STEP && <UserDataRegistrationForm handleSubmit={this.changeState} saveFormData={this.saveFormData} data={this.state.data} />}
        {this.state.currentStep === this.TRANSACTION_DATA_STEP && <UserPaymentForm handleSubmit={this.changeState} saveFormData={this.saveFormData} data={this.state.data} />}
        {this.state.currentStep === this.SHOW_TRANSACTION_RESULT && <ShowTransactionResult handleSubmit={this.changeState} saveFormData={this.saveFormData} data={this.state.data}/>}
        </div>
      </section>
    </>;
  }
}

export default FormContainer;
