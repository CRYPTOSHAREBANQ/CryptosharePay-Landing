import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class UserDataForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      isValidAccount: false
    };

    this.localHandleSubmit = this.localHandleSubmit.bind(this);
    this.localHandleSubmitValidAccount = this.localHandleSubmitValidAccount.bind(this);
  }

  onFormUpdate = (category, value) => {
    let newValue = {
      ...this.state.data,
      [category]: value
    };

    this.setState({ data: newValue });
  }

  async localHandleSubmit(e) {
    e.preventDefault(e);

    // Part 1: Validate email
    const emailAvailable = await this.validateEmail(this.state.data.email);

    if (emailAvailable) {
      // If not, redirect directly
      this.props.saveFormData("email", this.state.data.email);
      this.props.handleSubmit(2);
    } else {
      this.setState({
        isValidAccount: true
      });
    }
  }

  async localHandleSubmitValidAccount(e) {
    e.preventDefault();

    this.props.saveFormData("password", this.state.data.password);
    this.props.saveFormData("email", this.state.data.email);

    const apiKey = await this.getApiKey(this.state.data.email);
    if (apiKey === null) {
       return;
    }
    
    this.props.saveFormData("api_key", apiKey);

    this.props.handleSubmit(3);
  }

  async validateEmail(_email) {
    const body = {
      data: {
        email: _email
      }
    };

    const res = await fetch("https://api.cryptosharepay.com/v1/protected/accounts/email-has-account/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-key": "tsk_b67044466d5bb5dbc6c05f794a3f4ad2"
      },
      body: JSON.stringify(body)
    });
    const jsonRes = await res.json();
    return jsonRes.data.email_is_available;
  }

  async getApiKey(email) {
    
    const res = await fetch("https://api.cryptosharepay.com/v1/protected/api-keys/api-key-no-account/TEST", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-email": email
      }
    }).catch(e => {
      alert("Error: " + e);
      return null;
    })
    
    if (res) {
      console.log(email)
      const jsonRes = await res.json();
      return jsonRes.data.api_key;
    } else {
      return null;
    }
  }

  render() {
    return <>
      <div className={"animate__animated animate__fadeIn"}>
        <h2>Start Paying</h2>
        <form>
          <Row>
            <Col size={12} sm={3} className="px-1">
              <input type="email" required value={this.state.data.email} placeholder="Email Address" onChange={(e) => this.onFormUpdate('email', e.target.value)} />
            </Col>
            <Col size={12} sm={3} className="px-1">
              {this.state.isValidAccount && <input type="password" required value={this.state.data.password} placeholder="Password" onChange={(e) => this.onFormUpdate('password', e.target.value)} />}
            </Col>
          </Row>
          <Row size={12} sm={4} >
            {!this.state.isValidAccount && <button onClick={this.localHandleSubmit}><span>Continue</span></button>}
            {this.state.isValidAccount && <button onClick={this.localHandleSubmitValidAccount}><span>Create Transaction</span></button>}
          </Row>
        </form>
      </div>
    </>;
  }
}

export default UserDataForm;
