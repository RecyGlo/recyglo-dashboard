/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-operators */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  PieChart, Pie, ResponsiveContainer, Sector, Legend,
  Cell,
} from 'recharts';

// const data = [
//   { name: 'E-waste', value: 400 },
//   { name: 'Metal', value: 300 },
//   { name: 'Organic', value: 300 },
// ];

const COLORS = {
  Plastic: '#de425b',
  Paper: '#5886a5',
  Can: '#78ab63',
  Organic: '#654321',
  'E-waste': '#fff200',
  Glass: '#EBA434',
};


const wastes = {
  Papers: 'Paper',
  Plastics: 'Plastic',
  Cans: 'Can',
  Glasses: 'Glass',
  'E-waste': 'E-waste',
  Organic: 'Organic',
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    // eslint-disable-next-line react/prop-types
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    // eslint-disable-next-line react/prop-types
    fill, payload, percent, name, quantity,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#aaa">{`${name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#aaa">
        {`${quantity} kg (${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
class OverviewPieChart extends PureComponent {
  state = {
    activeIndex: 0,
    data: null,
  };

  componentWillMount() {
    const data = [];
    if (this.props.data) {
      for (let i = 0; i < this.props.data.length; i += 1) {
        const tmp = {
          name: wastes[this.props.data[i].name],
          quantity: this.props.data[i].quantity,
        };
        data.push(tmp);
      }
    }
    this.setState({
      data,
    });
  }

  // eslint-disable-next-line no-shadow
  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Waste Composition (%)</h5>
            </div>
            {data &&
              <ResponsiveContainer height={300}>
                <PieChart width={500} height={300}>
                  <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={250}
                    cy={150}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="quantity"
                    // label
                    onMouseEnter={this.onPieEnter}
                  >
                    {
                      // eslint-disable-next-line react/no-array-index-key
                      data.map((entry, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                      ))
                    }
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            }
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default OverviewPieChart;
