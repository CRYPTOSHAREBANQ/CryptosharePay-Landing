import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import countries from '../../../../assets/data/countries.json';
import Select from 'react-select'

class UserDataForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formDetails: {
        email: '',
        firstName: '',
        lastName: '',
        country_id: '',
        business_name: '',
        business_description: '',
        formErrors: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false
      },
      alreadySubmitted: false
    };

    this.localHandleSubmit = this.localHandleSubmit.bind(this);
  }


  onFormUpdate = (category, value) => {
    let newValue = {
      ...this.state.formDetails,
      [category]: value
    };

    this.setState({ formDetails: newValue });
  }

  localHandleSubmit(e) {
    e.preventDefault();

    this.setState({
      alreadySubmitted: true
    });
    
    this.props.handleSubmit(e);
  }

  render() {
    return <>
      <div className={"animate__animated animate__fadeIn"}>
        <h2>Payments</h2>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col size={12} sm={3} className="px-1">
              <input type="email" required value={this.state.formDetails.email} placeholder="Email Address" onChange={(e) => this.onFormUpdate('email', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" required value={this.state.formDetails.firstName} placeholder="First Name" onChange={(e) => this.onFormUpdate('firstName', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" required value={this.state.formDetails.lastName} placeholder="Last Name" onChange={(e) => this.onFormUpdate('lastName', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <Select
                required options={countries}
                placeholder="Select a Country"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 10,
                  colors: {
                    ...theme.colors,
                    primary25: 'hotpink',
                    primary: 'black',
                  },
                })} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.formDetails.business_name} placeholder="Business Name" onChange={(e) => this.onFormUpdate('business_name', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" value={this.state.formDetails.business_description} placeholder="Business Description" onChange={(e) => this.onFormUpdate('business_description', e.target.value)} />
            </Col>
          </Row>
          <Row size={12} sm={4} >
            {!this.state.alreadySubmitted && <button onClick={this.localHandleSubmit}><span>Continuar</span></button>}
          </Row>
        </form>
      </div>
    </>;
  }
}

export default UserDataForm;
