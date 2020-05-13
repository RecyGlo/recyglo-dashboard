import React from 'react';
import {
  Col,
  Container,
  Row,
  // Button,
} from 'reactstrap';
// import { FaPlus } from 'react-icons/fa';
// import TrainingTable from './components/TrainingTable';
import TrainingCourse from './components/TrainingCourse';

const Training = () => (
  <Container className="dashboard" style={{ overflow: 'hidden' }}>
    <Row>
      <Col md={9}>
        <h3 className="page-title">Training</h3>
      </Col>
      {/* <Col md={3}>
        <Button
          className="icon"
          color="success"
          style={{ float: 'right' }}
          // eslint-disable-next-line react/prop-types
          onClick={() => props.history.push('/training/add')}
        >
          <p>
            <FaPlus /> Request New Training
          </p>
        </Button>
      </Col> */}
    </Row>
    <Row>
      <TrainingCourse />
    </Row>
  </Container>
);

export default Training;
