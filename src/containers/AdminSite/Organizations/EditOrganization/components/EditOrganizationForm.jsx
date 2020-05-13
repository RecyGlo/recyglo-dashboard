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
// import StartDatePicker from './EditStartDatePicker';
// import ExpiredDatePicker from './EditExpiredDatePicker';
import { CHANGE_EXPIRED_DATE, CHANGE_START_DATE } from '../../../../../redux/actions/apiActions/ActionTypes';
import renderSelectField from '../../../../../shared/components/form/Select';
import renderDropZoneField from '../../../../../shared/components/form/DropZone';
import renderInputField from '../../../../../shared/components/form/FieldComponents';

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
  fields, meta: { error, submitFailed },
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
        <div className="form__form-group">
          <span className="form__form-group-label">Start Date</span>
          <div className="form__form-group-field">
            <Field
              name={`${item}.startDate`}
              component="input"
              type="text"
              placeholder="D MMMM YYYY"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">End Date</span>
          <div className="form__form-group-field">
            <Field
              name={`${item}.endDate`}
              component="input"
              type="text"
              placeholder="D MMMM YYYY"
            />
          </div>
        </div>
        <hr />
      </li>
    ))}
  </ul>
);


class EditOrganizationForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

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
              <Field
                name="name"
                type="text"
                placeholder="Enter Organization Name"
                component={renderInputField}
                label="Organization Name"
              />
              <Field
                name="info"
                component={renderInputField}
                label="Organization Info"
                type="text"
                placeholder="Enter Organization Info"
              />
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
              <Field
                name="email"
                component={renderInputField}
                label="Email"
                type="email"
                placeholder="Enter Email Address"
              />
              <Field
                name="officePhoneNumber"
                component={renderInputField}
                label="Office Phone Number"
                type="text"
                placeholder="Enter Office Phone Number"
              />
              <Field
                name="contactPersonName"
                component={renderInputField}
                label="Contact Person Name"
                type="text"
                placeholder="Enter Contact Person Name"
              />
              <Field
                name="contactPersonPhoneNumber"
                component={renderInputField}
                label="Contact Person Phone Number"
                type="text"
                placeholder="Enter Contact Person Phone Number"
              />
              <Field
                name="address"
                component={renderInputField}
                label="Address"
                type="text"
                placeholder="Enter Address"
              />
              <FieldArray name="contracts" component={renderItems} />
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

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.info) {
    errors.info = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[a-z|0-9._%+-]+@[a-z|0-9.-]+\.[a-z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.officePhoneNumber) {
    errors.officePhoneNumber = 'Required';
  } else if (!/^([0|/+/][0-9.,-/+/\s]{6,})$/i.test(values.officePhoneNumber)) {
    errors.officePhoneNumber = 'Invalid number';
  }
  if (!values.contactPersonName) {
    errors.contactPersonName = 'Required';
  } else if (!/^([A-Z\s@]{1,})$/i.test(values.contactPersonName)) {
    errors.contactPersonName = 'Invalid';
  }
  if (!values.contactPersonPhoneNumber) {
    errors.contactPersonPhoneNumber = 'Required';
  } else if (!/^([0|/+/][0-9.,-/+/\s]{6,})$/i.test(values.contactPersonPhoneNumber)) {
    errors.contactPersonPhoneNumber = 'Invalid number';
  }
  if (!values.address) {
    errors.address = 'Required';
  }
  return errors;
};


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
  validate,
})(withTranslation('common')(EditOrganizationForm)));
