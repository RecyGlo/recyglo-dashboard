/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import Picker from 'react-month-picker';
import circle from '../../../shared/img/background/circle.png';

import {
  getTotalWasteByOrganization,
  getTotalPickupsForEachOrganization,
  getContractDurationForEachOrganization,
} from '../../../redux/actions/apiActions/miscActions';
import MontlyReportChart from './components/MontlyReportChart';
// import ItemsReportTable from './components/ItemsReportTable';
import OverviewPieChart from './components/OverviewPieChart';
import OverviewBarChart from './components/OverviewBarChart';
import OverviewPieChart1 from './components/OverviewPieChart1';
import OverviewBubbleChart from './components/BubbleChart';
// import OverviewColumnChart from './components/OverviewColumnChart';
import TrendLineChart from './components/TrendLineChart';
import TotalCollectedWaste from './components/TotalCollectedWaste';
import TotalWays from './components/TotalPickups';
import ServicPeriod from './components/ServicPeriod';
// import TotalCarbonFootprint from './components/TotalCarbonFootprint';
import MonthBox from './components/MonthBox';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class Dashboard extends React.Component {
  state = {
    // graph: 'both',
    rangeValue: {
      from: { year: 2018, month: 4 },
      to: { year: new Date().getFullYear(), month: new Date().getMonth() },
    },
    years: {
      min: { year: 2018, month: 4 },
      max: { year: new Date().getFullYear(), month: new Date().getMonth() },
    },
    monthlyWaste: null,
    organizationId: null,
    duration: null,
    yearSet: false,
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    // eslint-disable-next-line no-underscore-dangle
    const organizationId = user.organizationId._id;
    this.setState({ organizationId });
    this.props.getTotalWasteByOrganization(organizationId);
    this.props.getTotalPickupsForEachOrganization(organizationId);
    this.props.getContractDurationForEachOrganization(organizationId);
  }

  componentDidUpdate() {
    if (this.props.misc.monthlyWaste && this.props.misc.monthlyWaste !== this.state.monthlyWaste) {
      const { monthlyWaste } = this.props.misc;
      const from = monthlyWaste[0].month;
      const to = monthlyWaste[monthlyWaste.length - 1].month;
      if (!this.state.yearSet) {
        const years = {
          min: { year: new Date(from).getFullYear(), month: new Date(from).getMonth() + 1 },
          max: { year: new Date(to).getFullYear(), month: new Date(to).getMonth() + 1 },
        };
        const rangeValue = {
          from: { year: new Date(from).getFullYear(), month: new Date(from).getMonth() + 1 },
          to: { year: new Date(to).getFullYear(), month: new Date(to).getMonth() + 1 },
        };
        this.setState({
          years,
          yearSet: true,
          rangeValue,
        });
      }
      // const duration = { from: new Date(monthlyWaste[0].month), to: monthlyWaste[monthlyWaste.length - 1].month };
      // const user = JSON.parse(localStorage.getItem('user'));
      // // eslint-disable-next-line no-underscore-dangle
      // const organizationId = user.organizationId._id;
      // this.props.getTotalWasteByOrganization(organizationId, duration);
      // this.props.getTotalPickupsForEachOrganization(organizationId, duration);
      // this.props.getContractDurationForEachOrganization(organizationId, duration);
      this.setState({ monthlyWaste });
    }
  }

  pickRange = React.createRef()

  // handleChange = (value) => {
  //   this.setState({ graph: value.value });
  // };

  resetDateRange = () => {
    // console.log(this.state.rangeValue);
    // console.log(this.state.years);
    const { organizationId } = this.state;
    const rangeValue = {
      from: this.state.years.min,
      to: this.state.years.max,
    };
    this.props.getTotalWasteByOrganization(organizationId);
    this.props.getTotalPickupsForEachOrganization(organizationId);
    this.setState({ rangeValue, duration: null });
  }

  _handleClickRangeBox = () => {
    this.pickRange.current.show();
  }

  handleRangeDissmis = (value) => {
    const { organizationId } = this.state;
    const duration = {
      from: new Date(months[value.from.month - 1] + ' ' + value.from.year),
      to: new Date(value.to.year, value.to.month, 0),
    };
    this.props.getTotalWasteByOrganization(organizationId, duration);
    this.props.getTotalPickupsForEachOrganization(organizationId, duration);
    this.setState({ rangeValue: value, duration });
  }

  render() {
    const { misc } = this.props;
    const {
      rangeValue, years, duration,
    } = this.state;
    console.log(misc);
    const pickerLang = {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      from: 'From',
      to: 'To',
    };

    const makeText = (m) => {
      console.log(m);
      if (m && m.year && m.month) return (pickerLang.months[m.month - 1] + '. ' + m.year);
      return '?';
    };

    return (
      <Container className="dash-theme-bg">
        <Row className="top-block-row">
          <Col md={5}>
            <div className="dashboard-block1">
              <h3>Overview Pie Chart</h3>
              {misc && misc.totalWastesByOrganization && (
                <OverviewPieChart1
                  data={misc.totalWastesByOrganization}
                  firstMonth={misc.monthlyWaste && misc.monthlyWaste[0].month}
                  lastMonth={
                    misc.monthlyWaste &&
                    misc.monthlyWaste[misc.monthlyWaste.length - 1].month
                  }
                />
              )}
            </div>
            <br />
            <div className="dashboard-block3">
              <Row>
                <Col md={6}>
                  <h3>Dashboard</h3>
                  <p>This is the summary of total waste collected by RecyGlo</p>
                </Col>
                <Col md={6}>
                  <img className="circle" alt="about" src={circle} />
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={7}>
            <div className="dashboard-block2">
              <h3>Overview Bar Chart</h3>
              {misc && misc.totalWastesByOrganization && (
                <OverviewBarChart
                  data={misc.totalWastesByOrganization}
                  firstMonth={misc.monthlyWaste && misc.monthlyWaste[0].month}
                  lastMonth={
                    misc.monthlyWaste &&
                    misc.monthlyWaste[misc.monthlyWaste.length - 1].month
                  }
                />
              )}
            </div>
          </Col>
          <Col md={4}>
            <br />
            {misc && misc.totalWastesByOrganization && (
              <TotalCollectedWaste
                collectedWaste={misc.totalWastesByOrganization}
              />
            )}
          </Col>
          <Col md={4}>
            <br />
            {misc && misc.totalPickupsByOrganization && (
              <TotalWays ways={misc.totalPickupsByOrganization} />
            )}
          </Col>
          <Col md={4}>
            <br />
            {misc && misc.contractDurationByOrganization && (
              <ServicPeriod contracts={misc.contractDurationByOrganization} />
            )}
          </Col>
        </Row>
        <label className="pick">
          <b>Pick A Span of Months</b>
          <span>(Available years from 2017 to this year)</span>
        </label>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div className="edit">
              <Picker
                ref={this.pickRange}
                years={years}
                value={rangeValue}
                lang={pickerLang}
                theme="light"
                onChange={this.handleRangeChange}
                onDismiss={this.handleRangeDissmis}
              >
                <MonthBox
                  value={
                    makeText(rangeValue.from) + " ~ " + makeText(rangeValue.to)
                  }
                  onClick={this._handleClickRangeBox}
                />
              </Picker>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <button
              className="btn btn-span"
              style={{ margin: "20px 0px", padding: 10 }}
              onClick={this.resetDateRange}
            >
              Reset
            </button>
          </Col>
        </Row>
        <Row className="top-block-row">
          <Col md={6}>
            <div className="dashboard-block4">
              <h3>Overview Radial Bar Chart</h3>
              {misc && misc.totalWastesByOrganization && (
                <OverviewPieChart
                  data={misc.totalWastesByOrganization}
                  firstMonth={misc.monthlyWaste && misc.monthlyWaste[0].month}
                  lastMonth={
                    misc.monthlyWaste &&
                    misc.monthlyWaste[misc.monthlyWaste.length - 1].month
                  }
                />
              )}
            </div>
          </Col>
          <Col md={6}>
            <div className="dashboard-block4">
              <h3>Overview Bubble Chart</h3>
              {misc && misc.totalWastesByOrganization && (
                <OverviewBubbleChart
                  data={misc.totalWastesByOrganization}
                  firstMonth={misc.monthlyWaste && misc.monthlyWaste[0].month}
                  lastMonth={
                    misc.monthlyWaste &&
                    misc.monthlyWaste[misc.monthlyWaste.length - 1].month
                  }
                />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <MontlyReportChart duration={duration} />
          <TrendLineChart duration={duration} />
        </Row>
        {/* <div style={{ margin: 30 }}>
          <h4 className="font">Please select the graph type to be shown.</h4>
          <Row style={{ width: 400, margin: 30 }}>
            <Select
              name="Graphs"
              onChange={this.handleChange}
              options={graphs.map((prop, key) => ({
                key,
                label: prop,
                value: prop,
              }))}
              clearable={false}
              className="react-select"
              placeholder="Graphs"
              classNamePrefix="react-select"
            />
          </Row>
        </div>
        {graph === "bar" && (
          <Row>
            <MontlyReportChart />
          </Row>
        )}
        {graph === "line" && (
          <Row>
            <TrendLineChart />
          </Row>
        )}
        {graph === "both" && (
          <Row>
            <MontlyReportChart duration={duration} />
            <TrendLineChart />
          </Row>
        )} */}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTotalWasteByOrganization: (organizationId, duration) => {
    dispatch(getTotalWasteByOrganization(organizationId, duration));
  },
  getTotalPickupsForEachOrganization: (organizationId, duration) => {
    dispatch(getTotalPickupsForEachOrganization(organizationId, duration));
  },
  getContractDurationForEachOrganization: (organizationId, duration) => {
    dispatch(getContractDurationForEachOrganization(organizationId, duration));
  },
});

const mapStateToProps = state => ({
  misc: state.misc,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
