import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';

const Organizations = () => (
  <Container className="dashboard">
    <div className="data-bg">
      <Row>
        <Col md={9}>
          <h3 className="page-title">Data table</h3>
          <p>
            Displays item weights collected on different dates, filterable by
            item type for easy tracking and management.
          </p>
        </Col>
      </Row>
      <Row>
        <DataTable />
      </Row>
    </div>
  </Container>
);

export default Organizations;
