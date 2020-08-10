/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {
  Card, CardBody, Col,
} from 'reactstrap';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ServicePeriod = contracts => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <CardBody className="dashboard__booking-card">
        <div className="dashboard__booking-total-container">
          <h5 className="dashboard__booking-total-title dashboard__booking-total-title--red">
            {/* eslint-disable jsx-indent */}
            {months[new Date(contracts.contracts.contractStartDate).getMonth()]} {new Date(contracts.contracts.contractStartDate).getFullYear()} - {months[new Date(contracts.contracts.contractEndDate).getMonth()]} {new Date(contracts.contracts.contractEndDate).getFullYear()}
          </h5>
        </div>
        <h5 className="dashboard__booking-total-description">Contract Period</h5>
        <div className="progress-wrap progress-wrap--small progress-wrap--pink-gradient progress-wrap--rounded">
          <br />
          {/* <br /> */}
          {/* <p className="dashboard__booking-card-progress-label progress__label" /> */}
          {/* <Progress value={100} /> */}
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ServicePeriod;
