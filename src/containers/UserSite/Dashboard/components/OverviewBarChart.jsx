/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/no-did-update-set-state */
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

class OverviewBasicBarChart extends PureComponent {
  render() {
    const { data } = this.props;

    // Define chartData here based on the provided data
    const chartData = data.map(item => ({
      x: wastes[item.name],
      y: item.quantity,
    }));

    const chartOptions = {
      chart: {
        type: 'horizontalBar', // Change to 'horizontalBar' for a horizontal bar chart
        height: 150, // Adjust the height as needed
      },
      xaxis: {
        categories: chartData.map(item => item.x),
      },
      plotOptions: {
        bar: {
          horizontal: true, // Make the bars horizontal
        },
      },
      // Customize other options as needed
    };

    return (
      <Col xs={12} md={12} lg={12} xl={12}>
        {chartData.length > 0 && (
          <ReactApexChart
            options={chartOptions}
            series={[
              {
                data: chartData.map(item => item.y),
              },
            ]}
            type="bar"
            height={chartOptions.height}
          />
        )}
      </Col>
    );
  }
}

export default OverviewBasicBarChart;

