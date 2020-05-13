/* eslint-disable react/jsx-no-duplicate-props */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import '../../../../../scss/component/date-time-picker.scss';
import StartDatePicker from './StartDatePicker';
import ExpiredDatePicker from './ExpiredDatePicker';
import renderInputField from '../../../../../shared/components/form/FieldComponents';
import renderSelectField from '../../../../../shared/components/form/Select';
import history from '../../../../../shared/utils/history';

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

class AddOrganizationForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    changeStartDate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.hiddenInput = this.hiddenInput.bind(this);
  }

  state = {
    startDate: new Date(),
  }

  handleChange = (date) => {
    console.log(date.toISOString());
    this.setState({ startDate: date });
    this.props.changeStartDate(date.toISOString());
  }

  redirectToListingPage = () => {
    history.push('/organizations');
    window.location.reload();
  }

  hiddenInput = () => <input type="text" value={this.state.startDate} />;

  render() {
    const { handleSubmit } = this.props;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <form
              className="form form--horizontal"
              onSubmit={handleSubmit}
            >
              <Field
                name="name"
                component="input"
                type="text"
                label="Organization Name"
                component={renderInputField}
                placeholder="Enter Organization Name"
              />
              <Field
                name="info"
                component="input"
                type="text"
                component={renderInputField}
                label="Organization Info"
                placeholder="Enter Organization Info"
              />
              <Field
                name="email"
                component="input"
                type="email"
                component={renderInputField}
                label="Email Address"
                placeholder="Enter Email Address"
              />
              <Field
                name="officePhoneNumber"
                component="input"
                type="text"
                component={renderInputField}
                label="Office Phone Number"
                placeholder="Enter Office Phone Number"
              />
              <Field
                name="contactPersonName"
                component="input"
                type="text"
                component={renderInputField}
                label="Contact Person Name"
                placeholder="Enter Contact Person Name"
              />
              <Field
                name="contactPersonPhoneNumber"
                component="input"
                type="text"
                component={renderInputField}
                label="Contact Person Phone Number"
                placeholder="Enter Contact Person Phone Number"
              />
              <Field
                name="address"
                component="textarea"
                type="text"
                component={renderInputField}
                label="Address"
                placeholder="Enter Address"
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
              <StartDatePicker />
              <ExpiredDatePicker />
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

export default reduxForm({
  form: 'add_organization_form',
  enableReinitialize: true,
  validate,
})(AddOrganizationForm);
