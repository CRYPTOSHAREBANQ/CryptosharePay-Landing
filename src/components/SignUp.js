import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import signupImg from "../assets/img/signup-img.svg";
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'animate.css';
import countries from '../assets/data/countries.json';
import TrackVisibility from 'react-on-screen';

export const SignUp = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

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

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

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


  return (
    <section className="signup" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={signupImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Sign Up</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" required value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" required value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input type="email" required value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="password" required value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="password" required value={formDetails.password} placeholder="Confirm Password" onChange={(e) => onFormUpdate('password', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <DropDownContainer>
                          <Dropdown required options={dropDownCountries} placeholder="Select a Country" />
                        </DropDownContainer>
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
