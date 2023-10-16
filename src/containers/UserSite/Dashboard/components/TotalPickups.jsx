/* eslint-disable react/prop-types */
import React from "react";
import { Col } from "reactstrap";

const TotalWays = ({ ways }) => (
  <Col md={12} xl={12} lg={6} xs={12}>
    <div className="summary-block">
      <div className="dashboard__booking-total-container">
        <h4 className="dashboard__booking-total-title dashboard__booking-total-title--blue">
          {ways}
        </h4>
      </div>
      <h5 className="dashboard__booking-total-description">Total Pickups</h5>
      {/* <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
          <p className="dashboard__booking-card-progress-label progress__label">{growthRate}%</p>
          <Progress value={growthRate} />
        </div> */}
    </div>
  </Col>
);

export default TotalWays;
