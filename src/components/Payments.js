import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import signupImg from "../assets/img/signup-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { Select } from "semantic-ui-react";
import countries from '../assets/data/countries.json';
import cryptoData from '../assets/data/cryptocurrencies.json';

export const Payments = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    businessDescription: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const options = [
    { value: 'usd', label: 'USD' },
    { value: 'mxn', label: 'MXN' },
    { value: 'eur', label: 'EUR' },
    { value: 'col', label: 'COL' },
  ];

  const handleChange = selectedOption => {
    console.log("handleChange", selectedOption)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Form sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

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
  console.log(dropDownCountries);

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

  console.log(dropDownData);

  return (
    <section className="payments" id="connect">
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
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <DropDownContainer>
                          <Dropdown options={dropDownCountries} placeholder="Select a Country" onChange={handleChange} />
                        </DropDownContainer>
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Business Name" onChange={(e) => onFormUpdate('businessName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Business Description" onChange={(e) => onFormUpdate('businessDescription', e.target.value)} />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <DropDownContainer>
                          <Dropdown options={options} placeholder="Select a Currency" onChange={handleChange} />
                        </DropDownContainer>
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input type="text" value={formDetails.amount} placeholder="Currency Amount" onChange={(e) => onFormUpdate('amount', e.target.value)} />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <DropDownContainer>
                          <Dropdown options={dropDownData} placeholder="Select a Crypto Currency" onChange={handleChange} />
                        </DropDownContainer>
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input type="text" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
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
