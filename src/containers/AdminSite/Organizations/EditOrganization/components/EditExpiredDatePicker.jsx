/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import '../../../../../scss/component/date-time-picker.scss';
import { CHANGE_EXPIRED_DATE } from '../../../../../redux/actions/apiActions/ActionTypes';

class ExpiredDatePicker extends PureComponent {
  static propTypes = {
    changeExpiredDate: PropTypes.func.isRequired,
  };

  state = {
    expiredDate: null,
    updated: false,
  }

  componentDidUpdate() {
    if (this.props.initialValues && !this.state.updated) {
      this.setState({
        expiredDate: new Date(this.props.initialValues.expiredDate),
        updated: true,
      });
    }
  }

  handleChange = (date) => {
    this.setState({ expiredDate: date });
    this.props.changeExpiredDate(date.toISOString());
  }

  render() {
    return (
      <div className="form__form-group">
        <span className="form__form-group-label">Contract Expired Date</span>
        <div className="form__form-group-field">
          <DatePicker
            selected={this.state.expiredDate}
            onChange={this.handleChange}
            dateFormat="MMMM d, yyyy"
          />
        </div>
        <Field
          style={{ display: 'none' }}
          name="startDate"
          component="input"
          type="text"
        />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   initialValues: { startDate: state.organizations.startDate },
// });

const mapDispatchToProps = dispatch => ({
  changeExpiredDate: date => dispatch({
    type: CHANGE_EXPIRED_DATE,
    payload: date,
  }),
});

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'editOrgantionExpiredDatePicker',
  enableReinitialize: true,
})(ExpiredDatePicker));
