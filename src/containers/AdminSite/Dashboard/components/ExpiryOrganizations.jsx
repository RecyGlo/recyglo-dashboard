/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Panel from '../../../../shared/components/Panel';
import { getContractExpries } from '../../../../redux/actions/apiActions/miscActions';

class ContractExpries extends PureComponent {
  componentWillMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getContractExpries();
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { contractExpries } = this.props.misc;
    return (
      <Panel lg={6} xl={6} md={12} xs={12} title="Contract Expiries" style={{ maxHeight: 500 }}>
        {/* {JSON.stringify(contractExpries)} */}
        <div style={{ maxHeight: 300, overflowY: 'scroll', overflowX: 'hidden' }}>
          {contractExpries
            && contractExpries.map(prop => (
              <div className="dashboard__competitor">
                <div className="dashboard__competitor-info">
                  <p className="dashboard__competitor-name">{prop.name}</p>
                  <p
                    className={
                      new Date(prop.expiredDate) < new Date()
                        ? 'dashboard__competitor-result-red'
                        : 'dashboard__competitor-result-green'}
                  >
                    {new Date(prop.expiredDate).toDateString()}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
        {/* <Link className="dashboard__competitor" to="/account/profile">
          <div className="dashboard__competitor-info">
            <p className="dashboard__competitor-name">SOS Clinic</p>
            <p className="dashboard__competitor-result">12 Aug 2019</p>
          </div>
        </Link>
        <Link className="dashboard__competitor" to="/account/profile">
          <div className="dashboard__competitor-info">
            <p className="dashboard__competitor-name">SOS Clinic</p>
            <p className="dashboard__competitor-result">12 Aug 2019</p>
          </div>
        </Link>
        <Link className="dashboard__competitor" to="/account/profile">
          <div className="dashboard__competitor-info">
            <p className="dashboard__competitor-name">SOS Clinic</p>
            <p className="dashboard__competitor-result">12 Aug 2019</p>
          </div>
        </Link>
        <Link className="dashboard__competitor" to="/account/profile">
          <div className="dashboard__competitor-info">
            <p className="dashboard__competitor-name">SOS Clinic</p>
            <p className="dashboard__competitor-result">12 Aug 2019</p>
          </div>
        </Link> */}
      </Panel>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getContractExpries: () => {
    dispatch(getContractExpries());
  },
});

const mapStateToProps = state => ({
  misc: state.misc,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContractExpries);
