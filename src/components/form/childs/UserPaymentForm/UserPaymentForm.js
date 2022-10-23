import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import cryptoData from '../../../../assets/data/cryptocurrencies.json';
import currency from '../../../../assets/data/currencies.json';
import Select from 'react-select'

class UserPaymentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        description: '',
        digital_currency_code: '',
        digital_currency_amount: '',
        cryptocurrency_code: '',
        cryptocurrency_blockchain_id: '',
        client_email: '',
        client_phone: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log("props")
    console.log(this.props)
  }

  onFormPaymentUpdate = (category, value) => {
    let newValue = {
      ...this.state.data,
      [category]: value
    };

    this.setState({ data: newValue });
  }

  cryptoHandleChange = (newValue, _) => {

    let cryptoPaymentsDetails = this.state.data

    cryptoPaymentsDetails.cryptocurrency_blockchain_id = newValue.value
    cryptoPaymentsDetails.cryptocurrency_code = newValue.label

    this.setState({ data: cryptoPaymentsDetails });

  }

  currencyHandleChange = (currencyNewValue, _) => {

    let currencyPaymentsDetails = this.state.data

    currencyPaymentsDetails.digital_currency_code = currencyNewValue.label

    this.setState({ data: currencyPaymentsDetails });
  }

  async handleSubmit(e) {
    e.preventDefault();

    await fetch("https://api.cryptosharepay.com/v1/transactions/payments/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-key": "tsk_b67044466d5bb5dbc6c05f794a3f4ad2"
      },
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(res => {
        if(res.status !== 'SUCCESS') {
          throw new Error(res.message);
        } else {
          alert('Payment Sent Successfully');

          console.log("Trans res:")
          console.log(res)
          
          const transaction_response = {
            transaction_id: res.data.transaction_id,
            currency_code: res.data.cryptocurrency_code,
            deposit_address: res.data.deposit_crypto_address,
            deposit_amount: res.data.deposit_crypto_amount,
            expiration: res.data.expiration_timestamp,
            creation: res.data.creation_timestamp,
            paymentUrl: res.data.payment_url,
          }

          this.props.saveFormData("transaction_response", transaction_response);

          this.props.handleSubmit(4);
        }
      })
      .catch(err => {
        alert('Something went wrong, please try again later.');
      });

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

  render() {
    return <>
      <div>
      <h2>Make a Transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.data.description}
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
              <input type="text" required value={this.state.data.digital_currency_amount} placeholder="Currency Amount" onChange={(e) => this.onFormPaymentUpdate('digital_currency_amount', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <Select
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
              <input type="text" value={this.state.data.client_email} placeholder=" Target Email" onChange={(e) => this.onFormPaymentUpdate('client_email', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.data.client_phone} placeholder="Phone" onChange={(e) => this.onFormPaymentUpdate('client_phone', e.target.value)} />
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
