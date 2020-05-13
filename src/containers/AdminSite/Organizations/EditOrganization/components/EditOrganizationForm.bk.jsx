/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
// import DatePicker from 'react-datepicker';
import history from '../../../../../shared/utils/history';
import '../../../../../scss/component/date-time-picker.scss';
import StartDatePicker from './EditStartDatePicker';
import ExpiredDatePicker from './EditExpiredDatePicker';
import { CHANGE_EXPIRED_DATE, CHANGE_START_DATE } from '../../../../../redux/actions/apiActions/ActionTypes';
import renderSelectField from '../../../../../shared/components/form/Select';
import renderDropZoneField from '../../../../../shared/components/form/DropZone';

const COMPANY_TYPES = [
  'Advertising',
  'Bank',
  'Beverages Manufacture',
  'Building Communities',
  'Business Building',
  'Car Rental & Transportation',
  'Clinic',
  'Consultancy of Businesses Transformation & Sustainability',
  'Consultant',
  'Embassy',
  'Fashion',
  'Garment Industries',
  'Hotel',
  'Households',
  'International Finance Corporation',
  'International School',
  'Maha Awba Agriculture Microfinance',
  'Midea & Advertising',
  'NGO',
  'RJE & Valentis Group',
  'Restaurant',
  'Shopping Mall',
  'Startup Hostel',
  'Synapse Original',
  'Telecommunication',
  'Trading',
  'Travel & Tour',
];


const renderItems = ({
  startDate, fields, meta: { error, submitFailed },
}) => (
  <ul style={{ listStyle: 'none' }}>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Contract
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index}>
        <div style={{ display: 'inline-block', width: '100%' }}>
          <h4 style={{ float: 'left' }}>Contract #{index + 1}</h4>
          <p onClick={() => fields.remove(index)} style={{ float: 'right', margin: '0 auto' }}>
            <span
              className="lnr lnr-trash"
              style={{ color: '#ff4861', cursor: 'pointer' }}
            />
          </p>
        </div>
        <StartDatePicker initialValues={{ startDate }} />
        <ExpiredDatePicker />
        <hr />
      </li>
    ))}
  </ul>
);


class EditOrganizationForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    startDate: null,
    expiredDate: null,
  }

  // handleChange = date => this.setState({ date })

  componentWillMount() {
    const { startDate, expiredDate } = this.props.initialValues;
    this.setState({
      startDate, expiredDate,
    });
    this.props.changeStartDate(startDate);
    this.props.changeExpiredDate(expiredDate);
  }

  redirectToListingPage = () => {
    history.push('/organizations');
    window.location.reload();
  }

  render() {
    const { handleSubmit, initialValues } = this.props;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Organization</span>
                <div className="form__form-group-field">
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Enter Organization Name"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Info</span>
                <div className="form__form-group-field">
                  <Field
                    name="info"
                    component="input"
                    type="text"
                    placeholder="Enter Organization Info"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Company Type</span>
                <div className="form__form-group-field">
                  <Field
                    name="companyType"
                    placeholder="Company Type"
                    component={renderSelectField}
                    options={COMPANY_TYPES
                      && COMPANY_TYPES.map((prop, key) => (
                        { key, label: prop, value: prop }
                      ))
                    }
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Email Address</span>
                <div className="form__form-group-field">
                  <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Office Phone Number</span>
                <div className="form__form-group-field">
                  <Field
                    name="officePhoneNumber"
                    component="input"
                    type="text"
                    placeholder="Enter Office Phone Number"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Contact Person Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="contactPersonName"
                    component="input"
                    type="text"
                    placeholder="Enter Contact Person Name"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Contact Person Phone Number</span>
                <div className="form__form-group-field">
                  <Field
                    name="contactPersonPhoneNumber"
                    component="input"
                    type="text"
                    placeholder="Enter Contact Person Phone Number"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Address</span>
                <div className="form__form-group-field">
                  <Field
                    name="address"
                    component="textarea"
                    type="text"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              {/* <div className="form__form-group">
                <span className="form__form-group-label">Joined Date</span>
                <div className="form__form-group-field">
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                  />
                </div>
              </div> */}
              <FieldArray name="items" component={renderItems} productTypes={this.state.productTypes} />
              {
                this.state.startDate && <StartDatePicker initialValues={{ startDate: this.state.startDate }} />
              }
              {
                this.state.expiredDate ?
                  <ExpiredDatePicker initialValues={{ expiredDate: this.state.expiredDate }} />
                :
                  <ExpiredDatePicker />
              }
              {initialValues.logo ?
                <div className="form__form-group">
                  <span className="form__form-group-label">Logo</span>
                  <div className="form__form-group-field" style={{ width: 200, height: 200, paddingLeft: 0 }}>
                    <img src={initialValues.logo} alt={initialValues.name} />
                  </div>
                </div>
                :
                <Field
                  name="logo"
                  component={renderDropZoneField}
                />
              }
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button color="secondary" onClick={() => this.redirectToListingPage()}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  changeStartDate: date => dispatch({
    type: CHANGE_START_DATE,
    payload: date,
  }),
  changeExpiredDate: date => dispatch({
    type: CHANGE_EXPIRED_DATE,
    payload: date,
  }),
});

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'edit_organization',
})(withTranslation('common')(EditOrganizationForm)));
