import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import countries from '../../../../assets/data/countries.json';
import Select from 'react-select'

class UserDataRegistrationForm extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      data: {
        email: this.props.data.email,
        password: '',
        confirm_password:'',
        first_name: '',
        last_name: '',
        type: 'NO_ACCOUNT',
        country_id: '',
        business_name: '',
        business_description: '',
      }
    };

    this.localHandleSubmit = this.localHandleSubmit.bind(this);
  }

  onFormUpdate = (category, value) => {
    let newValue = {
      ...this.state.data,
      [category]: value
    };

    this.setState({ data: newValue });
  }

  async localHandleSubmit(e) {
    e.preventDefault();

    const res = await this.createAccount();
    this.props.saveFormData("api_key", res[0]);
    this.props.saveFormData("customer_id", res[1]);
    this.props.saveFormData("business_id", res[2]);

    this.props.handleSubmit(3);
  }

  async createAccount () {
    let body = {
      data: {
        customer_info: {
            email: this.state.data.email,
            password: this.state.data.password,
            confirm_password: this.state.data.confirm_password,
            first_name: this.state.data.first_name,
            last_name: this.state.data.last_name,
            type: "NO_ACCOUNT",
            country_id: this.state.data.country_id
        },
        business_info:{ 
            name: this.state.data.business_name,
            description: this.state.data.business_description
        }
      }
    }

    const res = await fetch("https://api.cryptosharepay.com/v1/accounts/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });

    const jsonRes = await res.json();

    return [jsonRes.data.api_key, jsonRes.data.customer_id, jsonRes.data.business_id];
  }


  styles = {
    control: (provided, state) => ({
      ...provided,
      background: 'white',
      borderColor: 'white',
      minHeight: '65px',
      height: '65px',
    })
  };

  render() {
    return <>
      <div className={"animate__animated animate__fadeIn"}>
        <h2>Create user</h2>
        <form>
          <Row>
            <Col size={12} sm={3} className="px-1">
              <input type="email" required value={this.state.data.email} placeholder="Email Address"/>
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" required value={this.state.data.firstName} placeholder="First Name" onChange={(e) => this.onFormUpdate('first_name', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" required value={this.state.data.lastName} placeholder="Last Name" onChange={(e) => this.onFormUpdate('last_name', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="password" required value={this.state.data.password} placeholder="Password" onChange={(e) => this.onFormUpdate('password', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="password" required value={this.state.data.confirm_password} placeholder="Confirm Password" onChange={(e) => this.onFormUpdate('confirm_password', e.target.value)} />
            </Col>
            <Col size={12} sm={3}>
              <Select
              required
              value={this.country_id}
              onChange={(countryNewValue, _) => this.onFormUpdate('country_id', countryNewValue.value)}
                styles={this.styles}
                 options={countries}
                placeholder="Select a Country"
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
              <input type="text" required value={this.state.data.business_name} placeholder="Business Name" onChange={(e) => this.onFormUpdate('business_name', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              <input type="text" required value={this.state.data.business_description} placeholder="Business Description" onChange={(e) => this.onFormUpdate('business_description', e.target.value)} />
            </Col>
          </Row>
          <Row size={12} sm={4} >
            <button onClick={this.localHandleSubmit}><span>Continue</span></button>
          </Row>
        </form>
      </div>
    </>;
  }
}

export default UserDataRegistrationForm;
