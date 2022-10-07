import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import signupImg from "../assets/img/signup-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import countries from '../assets/data/countries.json';
import cryptoData from '../assets/data/cryptocurrencies.json';
import { render } from "react-dom";

export const Transactions = () => {

  const formPaymentsDetails = {
    transactionDescription: '',
    digital_currency_code: '',
    digital_currency_amount: '',
    cryptocurrency_code: '',
    cryptocurrency_blockchain: '',
    customer_email: '',
    customer_phone: '',
  }

  const [formPayDetails, setFormPayDetails] = useState(formPaymentsDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const onFormUpdate = (category, value) => {
    setFormPayDetails({
      ...formPayDetails,
      [category]: value
    })
  }

  const options = [
    { value: 'usd', label: 'USD' },
    { value: 'mxn', label: 'MXN' },
    { value: 'eur', label: 'EUR' },
    { value: 'col', label: 'COL' },
  ];

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };


  const DropDownContainer = styled("div")`
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    color: #fff;
    margin: 0 0 8px 0;
    padding: 18px 26px;
    font-weight: 200;
    font-size: 16px;
    letter-spacing: 0.8px;
    transition: 0.3s ease-in-out;
`;

  const getDropdownCountries = () => {
    var currArray = [];
    var currAdded = new Set();
    countries.forEach(e => {
      if (!currAdded.has(e.value)) {
        currArray.push({
          value: e.value,
          label: e.label
        });
        currAdded.add(e.value);
      }
    });
    return currArray;
  };

  const dropDownCountriesToStringArray = (data) => {
    var stringArr = [];

    data.forEach(e => {
      stringArr.push(e.value.toUpperCase() + ' (' + e.label + ')');
    });
    return stringArr;
  };

  let dropDownCountries = dropDownCountriesToStringArray(getDropdownCountries());

  const getDropdownData = () => {
    var currArray = [];
    var currAdded = new Set();
    cryptoData.forEach(e => {
      if (!currAdded.has(e.fields.blockchain_id)) {
        currArray.push({
          blockchain_id: e.fields.blockchain_id,
          symbol: e.fields.symbol
        });
        currAdded.add(e.fields.blockchain_id);
      }
    });
    return currArray;
  };

  const dropDownDataToStringArray = (data) => {
    var stringArr = [];

    data.forEach(e => {
      stringArr.push(e.blockchain_id.toUpperCase() + ' (' + e.symbol + ')');
    });
    return stringArr;
  };

  let dropDownData = dropDownDataToStringArray(getDropdownData());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formPayDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormPayDetails(formPaymentsDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Form sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

    return (
      <section className="transactions" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Payments</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.transactionDescription} placeholder="Transaction Description" onChange={(e) => onFormUpdate('transactionDescription', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <DropDownContainer>
                            <Dropdown required options={options} placeholder="Select a Currency"/>
                          </DropDownContainer>
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.digital_currency_amount} placeholder="Currency Amount" onChange={(e) => onFormUpdate('digital_currency_amount', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <DropDownContainer>
                            <Dropdown required options={dropDownData} placeholder="Select a Crypto Currency"/>
                          </DropDownContainer>
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.customer_email} placeholder="Email" onChange={(e) => onFormUpdate('customer_email', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.customer_phone} placeholder="Phone" onChange={(e) => onFormUpdate('customer_phone', e.target.value)} />
                          <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </form>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
}