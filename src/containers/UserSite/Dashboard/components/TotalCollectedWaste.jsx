/* eslint-disable react/prop-types */
import React from 'react';


const TotalCollectedWaste = ({ collectedWaste }) => (
  <div className="summary-block">
    <div className="dashboard__booking-total-container">
      <h4 className="dashboard__booking-total-title">
        {collectedWaste
          .map(z => z.quantity)
          .reduce((x, y) => x + y, 0)
          .toFixed(2)}
          Kg
      </h4>
    </div>
    <h5 className="dashboard__booking-total-description">
        Total Collected Waste
    </h5>
  </div>
);

export default TotalCollectedWaste;
