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
    expiredDate: new Date(),
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
            // showTimeSelect
            // timeFormat="HH:mm"
            // timeCaption="time"
            // timeIntervals={15}
            // dateFormat="MMMM d, yyyy h:mm aa"
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

const mapStateToProps = state => ({
  initialValues: { expiredDate: state.organizations.expiredDate },
});

const mapDispatchToProps = dispatch => ({
  changeExpiredDate: date => dispatch({
    type: CHANGE_EXPIRED_DATE,
    payload: date,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'newOrgantionExpiredDatePicker',
  enableReinitialize: true,
})(ExpiredDatePicker));
