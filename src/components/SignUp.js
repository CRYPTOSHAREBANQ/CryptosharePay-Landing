import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import signupImg from "../assets/img/signup-img.svg";
import 'animate.css';
import countries from '../assets/data/countries.json';
import TrackVisibility from 'react-on-screen';
import Select from 'react-select'

export const SignUp = () => {
  const formInitialDetails = {
    data:{
      firstName: '',
      lastName: '',
      email: '',
      type: 'NO_ACCOUNT',
      phone: '',
      password: '',
      confirm_password: '',
      country_id: '',

    }
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

  const styles = {
    control: (provided, state) => ({
      ...provided,
      background: 'white',
      borderColor: 'white',
      minHeight: '65px',
      height: '65px',
    })
  };

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
    if (result.code === 200) {
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
                        <input type="password" required value={formDetails.confirm_password} placeholder="Confirm Password" onChange={(e) => onFormUpdate('confirm_password', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Select
                          styles={styles}
                          required options={countries}
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
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                    <Row size={12} sm={4} >
                      <button type="submit"><span>Send</span></button>
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
