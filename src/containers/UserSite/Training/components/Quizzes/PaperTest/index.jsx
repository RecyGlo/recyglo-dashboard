/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import PaperTest from './PaperTest';

class PaperQuiz extends React.Component {
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
          <PaperTest />
        </Row>
      </Container>
    );
  }
}

export default PaperQuiz;
