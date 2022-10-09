import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import cryptoData from '../../../../assets/data/cryptocurrencies.json';
import currency from '../../../../assets/data/currencies.json';
import Select from 'react-select'

class UserPaymentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formPaymentsDetails: {
        transactionDescription: '',
        digital_currency_code: '',
        digital_currency_amount: '',
        cryptocurrency_code: '',
        cryptocurrency_blockchain: '',
        customer_email: '',
        customer_phone: '',
      },
      alreadySubmitted: false
    };
    this.localHandleSubmit = this.localHandleSubmit.bind(this);
  }

  onFormPaymentUpdate = (category, value) => {
    let newValue = {
      ...this.state.formPaymentsDetails,
      [category]: value
    };

    this.setState({ formPaymentsDetails: newValue });
  }

  localHandleSubmit(e) {
    e.preventDefault();

    this.setState({
      alreadySubmitted: true
    });

    this.props.handleSubmit(e);
  }

  getDropdownData = () =>{
    let currArray = [];
    let currAdded = new Set();

    cryptoData.forEach(e => {
      if(!currAdded.has(e.fields.blockchain_id)){
        currArray.push({
          label: e.fields.blockchain_id,
          value: e.fields.symbol
        })
        currAdded.add(e.fields.value, e.fields.symbol);
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
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col size={12} sm={3} className="px-1">
              <Select required
              styles={this.styles}
                options={currency}
                placeholder="Select a Currency"
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
              styles={this.styles}
                options={this.getDropdownData()}
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
              <input type="text" value={this.state.formPaymentsDetails.customer_email} placeholder="Email" onChange={(e) => this.onFormPaymentUpdate('customer_email', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.formPaymentsDetails.customer_phone} placeholder="Phone" onChange={(e) => this.onFormPaymentUpdate('customer_phone', e.target.value)} />
            </Col>
          </Row>
          <Row size={12} sm={4} >
            {!this.state.alreadySubmitted && <button onClick={this.localHandleSubmit}><span>Send</span></button>}
          </Row>
        </form>
      </div>
    </>;
  }
}

export default UserPaymentForm;
