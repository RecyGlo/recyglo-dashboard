/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, CardBody, Col,
} from 'reactstrap';

const TotalCollectedWaste = ({ collectedWaste }) => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <CardBody className="dashboard__booking-card">
        <div className="dashboard__booking-total-container">
          <h5 className="dashboard__booking-total-title">
            {collectedWaste.map(z => z.quantity).reduce((x, y) => x + y).toFixed(2)} Kg
          </h5>
        </div>
        <h5 className="dashboard__booking-total-description">Total Collected Waste</h5>
      </CardBody>
    </Card>
  </Col>
);

export default TotalCollectedWaste;
