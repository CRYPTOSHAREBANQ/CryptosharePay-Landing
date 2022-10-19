import React, { Component } from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import cryptoData from '../../../../assets/data/cryptocurrencies.json';
import currency from '../../../../assets/data/currencies.json';
import Select from 'react-select'
import formDetails from '../UserDataForm'

class UserPaymentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formPaymentsDetails: {
        description: '',
        digital_currency_code: '',
        digital_currency_amount: '',
        cryptocurrency_code: '',
        cryptocurrency_blockchain_id: '',
        client_email: '',
        client_phone: ''
      },
      alreadySubmitted: false
    };
    this.localHandleSubmit = this.localHandleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onFormPaymentUpdate = (category, value) => {
    let newValue = {
      ...this.state.formPaymentsDetails,
      [category]: value
    };

    this.setState({ formPaymentsDetails: newValue });
  }

  cryptoHandleChange = (newValue, _) => {

    let cryptoPaymentsDetails = this.state.formPaymentsDetails
    
    cryptoPaymentsDetails.cryptocurrency_blockchain_id = newValue.value
    cryptoPaymentsDetails.cryptocurrency_code = newValue.label

    this.setState({ formPaymentsDetails: cryptoPaymentsDetails});

    console.log(this.state.formPaymentsDetails);

  }

  currencyHandleChange = (currencyNewValue, _) =>{

    let currencyPaymentsDetails = this.state.formPaymentsDetails

    currencyPaymentsDetails.digital_currency_code = currencyNewValue.label

    this.setState({ formPaymentsDetails: currencyPaymentsDetails});

    console.log(currencyNewValue)

    console.log(this.state.formPaymentsDetails);
  }
  
  localHandleSubmit(e) {
    e.preventDefault();

    this.setState({
      alreadySubmitted: true
    });

    this.props.handleSubmit(e);
  }

  getDropdownData = () => {
    let currArray = [];
    let currAdded = new Set();

    cryptoData.forEach(e => {
      if (!currAdded.has(e.fields.blockchain_id)) {
        
        currArray.push({
          value: e.fields.blockchain_id,
          label: e.fields.symbol
        })
        currAdded.add(e.fields.blockchain_id);
      }
    })
    return currArray
  }

  styles = {
    control: (provided, state) => ({
      ...provided,
      background: 'white',
      borderColor: 'white',
      minHeight: '65px',
      height: '65px',
    })
  }

  async handleSubmit(e) {

    e.preventDefault();

    console.log(this.state.formPaymentsDetails)

    let response = await fetch("https://api.cryptosharepay.com/v1/transactions/payments/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "X-Api-key": "tsk_b67044466d5bb5dbc6c05f794a3f4ad2"
      },
      body: JSON.stringify(this.state.formPaymentsDetails),
    });

    let result = await response.json();
    this.onFormPaymentUpdate(this.state.formPaymentsDetails);
    if (result.code == 200) {
      this.setStatus({ succes: true, message: 'Form sent successfully' });
      alert('Payment Sent Successfully');
    } else {
      this.setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
      alert('Something went wrong, please try again later.');
    }
  };

  render() {
    return <>
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
          <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.formPaymentsDetails.description} 
              placeholder="Transaction Description" onChange={(e) => this.onFormPaymentUpdate('description', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <Select required
              value={this.state.digital_currency_code} placeholder="Select a Currency" 
                styles={this.styles}
                options={currency}
                onChange={this.currencyHandleChange}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 21,
                  colors: {
                    ...theme.colors,
                    primary25: 'lightpink',
                    primary: 'black',
                  },
                })} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" required value={this.state.formPaymentsDetails.digital_currency_amount} placeholder="Currency Amount" onChange={(e) => this.onFormPaymentUpdate('digital_currency_amount', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <Select required
              value={this.cryptocurrency_code}
                styles={this.styles}
                options={this.getDropdownData()}
                onChange={this.cryptoHandleChange}
                placeholder="Select a Crypto Currency"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 21,
                  colors: {
                    ...theme.colors,
                    primary25: 'lightpink',
                    primary: 'black',
                  },
                })} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.formPaymentsDetails.client_email} placeholder="Email" onChange={(e) => this.onFormPaymentUpdate('client_email', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.formPaymentsDetails.client_phone} placeholder="Phone" onChange={(e) => this.onFormPaymentUpdate('client_phone', e.target.value)} />
            </Col>
          </Row>
          <Row size={12} sm={4} >
            {!this.state.alreadySubmitted && <button type="submit"><span>Send</span></button>}
          </Row>
        </form>
      </div>
    </>;
  }
}

export default UserPaymentForm;
