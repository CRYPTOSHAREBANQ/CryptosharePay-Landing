import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ItemsCard } from "./ItemsCard";
import projImg1 from "../assets/img/magnifying-glass.png";
import projImg2 from "../assets/img/not-allowed.png";
import projImg3 from "../assets/img/coin.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Apis = () => {

  const apisNames = [
    {
      title: "ACCEPT CRYPTO PAYMENTS",
      imgUrl: projImg1,
    },
    {
      title: "ISSUE CRYPTO DIGITAL CARDS",
      imgUrl: projImg2,
    },
    {
      title: "PAY CLIENTS & EMPLOYEES WITH CRYPTO",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="apis" id="apis">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>CryptosharePay Use Cases</h2>
                <p>Pay Employees, International Contractors and Other Goods or Services with Crypto!</p>
                <Tab.Container id="apis-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          apisNames.map((apisNames, index) => {
                            return (
                              <ItemsCard
                                key={index}
                                {...apisNames}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
