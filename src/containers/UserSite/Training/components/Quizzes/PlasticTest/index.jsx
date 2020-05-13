/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import PlasticTest from '../PlasticTest';

class Quizzes extends React.Component {
  render() {
    // const { organization } = this.state;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className="page-title">Quizzes</h3>
          </Col>
        </Row>
        <Row>
          <PlasticTest />
        </Row>
      </Container>
    );
  }
}

export default Quizzes;
