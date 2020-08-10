import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';

const Organizations = () => (
  <Container className="dashboard">
    <Row>
      <Col md={9}>
        <h3 className="page-title">Data</h3>
      </Col>
    </Row>
    <Row>
      <DataTable />
    </Row>
  </Container>
);

export default Organizations;
