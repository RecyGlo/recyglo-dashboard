/* eslint-disable max-len */
import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Container, Row, Card, CardBody, Col } from "reactstrap";
import history from "../../shared/utils/history";
import address from '../../shared/img/background/address.png';
import phone from '../../shared/img/background/phone.png';
import mail from '../../shared/img/background/mail.png';
// import facebook from "../../shared/img/ThankYou/facebook.png";
// import linkedin from "../../shared/img/ThankYou/linked-in.png";

class Contact extends React.Component {
  componentWillMount() {
    console.log("a");
  }
  redirectToHomePage = () => {
    history.push("/");
    window.location.reload(true);
  };

  render() {
    return (
      <Container style={{ overflow: "hidden", height: "fit-content" }}>
        <div className="contact-bg">
          <Row>
            <Col md={8} lg={8} sm={6}>
              <h4>Contact Us</h4>
              <p>
                At RecyGlo, we’re committed to providing environmentally
                friendly recycling solutions to Myanmar, and Malaysia. Founded
                in 2017, our mission is to process your materials in a safe,
                non-hazardous manner — with an aim to keep the world
                environmentally clean. We believe in promoting smart recycling
                habits in order to achieve long-lasting results.
              </p>
              <Row>
                <Col md={6}>
                  <img className="address" alt="about" src={address} />
                </Col>
                <Col md={6}>
                  <div className="lefter">
                    <p>
                      No. 253/257 (A), 11th Floor, Corner of 29th Street,
                      Anawrahta Road, Pabedan Township, Yangon.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <img className="phone" alt="about" src={phone} />
                </Col>
                <Col md={6}>
                  <div className="lefter">
                    {/* <a href="tel:+959404245800">(+95) 9 404 245 800</a> */}
                    <p>(+95) 9 404 245 800</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <img className="mail" alt="about" src={mail} />
                </Col>
                <Col md={6}>
                  <div className="lefter">
                    {/* <a href="mailto:contact@recyglo.com">contact@recyglo.com</a> */}
                    <p>contact@recyglo.com</p>
                  </div>
                </Col>
              </Row>
              {/* <Card className="contact-inside">
                <CardBody
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                >
                  <h4 style={{ color: "white" }}>Keep In Touch</h4>
                  <br />
                  Follow us for quick updates, links and the odd joke on our
                  very own social media pages. Additionally, use these to get in
                  touch with us:
                  <br />
                  <br />
                  <br />
                  <img
                    src={facebook}
                    alt="facebook icon"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <a
                    href="https://www.facebook.com/recyglo/"
                    style={{ color: "white" }}
                  >
                    &ensp;<strong>Recyglo on Facebook</strong>
                  </a>
                  <br />
                  <br />
                  <img
                    src={linkedin}
                    alt="linkedin icon"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <a
                    href="https://www.linkedin.com/company/recyglo-company-pte-ltd/"
                    style={{ color: "white" }}
                  >
                    &ensp;<strong>Recyglo on LinkedIn</strong>
                  </a>
                  <br />
                  <br />
                </CardBody>
              </Card> */}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Contact;
