/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from "react";
import ReactApexChart from "react-apexcharts";
import { Col } from "reactstrap";

const wastes = {
  Papers: "Paper",
  Plastics: "Plastic",
  Cans: "Can",
  Glasses: "Glass",
  "E-waste": "E-waste",
  Organic: "Organic",
};

class OverviewRadialBarChart extends PureComponent {
  render() {
    const { data } = this.props;

    // Define chartData here based on the provided data
    const chartData = data.map(item => ({
      x: wastes[item.name],
      y: item.quantity,
    }));

    const chartOptions = {
      chart: {
        type: "radialBar",
        height: 350, // Adjust the height as needed
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: "70%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              offsetY: 0, // Adjust the offset as needed
              fontSize: "20px",
            },
          },
        },
      },
      labels: chartData.map(item => item.x),
    };

    return (
      <Col xs={12} md={12} lg={12} xl={12}>
        {chartData.length > 0 && (
          <ReactApexChart
            options={chartOptions}
            series={chartData.map(item => item.y)}
            type="radialBar"
            height={chartOptions.height}
          />
        )}
      </Col>
    );
  }
}

export default OverviewRadialBarChart;
