/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList,
} from 'recharts';

const CustomizedAxisTick = (props) => {
  const {
    x, y, payload,
  } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
    </g>
  );
};

export default class TrendLineChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  state = {
    data: null,
  }

  componentWillMount() {
    const { data } = this.props;
    for (let i = 0; i < data.length; i += 1) {
      data[i].value = parseFloat(data[i].value.toFixed(2));
    }
    this.setState({
      data,
    });
  }

  render() {
    const { color } = this.props;
    const { data } = this.state;
    return (
      <ResponsiveContainer width={1100} height={500}>
        {data &&
          <LineChart
            data={data}
            margin={{
              top: 5, right: 0, left: 50, bottom: 40,
            }}
          >
            <CartesianGrid />
            <XAxis
              tick={<CustomizedAxisTick />}
              interval={0}
              dataKey="date"
              padding={{ left: 50, right: 50 }}
            />
            <YAxis padding={{ top: 40 }} />
            <Line dataKey="value" stroke={color} dot={{ fill: color }} strokeWidth={2}>
              <LabelList dataKey="value" position="top" />
            </Line>
          </LineChart>
        }
      </ResponsiveContainer>
    );
  }
}
