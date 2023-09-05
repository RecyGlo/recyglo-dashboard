import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CarbonReport from './Components/CarbonReport';

const Organizations = () => (
  <Container className="dashboard">
    <div className="carbon-bg">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Carbon Emission Report</h3>
          <h4>
            Carbon emission report item weights collected on different dates, filterable by
            item type for easy tracking and management.
          </h4>
        </Col>
      </Row>
      <Row>
        <CarbonReport />
      </Row>
    </div>
  </Container>
);

export default Organizations;
