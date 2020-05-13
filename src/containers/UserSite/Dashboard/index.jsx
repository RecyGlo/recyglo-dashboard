/* eslint-disable react/prop-types */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import Select from 'react-select';

import { getTotalWasteByOrganization } from '../../../redux/actions/apiActions/miscActions';
import MontlyReportChart from './components/MontlyReportChart';
import ItemsReportTable from './components/ItemsReportTable';
import OverviewPieChart from './components/OverviewPieChart';
import TrendLineChart from './components/TrendLineChart';

const graphs = ['both', 'bar', 'line'];

class Dashboard extends React.Component {
  state = {
    graph: 'both',
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    // eslint-disable-next-line no-underscore-dangle
    this.props.getTotalWasteByOrganization(user.organizationId._id);
  }

  handleChange = (value) => {
    this.setState({ graph: value.value });
  };

  render() {
    const { misc } = this.props;
    const { graph } = this.state;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Dashboard</h3>
          </Col>
        </Row>
        <Row>
          {misc && misc.totalWastesByOrganization &&
            <OverviewPieChart data={misc.totalWastesByOrganization} />
          }
          <ItemsReportTable />
        </Row>

        <div style={{ margin: 30 }}>
          <h4>Please select the graph type to be shown.</h4>
          <Row style={{ width: 400, margin: 30 }}>
            <Select
              name="Graphs"
              onChange={this.handleChange}
              options={graphs.map((prop, key) => (
                  { key, label: prop, value: prop }
                ))
              }
              clearable={false}
              className="react-select"
              placeholder="Graphs"
              classNamePrefix="react-select"
            />
          </Row>
        </div>
        {graph === 'bar' &&
          <Row><MontlyReportChart /></Row>
        }
        {graph === 'line' &&
          <Row><TrendLineChart /></Row>
        }
        {graph === 'both' &&
          <Row>
            <MontlyReportChart />
            <TrendLineChart />
          </Row>
        }
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTotalWasteByOrganization: (organizationId) => {
    dispatch(getTotalWasteByOrganization(organizationId));
  },
});

const mapStateToProps = state => ({
  misc: state.misc,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
