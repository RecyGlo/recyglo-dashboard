/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import {
  Col,
} from 'reactstrap';
import Select from 'react-select';
import { connect } from 'react-redux';

// import { CHANGE_FILTER_ORGANIZATION } from '../../../../redux/actions/apiActions/ActionTypes';
import { getOrganizationList } from '../../../../redux/actions/apiActions/organizationActions';
import { changeFilter } from '../../../../redux/actions/apiActions/miscActions';


class MontlyWasteCollection extends PureComponent {
  state = {
    organizations: [],
    organizationList: [],
  }

  componentWillMount() {
    this.props.getOrganizationList();
  }

  componentDidUpdate() {
    // console.log(this.props.organizations.list);
    if (this.props.organizations.list && this.state.organizationList !== this.props.organizations.list) {
      // eslint-disable-next-line no-underscore-dangle
      const organizations = this.props.organizations.list.map(item => ({ value: item._id, label: item.name }));
      // console.log(organizations);
      organizations.splice(0, 0, { value: '', label: 'All' });
      this.setState({
        organizations,
        organizationList: this.props.organizations.list,
      });
    }
  }

  handleChange = (value) => {
    this.props.changeFilter(value.value);
  };

  render() {
    // const organizationList = this.props.organizations.list;
    const { organizations } = this.state;

    return (
      <div style={{ margin: 30 }}>
        <h4>Please select organization to filter result in the following charts.</h4>
        {organizations &&
        <Col style={{ width: 400, margin: 30 }}>
          <Select
            name="Organizations"
            onChange={this.handleChange}
            options={organizations}
            clearable={false}
            className="react-select"
            placeholder="Organizations"
            classNamePrefix="react-select"
          />
        </Col>
          }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getOrganizationList: () => {
    dispatch(getOrganizationList());
  },
  changeFilter: (value) => {
    dispatch(changeFilter(value));
  },
});

const mapStateToProps = state => ({
  organizations: state.organizations,
});

export default connect(mapStateToProps, mapDispatchToProps)(MontlyWasteCollection);
