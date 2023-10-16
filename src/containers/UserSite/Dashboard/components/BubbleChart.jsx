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

class OverviewBubbleChart extends PureComponent {
  render() {
    const { data } = this.props;

    // Define chartData here based on the provided data
    const chartData = data.map(item => ({
      x: wastes[item.name],
      y: item.quantity,
      z: item.quantity, // Size of the bubble
    }));

    const chartOptions = {
      chart: {
        type: "bubble",
        height: 350, // Adjust the height as needed
      },
      xaxis: {
        labels: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          show: true,
        },
      },
    };

    return (
      <Col xs={12} md={12} lg={12} xl={12}>
        {chartData.length > 0 && (
          <ReactApexChart
            options={chartOptions}
            series={[
              {
                name: "Bubble Chart",
                data: chartData,
              },
            ]}
            type="bubble"
            height={chartOptions.height}
          />
        )}
      </Col>
    );
  }
}

export default OverviewBubbleChart;
