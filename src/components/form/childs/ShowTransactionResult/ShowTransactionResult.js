import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class ShowTransactionResult extends Component {
  constructor(props) {
    super(props);

    this.localHandleSubmit = this.localHandleSubmit.bind(this);
    
  }

  localHandleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(1);
  }

  render() {
    return <>
      <div>
      <h2>Transaction Successful</h2>
        <form>
          <Row size={12} sm={2} >
            <Col size={12} sm={6} className="px-1">
              <h4>Transaction ID: </h4>
              <p>{this.props.data.transaction_response.transaction_id}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4>Cryptocurrency Code: </h4>
              <p> {this.props.data.transaction_response.currency_code} </p>
            </Col>
            </Row>
            <Row size={12} sm={2} >
            <Col size={12} sm={6} className="px-1">
              <h4> Deposit Crypto Address: </h4>
              <p> {this.props.data.transaction_response.deposit_address} </p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Deposit Crypto Amount: </h4>
              <p> {this.props.data.transaction_response.deposit_amount} </p>
            </Col>
            </Row>
            <Row size={12} sm={2} >
            <Col size={12} sm={6} className="px-1">
              <h4> Expiration: </h4>
              <p> {this.props.data.transaction_response.expiration} </p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Creation: </h4>
              <p> {this.props.data.transaction_response.creation} </p>
            </Col>
            </Row>
            <Row size={12} sm={2} >
            <Col size={12} sm={6} className="px-1">
              <h4> Payment Url: </h4>
              <p> {this.props.data.transaction_response.paymentUrl}  </p>
            </Col>
          </Row>
          <Row size={12} sm={4} >
            <button onClick={this.localHandleSubmit}><span>New Transaction</span></button>
          </Row>
        </form>
      </div>
    </>;
  }
}

export default ShowTransactionResult;
