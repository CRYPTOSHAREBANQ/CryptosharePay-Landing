import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SimpleDateTime from 'react-simple-timestamp-to-date';
import QRCode from 'qrcode.react';
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";

class ShowPayments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactionData: {}
    };

    this.localHandleSubmit = this.localHandleSubmit.bind(this);
  }

  localHandleSubmit(e) {
    e.preventDefault();
  }

  async componentDidMount() {
    const url = "https://api.cryptosharepay.com/v1/protected/transactions/payments/" + this.props.transactionId;
    await fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data.transaction);
        this.setState({
          transactionData: res.data.transaction
        });
      })
      .catch(e => {
        console.log("Error: " + e);
      });
  }


  render() {
    const address = this.state.transactionData.address
    console.log(address)
    let Content;
    if (Object.keys(this.state.transactionData).length == 0) {
      Content = <h2>Loading...</h2>
    } else {
      Content = <div className="userPayments" id="userPayments">
        <h2>Transaction Information</h2>
        <form>
          <Row size={12} sm={2} >
            <Col size={12} sm={12} className="px-1">
              <h4>Transaction ID: </h4>
              <p>{this.state.transactionData.transaction_id}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Address: </h4>
              <p>{this.state.transactionData.address}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <QRCodeSVG
                value={`${address}`}
                size={128}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4>Transaction Type: </h4>
              <p>{this.state.transactionData.transaction_type}</p>
            </Col>
            <Col>
            <br></br>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4>Description: </h4>
              <p>{this.state.transactionData.description}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4>Digital Currency Code: </h4>
              <p>{this.state.transactionData.digital_currency_code}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Digital Currency Amount: </h4>
              <p>{this.state.transactionData.digital_currency_amount}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Cryptocurrency Code: </h4>
              <p>{this.state.transactionData.cryptocurrency_code} </p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Cryptocurrency Amount: </h4>
              <p>{this.state.transactionData.cryptocurrency_amount}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Cryptocurrency Amount Received: </h4>
              <p>{this.state.transactionData.cryptocurrency_amount_received}</p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Creation DateTime: </h4>
              <p> <SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{this.state.transactionData.creation_datetime}</SimpleDateTime> </p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Expiration DateTime: </h4>
              <p> <SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{this.state.transactionData.expiration_datetime}</SimpleDateTime></p>
            </Col>
            <Col size={12} sm={6} className="px-1">
              <h4> Status: </h4>
              <p>{this.state.transactionData.status}</p>
            </Col>
          </Row>
          <Row size={12} sm={2} >

          </Row>
        </form>
      </div>
    }

    return <>
      {Content}
    </>;
  }
}


export default ShowPayments;