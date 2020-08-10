import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

// import SchedulesTable from './components/SchedulesTable';
// import ScheduleCalendar from './components/ScheduleCalendar';
// import DataTable from '../DataTable/index';
import YearlyCalendar from './components/YearlyCalendar';

const SchedulesPage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Schedule</h3>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <CardBody style={{ overflowX: 'scroll' }}>
            <YearlyCalendar />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SchedulesPage;
