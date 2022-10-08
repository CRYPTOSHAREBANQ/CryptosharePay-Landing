import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import countries from '../assets/data/countries.json';
import cryptoData from '../assets/data/cryptocurrencies.json';
import FormContainer from "./form/FormContainer/FormContainer"

export const Payments = () => {
  const formInitialDetails = {
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
  }

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
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Next');
  const [buttonFormText, setButtonFormText] = useState('Send');
  const [status, setStatus] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })

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

  const getDropdownCountries = () => {
    let currArray = [];
    let currAdded = new Set();
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
    let stringArr = [];

    data.forEach(e => {
      stringArr.push(e.value.toUpperCase() + ' (' + e.label + ')');
    });
    return stringArr;
  };

  let dropDownCountries = dropDownCountriesToStringArray(getDropdownCountries());

  const getDropdownData = () => {
    let currArray = [];
    let currAdded = new Set();
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
    let stringArr = [];

    data.forEach(e => {
      stringArr.push(e.blockchain_id.toUpperCase() + ' (' + e.symbol + ')');
    });
    return stringArr;
  };

  let dropDownData = dropDownDataToStringArray(getDropdownData());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch(" ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
      body: JSON.stringify(formPayDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    setFormPayDetails(formPaymentsDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Form sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

    return (
      <section className="payments" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={12}>
              <FormContainer />
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Payments</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={3} className="px-1">
                          <input type="email" required value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                            <select required options={dropDownCountries} placeholder="Select a Country" />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" value={formDetails.business_name} placeholder="Business Name" onChange={(e) => onFormUpdate('business_name', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" value={formDetails.business_description} placeholder="Business Description" onChange={(e) => onFormUpdate('business_description', e.target.value)} />
                          <button type="next"><span>{buttonText}</span></button>
                        </Col>
                      </Row>
                    </form>
                  </div>}
              </TrackVisibility>
              <TrackVisibility>
              {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <form onSubmit={handleSubmit}>
                      <br/>
                      <Row>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.transactionDescription} placeholder="Transaction Description" onChange={(e) => onFormUpdate('transactionDescription', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                            <select required options={options} placeholder="Select a Currency" />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.digital_currency_amount} placeholder="Currency Amount" onChange={(e) => onFormUpdate('digital_currency_amount', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                            <select required options={dropDownData} placeholder="Select a Crypto Currency" />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.customer_email} placeholder="Email" onChange={(e) => onFormUpdate('customer_email', e.target.value)} />
                        </Col>
                        <Col size={12} sm={3} className="px-1">
                          <input type="text" required value={formPayDetails.customer_phone} placeholder="Phone" onChange={(e) => onFormUpdate('customer_phone', e.target.value)} />
                          <button type="submit"><span>{buttonFormText}</span></button>
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
