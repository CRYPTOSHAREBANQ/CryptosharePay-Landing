import img1 from "../assets/img/money-banks.png";
import img2 from "../assets/img/money-companies.png";
import img3 from "../assets/img/money-insurance.png";
import img4 from "../assets/img/money-stores.png";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Company = () => {
  return (
    <section className="company" id="company">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="company-bx wow zoomIn">
              <h2>What is CryptoSharePay?</h2>
              <p>CryptosharePay offers a Simple solution that allows Businesses and Financial Institutions to Accept & Pay 100% with Cryptocurrency (In-Person/Online) using a Digital Card.</p>
              <Container>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <img className="background-image1-left" src={img1} alt="Image" />
                    <h3>
                      Banks
                    </h3>
                    <h4>
                      Allows Banks to Instantly Offer Cryptocurrency Wallets and a Digital Crypto Cards.
                    </h4>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <img className="background-image2-left" src={img2} alt="Image" />
                    <h3>
                      Insurance Companies
                    </h3>
                    <h4>
                      Allows Insurance Companies to Pay PolicyHolders & Beneficiaries in Crypto.
                    </h4>
                  </Col>
                </Row>
                <Row>
                <br></br>
                    <br></br>
                    <br></br>
                </Row>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <br></br>
                    <img className="background-image3-left" src={img3} alt="Image" />
                    <h3>
                      Companies
                    </h3>
                    <h4>
                      Companies can use our Technology to pay Contractors, Employees, and Vendors with Cryptocurrency.
                    </h4>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <img className="background-image4-left" src={img4} alt="Image" />
                    <h3>
                      Grocery Stores
                    </h3>
                    <h4>
                      Our Technology allows Grocery Stores to Accept Payment and Process Refunds with Crypto (In-Person/Online).
                    </h4>
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
