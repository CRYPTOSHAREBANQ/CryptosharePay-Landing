import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import signupImg from "../assets/img/signup-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Dropdown from 'react-dropdown';
import {DropdownItem, DropdownMenu, Dropdo} from "reactstrap";
import styled from 'styled-components';

export const SignUp = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    { value: 'af', label: 'Afghanistan' },
    { value: 'ax', label: 'Aland Islands' },
    { value: 'as', label: 'American Samoa' },
    { value: 'ad', label: 'Andorra' },
    { value: 'ao', label: 'Angola' },
    { value: 'ai', label: 'Anguilla' },
    { value: 'aq', label: 'Antarctica' },
    { value: 'ag', label: 'Antigua and Barbuda' },
    { value: 'ar', label: 'Argentina' },
    { value: 'am', label: 'Armenia' },
    { value: 'aw', label: 'Aruba' },
    { value: 'au', label: 'Australia' },
    { value: 'at', label: 'Austria' },
    { value: 'az', label: 'Azerbaijan' },
    { value: 'bs', label: 'Bahamas' },
    { value: 'bh', label: 'Bahrain' },
    { value: 'bb', label: 'Barbados' },
    { value: 'be', label: 'Belgium' },  
    { value: 'bz', label: 'Belize' },
    { value: 'bj', label: 'Benin' },
    { value: 'bm', label: 'Bermuda' },
    { value: 'bt', label: 'Bhutan' },
    { value: 'bq', label: 'Bonaire, Sint Eustatius and Saba' },
    { value: 'bw', label: 'Botswana' },
    { value: 'bv', label: 'Bouvet Island' },
    { value: 'br', label: 'Brazil' },
    { value: 'io', label: 'British Indian Ocean Territory'},
    { value: 'bn', label: 'Brunei Darussalam' },
    { value: 'bf', label: 'Burkina Faso' },
    { value: 'bi', label: 'Burundi' },
    { value: 'kh', label: 'Cambodia' },
    { value: 'cm', label: 'Cameroon' },
    { value: 'ca', label: 'Canada' },
    { value: 'cv', label: 'Cape Verde' },
    { value: 'ky', label: 'Cayman Islands' },
    { value: 'cf', label: 'Central African Republic' },
    { value: 'td', label: 'Chad' },
    { value: 'cl', label: 'Chile' },
    { value: 'cx', label: 'Christmas Island' },
    { value: 'cc', label: 'Cocos (Keeling) Islands' },
    { value: 'co', label: 'Colombia' },
    { value: 'km', label: 'Comoros' },
    { value: 'ck', label: 'Cook Islands' },
    { value: 'cr', label: 'Costa Rica' },
    { value: 'cw', label: 'Curacao' },
    { value: 'cy', label: 'Cyprus' },
    { value: 'cz', label: 'Czech Republic' },
    { value: 'dk', label: 'Denmark' },
    { value: 'dj', label: 'Djibouti' },
    { value: 'dm', label: 'Dominica' },
    { value: 'do', label: 'Dominican Republic' },
    { value: 'ec', label: 'Ecuador' },
    { value: 'vc', label: 'El Salvador' },
    { value: 'qg', label: 'Equatorial Guinea' },
    { value: 'er', label: 'Eritrea' },
    { value: 'ee', label: 'Estonia' },
    { value: 'et', label: 'Ethiopia' },
    { value: 'fk', label: 'Falkland Islands (Malvinas)' },
    { value: 'fo', label: 'Faroe Islands' },
    { value: 'fj', label: 'Fiji' },
    { value: 'fi', label: 'Finland' },
    { value: 'fr', label: 'France' },
    { value: 'gf', label: 'French Guiana' },
    { value: 'pf', label: 'French Polynesia' },
    { value: 'tf', label: 'French Southern Territories' },
    { value: 'ga', label: 'Gabon' },
    { value: 'gm', label: 'Gambia' },
    { value: 'ge', label: 'Georgia' },
    { value: 'de', label: 'Germany' },
    { value: 'gh', label: 'Ghana' },
  ];
  const defaultOption = options[''];

  const handleChange = selectedOption =>{
    console.log("handleChange",selectedOption)
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
      setStatus({ succes: true, message: 'Form sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="signup" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={signupImg} alt="Contact Us"/>
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
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="password" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="password" value={formDetails.secondpassword} placeholder="Confirm Password" onChange={(e) => onFormUpdate('secondpassword', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <DropDownContainer>
                      <Dropdown options={options} placeholder="Select a Country" onChange={handleChange}/>
                      </DropDownContainer>
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
