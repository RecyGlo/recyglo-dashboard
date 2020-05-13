/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { connect } from 'react-redux';

import { getTrendlineWaste } from '../../../../redux/actions/apiActions/miscActions';
import Panel from '../../../../shared/components/Panel';


// const wastes = {
//   Papers: 'Paper',
//   Plastics: 'Plastic',
//   Cans: 'Can',
//   Glasses: 'Glass',
//   'E-waste': 'E-waste',
//   Organic: 'Organic',
// };

class MonthlyDataByOrganization extends PureComponent {
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    // eslint-disable-next-line no-underscore-dangle
    this.props.getTrendlineWaste(user.organizationId._id);
  }

  render() {
    const { trendlineWaste } = this.props.misc;

    return (
      <Panel
        lg={12}
        xl={12}
        md={12}
        title="Your Recycled Waste"
        subhead="Trendline of collected waste in RecyGlo's audits"
        panelClass="panel--narrow"
      >
        {trendlineWaste &&
        <ResponsiveContainer height={400}>
          <LineChart
            // layout="vertical"
            width={600}
            height={400}
            data={trendlineWaste}
            margin={{
              top: 10, right: 30, left: 0, bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              label={{
                offset: 0,
                value: 'Months',
                position: 'bottom',
              }}
            />
            <YAxis
              label={{
                value: 'Amount (kg)',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Tooltip />
            <Line dataKey="Plastic" stroke="#de425b" />
            <Line dataKey="Paper" stroke="#5886a5" />
            <Line dataKey="Can" stroke="#78ab63" />
            <Line dataKey="Organic" stroke="#654321" />
            <Line dataKey="E-waste" stroke="#e6dd3e" />
            <Line dataKey="Glass" stroke="#EBA434" />
          </LineChart>
        </ResponsiveContainer>
      }
      </Panel>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTrendlineWaste: (organizationId) => {
    dispatch(getTrendlineWaste(organizationId));
  },
});

const mapStateToProps = state => ({
  misc: state.misc,
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyDataByOrganization);
