/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */


import React from 'react';
import { Badge, Table } from 'reactstrap';
import { connect } from 'react-redux';

import { getTodayLogisticsSchedule } from '../../../../redux/actions/apiActions/logisticsActions';
import Panel from '../../../../shared/components/Panel';

class TodaySchedule extends React.Component {
  componentWillMount() {
    this.props.getTodayLogisticsSchedule();
  }

  render() {
    const { logistics } = this.props;
    return (
      <Panel xl={6} lg={12} title="Today Schedule">
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Organization Name</th>
              <th>Pick Up Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {console.log(logistics.wayType)}
            {logistics.today && logistics.today.length > 0 ?
              logistics.today.map((prop, key) => (
                <tr className={prop.wayType !== 'undefined' && prop.wayType === 'Dry' ? 'dashboard_wayType_blue' : (prop.wayType === 'Organic' ? 'dashboard_wayType_green' : '')}>
                  {/* {console.log(logistics.wayType)} */}
                  <td>{key + 1}</td>
                  <td>{prop.organizationId.name}</td>
                  <td>{new Date(prop.pickUpTime).toLocaleString()}</td>
                  <td><Badge color="success">{prop.status}</Badge></td>
                </tr>
              ))
              :
              <tr>
                <td colSpan="4">
                  <h4 style={{ width: '100%', textAlign: 'center' }}>No Schedule Today.</h4>
                </td>
              </tr>
            }
          </tbody>
        </Table>
      </Panel>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTodayLogisticsSchedule: () => {
    dispatch(getTodayLogisticsSchedule());
  },
});

const mapStateToProps = state => ({
  logistics: state.logistics,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaySchedule);
