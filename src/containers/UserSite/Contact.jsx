/* eslint-disable max-len */
import React from 'react';
import { Container, Row, Card, CardBody, Col } from 'reactstrap';
import history from '../../shared/utils/history';
import facebook from '../../shared/img/ThankYou/facebook.png';
import linkedin from '../../shared/img/ThankYou/linked-in.png';

class Contact extends React.Component {
  componentWillMount() {
    console.log('a');
  }
  redirectToHomePage = () => {
    history.push('/');
    window.location.reload(true);
  }

  render() {
    return (
      <Container style={{ overflow: 'hidden', height: 'fit-content' }}>
        <div><h1>Contact Us</h1></div><br />
        <Row>
          <Col md={8} lg={8} sm={6}>
            <Card>
              <CardBody
                style={{
                  // margin: '0 auto',
                  backgroundColor: 'white',
                  color: 'gray',
                }}
              >
                <h4>About Recyglo</h4>
                <br />
                <td><span className="sidebar__link-icon lnr lnr-pencil" /></td>
                <td>At RecyGlo, we’re committed to providing environmentally friendly recycling solutions to Myanmar, and Malaysia. Founded in 2017, our mission is to process your materials in a safe, non-hazardous manner — with an aim to keep the world environmentally clean. We believe in promoting smart recycling habits in order to achieve long-lasting results.</td>
                <br />
                <span className="sidebar__link-icon lnr lnr-location" />
                No. 253/257 (A), 11th Floor, Corner of 29th Street, Anawrahta Road, Pabedan Township, Yangon.
                <br /><br />
                <span className="sidebar__link-icon lnr lnr-envelope" />
                <a href="mailto:contact@recyglo.com" style={{ color: '#4dbdb6' }}>contact@recyglo.com</a>
                <br /><br />
                <span className="sidebar__link-icon lnr lnr-phone-handset" />
                <a href="tel:+959404245800" style={{ color: '#4dbdb6' }}>(+95) 9 404 245 800</a>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} lg={4} sm={6}>
            <Card>
              <CardBody
                style={{
                  color: 'white',
                  backgroundColor: '#4dbdb6',
                }}
              >
                <h4 style={{ color: 'white' }}>Social</h4>
                <br />
                Follow us for quick updates, links and the odd joke on our very own social media pages. Additionally, use these to get in touch with us:
                <br /><br /><br />
                <img src={facebook} alt="facebook icon" style={{ width: '30px', height: '30px' }} />
                <a href="https://www.facebook.com/recyglo/" style={{ color: 'white' }}>
                  &ensp;<strong>Recyglo on Facebook</strong>
                </a>
                <br /><br />
                <img src={linkedin} alt="linkedin icon" style={{ width: '30px', height: '30px' }} />
                <a href="https://www.linkedin.com/company/recyglo-company-pte-ltd/" style={{ color: 'white' }}>
                  &ensp;<strong>Recyglo on LinkedIn</strong>
                </a>
                <br /><br />
                <a href="https://www.recyglo.com/" style={{ color: 'white' }}><u>Click here to chat with us right now.</u></a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default (Contact);
