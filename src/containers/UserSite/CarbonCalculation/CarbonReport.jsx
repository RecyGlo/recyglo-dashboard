/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
/* eslint-disable no-loop-func */
/* eslint-disable no-return-assign */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React from "react";
import { Row } from 'reactstrap';
import "../../../scss/carbon/report.scss";
import CreateQuarterModal from "./createquarter";

function CarbonReport() {
  return (
    <div className="emission-page">
      <div className="generation-content">
        <div className="report-title">
          <div style={{ width: "100%" }}>
            <h5>GHG Emission from Recycling</h5>
            <Row>
              <CreateQuarterModal />
            </Row>
            {/* <h4>
              Common Items found in waste audits performed for months period
            </h4> */}
            <h1 className="report-content">
              The Monthly Waste Composition report breaks down the percentage of
              paper, plastic, and cans within the waste generated each month
            </h1>
            <table>
              {/* <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr> */}
              <tr>
                <td>Direct GHG emissions from recycling </td>
                <td>193.12</td>
                <td>kg of CO2-eq/tonne of mixed recyclables</td>
              </tr>
              <tr>
                <td>Avoided GHG emissions from recycling </td>
                <td>125.23</td>
                <td>kg of CO2-eq/tonne of mixed recyclables</td>
              </tr>
              <tr>
                <th>Net GHG emissions from recycling </th>
                <th>253.54</th>
                <th>kg of CO2-eq/tonne of mixed recyclables</th>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <br />
          <div style={{ width: "100%" }}>
            <h5>GHG Emission from Composting</h5>
            {/* <h4>
              Common Items found in waste audits performed for months period
            </h4> */}
            <h1 className="report-content">
              The Monthly Waste Composition report breaks down the percentage of
              paper, plastic, and cans within the waste generated each month
            </h1>
            <table>
              {/* <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr> */}
              <tr>
                <td>Direct GHG emissions from composting </td>
                <td>193.12</td>
                <td>kg of CO2-eq/tonne of waste</td>
              </tr>
              <tr>
                <td>Avoided GHG emissions from composting </td>
                <td>125.23</td>
                <td>kg of CO2-eq/tonne of waste</td>
              </tr>
              <tr>
                <th>Net GHG emissions from composting </th>
                <th>253.54</th>
                <th>kg of CO2-eq/tonne of waste</th>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <br />
          <div style={{ width: "100%" }}>
            <h5>GHG Emission from Landfilling</h5>
            {/* <h4>
              Common Items found in waste audits performed for months period
            </h4> */}
            <h1 className="report-content">
              The Monthly Waste Composition report breaks down the percentage of
              paper, plastic, and cans within the waste generated each month
            </h1>
            <table>
              {/* <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr> */}
              <tr>
                <td>
                  Direct GHG emission from mixed waste landfilling/open dumping
                </td>
                <td>193.12</td>
                <td>kg of CO2-eq/tonne of mixed waste</td>
              </tr>
              <tr>
                <th>Total GHG emissions from landfilling </th>
                <th>0</th>
                <th>kg of CO2-eq/tonne of mixed waste</th>
              </tr>
            </table>
          </div>
          <div className="total-block">
            <div style={{ width: "100%" }}>
              <h5>Total GHG Emission from the organization</h5>
              {/* <h4>
              Common Items found in waste audits performed for months period
            </h4> */}
              <h1 className="report-content">
                The Monthly Waste Composition report breaks down
              </h1>
              <table>
                {/* <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr> */}
                <tr>
                  <td>Direct GHG emissions from recycling </td>
                  <td>193.12</td>
                  <td>kg of CO2-eq/tonne of mixed recyclables</td>
                </tr>
                <tr>
                  <td>Avoided GHG emissions from recycling </td>
                  <td>125.23</td>
                  <td>kg of CO2-eq/tonne of mixed recyclables</td>
                </tr>
                <tr>
                  <th>Net GHG emissions from recycling </th>
                  <th>253.54</th>
                  <th>kg of CO2-eq/tonne of mixed recyclables</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonReport;
