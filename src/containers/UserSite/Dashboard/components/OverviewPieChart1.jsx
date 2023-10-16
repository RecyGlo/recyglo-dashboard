/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col } from 'reactstrap';

const wastes = {
  Papers: 'Paper',
  Plastics: 'Plastic',
  Cans: 'Can',
  Glasses: 'Glass',
  'E-waste': 'E-waste',
  Organic: 'Organic',
};

class OverviewSemiDonutChart extends PureComponent {
  render() {
    const { data } = this.props;

    // Define chartData here based on the provided data
    const chartData = data.map(item => ({
      x: wastes[item.name],
      y: item.quantity,
    }));

    const chartOptions = {
      chart: {
        type: 'donut',
      },
      labels: chartData.map(item => item.x),
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '50%', // Adjust the size to control the thickness of the donut
          },
        },
      },
      // Set the desired height for the chart
      height: 250, // You can adjust this value
    };

    return (
      <Col xs={12} md={12} lg={12} xl={12}>
        {chartData.length > 0 && (
          <ReactApexChart
            options={chartOptions}
            series={chartData.map(item => item.y)}
            type="donut"
            height={chartOptions.height} // Set the same height as in chartOptions
          />
        )}
      </Col>
    );
  }
}

export default OverviewSemiDonutChart;
