import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ItemsCard } from "./ItemsCard";
import projImg1 from "../assets/img/magnifying-glass.png";
import projImg2 from "../assets/img/not-allowed.png";
import projImg3 from "../assets/img/coin.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Apis = () => {

  return (
    <section className="apis" id="apis">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="company-bx wow zoomIn">
              <h2>What is CryptoSharePay?</h2>
              <p>CryptosharePay offers a Simple solution that allows Businesses and Financial Institutions to Accept & Pay 100% with Cryptocurrency (In-Person/Online) using a Digital Card.</p>
              <Container >
                <Row size={6} sm={3}>
                  <Col size={12} sm={3} className="px-1">
                    <h3 className="apis-text1"> ACCEPT CRYPTO PAYMENTS </h3>
                    <br></br>
                    <br></br>
                  </Col>
                  <Col size={12} sm={3} className="px-1">
                    <h3 className="apis-text2"> ISSUE CRYPTO DIGITAL CARDS </h3>
                  </Col>
                  <Col size={12} sm={3} className="px-1">
                    <h3 className="apis-text3"> PAY CLIENTS & EMPLOYEES WITH CRYPTO </h3>
                  </Col>
                </Row>
                <Row>
                  <Col size={12} sm={3} className="px-1">
                    <img className="apis-img1" src={projImg1} alt="Image" />
                  </Col>
                  <Col size={12} sm={3} className="px-1">

                    <img className="apis-img2" src={projImg2} alt="Image" />
                  </Col>
                  <Col size={12} sm={3} className="px-1">
                    <img className="apis-img3" src={projImg3} alt="Image" />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
