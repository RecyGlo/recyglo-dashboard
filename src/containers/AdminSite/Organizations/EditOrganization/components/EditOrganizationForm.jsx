/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
// import DatePicker from 'react-datepicker';
import history from '../../../../../shared/utils/history';
import '../../../../../scss/component/date-time-picker.scss';
// import StartDatePicker from './EditStartDatePicker';
// import ExpiredDatePicker from './EditExpiredDatePicker';
import { CHANGE_EXPIRED_DATE, CHANGE_START_DATE, CHANGE_LOCATION } from '../../../../../redux/actions/apiActions/ActionTypes';
import renderSelectField from '../../../../../shared/components/form/Select';
import renderDropZoneField from '../../../../../shared/components/form/DropZone';
import renderInputField from '../../../../../shared/components/form/FieldComponents';
import location_icon from '../../../../../shared/img/location_icon.png';
import expand_icon from '../../../../../shared/img/Expand-icon.png';
import marker_icon from '../../../../../shared/img/marker.png';
import plus_icon from '../../../../../shared/img/plus_icon.png';
import minus_icon from '../../../../../shared/img/minus_icon.png';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhd2NoYXciLCJhIjoiY2theGNiMWhhMDU0NTJ5bm45d3JpdTZhbyJ9.jirgP7Ok6gUmSSBQpZWL9A';
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
    changeLocation: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      zoom: 12,
      location: {
        lng: 96.195129,
        lat: 16.866070,
      },
    };
  }
  componentWillMount() {
    // if (this.props.location !== null) {
    //   this.setState({
    //     lng: this.props.location.lng,
    //     lat: this.props.location.lat,
    //   });
    // }
    console.log(this.state.location);
    this.props.changeLocation(this.props.initialValues.location);
    if (this.props.initialValues.location !== undefined) {
      this.setState({
        location: this.props.initialValues.location,
      });
    }
  }
  componentDidMount() {
    const { location, zoom } = this.state;
    console.log(location);
    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [location.lng, location.lat],
      zoom,
    });
    // marker
    let marker = document.createElement('div');
    marker.className = 'marker';
    marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([this.state.location.lng, this.state.location.lat])
      .addTo(map);
    marker.on('dragend', () => {
      const { lng, lat } = marker.getLngLat();
      this.setState({
        location: {
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
        },
        zoom: map.getZoom().toFixed(2),
      });
      console.log(this.state.location);
      this.props.changeLocation((this.state.location));
    });
    // zoom in zoom out
    map.addControl(new mapboxgl.NavigationControl());
    // current location
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    }));
    // full screen
    map.addControl(new mapboxgl.FullscreenControl());
  }
  mapRef = React.createRef();
  redirectToListingPage = () => {
    history.push('/organizations');
    window.location.reload();
  }
  // handleChange = (lng, lat) => {
  //   this.setState({ location: { lng, lat } });
  //   // const location = this.state.location;
  //   console.log(this.props.location);
  // }

  render() {
    const { handleSubmit, initialValues } = this.props;
    const { location, zoom } = this.state;
    // console.log(location);

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
              <Field
                name="location.lat"
                component={renderInputField}
                label="lat"
                type="text"
                placeholder="Enter lat"
              />
              <Field
                name="location.lng"
                component={renderInputField}
                label="lng"
                type="text"
                placeholder="Enter lng"
              />
              <div style={{ width: '100%' }}>
                <div style={{ width: '70%', display: 'inline-block' }} name="location" >
                  <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${location.lng} Latitude: ${location.lat} Zoom: ${zoom}`}</div>
                  </div>
                  <div ref={this.mapRef} className="absolute top right left bottom" style={{ height: '400px' }} />
                </div>
                <div
                  style={{
                    width: '30%',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    paddingLeft: '15px',
                    }}
                >
                  <br /><h4 style={{ textAlign: 'center' }}>Please Select your organization location</h4>
                  <br />
                  <p>
                    {/* <span className="lnr lnr-map-marker" style={{ fontSize: '30px' }} /> */}
                    <img src={marker_icon} alt="marker icon" style={{ width: '30px', height: '30px' }} />
                    &ensp;This sign shows your selected location.
                  </p>
                  <p>
                    &nbsp;
                    <img src={plus_icon} alt="zoom in icon" style={{ width: '25px', height: '25px', margin: '0 auto' }} />
                    &ensp;&nbsp;Click me to zoom in!
                  </p>
                  <p>
                    <img src={minus_icon} alt="zoom out icon" style={{ width: '30px', height: '30px' }} />
                    &ensp;Click me to zoom out!
                  </p>
                  <p>
                    &nbsp;
                    <img src={location_icon} alt="Location icon" style={{ width: '25px', height: '25px' }} />
                    &ensp;&nbsp;Click me to show your current location!
                  </p>
                  <p>
                    &nbsp;
                    <img src={expand_icon} alt="expand icon" style={{ width: '25px', height: '25px' }} />
                    &ensp;&nbsp;Click me to get full screen mode!
                  </p>
                </div>
              </div>
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

const mapStateToProps = state => ({
  location: state.organizations.location,
});

const mapDispatchToProps = dispatch => ({
  changeStartDate: date => dispatch({
    type: CHANGE_START_DATE,
    payload: date,
  }),
  changeExpiredDate: date => dispatch({
    type: CHANGE_EXPIRED_DATE,
    payload: date,
  }),
  changeLocation: location => dispatch({
    type: CHANGE_LOCATION,
    payload: location,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'edit_organization',
  validate,
})(withTranslation('common')(EditOrganizationForm)));
