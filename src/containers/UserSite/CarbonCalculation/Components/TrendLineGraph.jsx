/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import "../../../../scss/carbon/report.scss";

// const wastes = {
//   Papers: 'paper',
//   Plastics: 'plastic',
//   Cans: 'can',
//   Glasses: 'glass',
//   'E-waste': 'e-waste',
//   Organic: 'organic',
// };

class Trendline extends PureComponent {
  getDirectrecycle = (wasteType) => {
    switch (wasteType) {
      case "Papers":
        return 1.266;
      case "Plastics":
        return 2.148;
      case "Cans":
        return 1.102;
      case "E-waste":
        return 0;
      case "Glasses":
        return 0.569;
      case "Organic":
        return 0;
      default:
        return 0; // Default multiplier (1) for other waste types
    }
  };
  getAvoidedrecycle = (wasteType) => {
    switch (wasteType) {
      case "Papers":
        return 0.971;
      case "Plastics":
        return 1.899;
      case "Cans":
        return 2.949;
      case "E-waste":
        return 0;
      case "Glasses":
        return 1.042;
      case "Organic":
        return 0;
      default:
        return 0; // Default multiplier (1) for other waste types
    }
  };
  getDirectcomposting = (wasteType) => {
    switch (wasteType) {
      case "Organic":
        return 0.1770;
      default:
        return 0; // Default multiplier (1) for other waste types
    }
  };
  getAvoidedfertilizer = (wasteType) => {
    switch (wasteType) {
      case "Organic":
        return 0.64539;
      default:
        return 0; // Default multiplier (1) for other waste types
    }
  };
  getAvoidedlandfilling = (wasteType) => {
    switch (wasteType) {
      case "Organic":
        return 0.8400;
      default:
        return 0; // Default multiplier (1) for other waste types
    }
  };
  calculateDirectRecycle = (data) => {
    let total = 0;
    Object.keys(data).forEach((item) => {
      const multiplier = this.getDirectrecycle(item);
      total += data[item].total * multiplier;
    });
    return total.toFixed(2);
  };
  calculateAvoidedRecycle = (data) => {
    let total = 0;
    Object.keys(data).forEach((item) => {
      const multiplier = this.getAvoidedrecycle(item);
      total += data[item].total * multiplier;
    });
    return total.toFixed(2);
  };
  calculateNetRecycle = (data) => {
    const directRecycleTotal = parseFloat(this.calculateDirectRecycle(data));
    const avoidedRecycleTotal = parseFloat(this.calculateAvoidedRecycle(data));

    // Calculate the difference
    const difference = directRecycleTotal - avoidedRecycleTotal;

    return difference.toFixed(2);
  };
  calculateDirectComposting = (data) => {
    let total = 0;
    Object.keys(data).forEach((item) => {
      const multiplier = this.getDirectcomposting(item);
      total += data[item].total * multiplier;
    });
    return total.toFixed(2);
  };
  calculateAvoidedfertilizer = (data) => {
    let total = 0;
    Object.keys(data).forEach((item) => {
      const multiplier = this.getAvoidedfertilizer(item);
      total += data[item].total * multiplier;
    });
    return total.toFixed(2);
  };
  calculateAvoidedlandfilling = (data) => {
    let total = 0;
    Object.keys(data).forEach((item) => {
      const multiplier = this.getAvoidedlandfilling(item);
      total += data[item].total * multiplier;
    });
    return total.toFixed(2);
  };
  calculateNetComposting = (data) => {
    const directCompostingTotal = parseFloat(this.calculateDirectComposting(data));
    const avoidedFertilizerTotal = parseFloat(this.calculateAvoidedfertilizer(data));
    const avoidedLandfillingTotal = parseFloat(this.calculateAvoidedlandfilling(data));

    // Calculate the difference
    const difference = directCompostingTotal - avoidedFertilizerTotal - avoidedLandfillingTotal;

    return difference.toFixed(2);
  };
  calculateTotalDirect = (data) => {
    const directRecycling = parseFloat(this.calculateDirectRecycle(data));
    const directComposting = parseFloat(this.calculateDirectComposting(data));

    // Calculate total
    const total = directRecycling + directComposting;

    return total.toFixed(2);
  };
  calculateTotalAvoided = (data) => {
    const avoidedRecycling = parseFloat(this.calculateAvoidedRecycle(data));
    const avoidedFertilizer = parseFloat(this.calculateAvoidedfertilizer(data));
    const avoidedLandfilling = parseFloat(this.calculateAvoidedlandfilling(data));

    // Calculate total
    const total = avoidedRecycling + avoidedFertilizer + avoidedLandfilling;

    return total.toFixed(2);
  };
  calculateTotalNet = (data) => {
    const totalDirect = parseFloat(this.calculateTotalDirect(data));
    const totalAvoided = parseFloat(this.calculateTotalAvoided(data));

    const net = totalDirect - totalAvoided;

    return net.toFixed(2);
  };
  render() {
    // const { total } = this.state;
    const { data } = this.props;
    const directRecycle = this.calculateDirectRecycle(data);
    const avoidedRecycle = this.calculateAvoidedRecycle(data);
    const netRecycle = this.calculateNetRecycle(data);
    const directComposting = this.calculateDirectComposting(data);
    const avoidedFertilizer = this.calculateAvoidedfertilizer(data);
    const avoidedLandfilling = this.calculateAvoidedlandfilling(data);
    const netComposting = this.calculateNetComposting(data);
    const totalDirect = this.calculateTotalDirect(data);
    const totalAvoided = this.calculateTotalAvoided(data);
    const totalNet = this.calculateTotalNet(data);
    return (
      <div className="emission-page">
        <div className="generation-content">
          <div className="report-title">
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
                    <td>Direct GHG emissions from the organization </td>
                    <td>
                      {totalDirect}kg of CO2-eq/tonne of mixed recyclables
                    </td>
                  </tr>
                  <tr>
                    <td>Avoided GHG emissions from the organization </td>
                    <td>
                      {totalAvoided}kg of CO2-eq/tonne of mixed recyclables
                    </td>
                  </tr>
                  <tr>
                    <th>Net GHG emissions from the organization </th>
                    <th>{totalNet}kg of CO2-eq/tonne of mixed recyclables</th>
                  </tr>
                </table>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <h5>GHG Emission from Recycling</h5>
              <h1 className="report-content">
                The Monthly Waste Composition report breaks down the percentage
                of paper, plastic, and cans within the waste generated each
                month
              </h1>
              <table>
                <tr>
                  <td>Direct GHG emissions from recycling </td>
                  <td>
                    {directRecycle} kg of CO2-eq/tonne of mixed recyclables
                  </td>
                </tr>
                <tr>
                  <td>Avoided GHG emissions from recycling </td>
                  <td>
                    {avoidedRecycle}kg of CO2-eq/tonne of mixed recyclables
                  </td>
                </tr>
                <tr>
                  <th>Net GHG emissions from recycling </th>
                  <th>{netRecycle}kg of CO2-eq/tonne of mixed recyclables</th>
                </tr>
              </table>
              <br />
              <br />
              <br />
              <div style={{ width: "100%" }}>
                <h5>GHG Emission from Composting</h5>
                {/* <h4>
              Common Items found in waste audits performed for months period
            </h4> */}
                <h1 className="report-content">
                  The Monthly Waste Composition report breaks down the
                  percentage of paper, plastic, and cans within the waste
                  generated each month
                </h1>
                <table>
                  {/* <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr> */}
                  <tr>
                    <td>Direct GHG emissions from composting </td>
                    <td>{directComposting}kg of CO2-eq/tonne of waste</td>
                  </tr>
                  <tr>
                    <td>
                      Avoided GHG emissions from chemical fertilizer production{" "}
                    </td>
                    <td>{avoidedFertilizer}kg of CO2-eq/tonne of waste</td>
                  </tr>
                  <tr>
                    <td>
                      Avoided GHG emissions from organic waste landfilling{" "}
                    </td>
                    <td>{avoidedLandfilling}kg of CO2-eq/tonne of waste</td>
                  </tr>
                  <tr>
                    <th>
                      Net GHG emissions from composting (life cycle perspective){" "}
                    </th>
                    <th>{netComposting}kg of CO2-eq/tonne of waste</th>
                  </tr>
                </table>
              </div>
              <br />
              <div style={{ width: "100%" }}>
                <h5>GHG Emission from Landfilling</h5>
                {/* <h4>
              Common Items found in waste audits performed for months period
            </h4> */}
                <h1 className="report-content">
                  The Monthly Waste Composition report breaks down the
                  percentage of paper, plastic, and cans within the waste
                  generated each month
                </h1>
                <table>
                  {/* <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr> */}
                  <tr>
                    <td>
                      Direct GHG emission from mixed waste landfilling/open
                      dumping
                    </td>
                    <td>0</td>
                    <td>kg of CO2-eq/tonne of mixed waste</td>
                  </tr>
                  <tr>
                    <th>Total GHG emissions from landfilling </th>
                    <th>0</th>
                    <th>kg of CO2-eq/tonne of mixed waste</th>
                  </tr>
                </table>
              </div>
              {/* <h3>Summary</h3>
              {months.length > 1 ?
                <p>Total ({months.length}) Months</p>
              :
                months.map(item => (
                  <p>{item}</p>
                ))
              }
              <Row>
                {data && Object.keys(data).map((item, key) => (
                  <Col key={key} md={6} lg={2} style={{ paddingTop: '20px' }}>
                    <ul style={{ listStyle: 'inside', textAlign: 'center' }}><li className="list-text"><h2 className="weight">{(data[item].total.toFixed(2) * this.getMultiplier(item)).toFixed(2)} <span className="kg"> KG </span></h2> of {item} waste was recycled by {organization}.</li></ul>
                  </Col>
                ))}
                {data && Object.keys(data).map((item, key) => (
                  <Col key={key} md={6} lg={6} style={{ marginTop: '10px' }}>
                    <h5 style={{ textAlign: 'center' }}>{wastes[item].charAt(0).toUpperCase() + wastes[item].slice(1)}</h5>
                    <ul style={{ listStyle: 'inside', textAlign: 'center' }}><li>{organization} recycled {data[item].total.toFixed(2)} KG of recyclable {wastes[item]} waste</li></ul>
                  </Col>
                ))}
                <Col md={6} lg={2} style={{ paddingTop: '20px' }}>
                  <ul style={{ listStyle: 'inside', textAlign: 'center' }}>
                    <li className="list-text">
                      <h2 className="weight">
                        {totalWaste} <span className="kg"> KG </span>
                      </h2>
                      Total waste recycled by {organization}.
                    </li>
                  </ul>
                </Col>
              </Row> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trendline;
