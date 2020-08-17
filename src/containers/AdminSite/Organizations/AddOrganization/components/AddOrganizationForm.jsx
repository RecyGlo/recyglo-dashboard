/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-quotes */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar, Row,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapboxgl from 'mapbox-gl';
import { CHANGE_LOCATION } from '../../../../../redux/actions/apiActions/ActionTypes';
import '../../../../../scss/component/date-time-picker.scss';
import StartDatePicker from './StartDatePicker';
import ExpiredDatePicker from './ExpiredDatePicker';
import renderInputField from '../../../../../shared/components/form/FieldComponents';
import renderSelectField from '../../../../../shared/components/form/Select';
import history from '../../../../../shared/utils/history';
import location_icon from '../../../../../shared/img/location_icon.png';
import expand_icon from '../../../../../shared/img/Expand-icon.png';
import marker_icon from '../../../../../shared/img/marker.png';
import plus_icon from '../../../../../shared/img/plus_icon.png';
import minus_icon from '../../../../../shared/img/minus_icon.png';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhd2NoYXciLCJhIjoiY2theGNiMWhhMDU0NTJ5bm45d3JpdTZhbyJ9.jirgP7Ok6gUmSSBQpZWL9A';
// const COMPANY_TYPES = [
//   'Advertising',
//   'Bank',
//   'Beverages Manufacture', // /
//   'Building Communities', // /
//   'Business Building',
//   'Car Rental & Transportation', // \
//   'Clinic',
//   'Consultancy of Businesses Transformation & Sustainability',
//   'Consultant',
//   'Embassy',
//   'Fashion',
//   'Garment Industries', // \
//   'Hotel',
//   'Households',
//   'International Finance Corporation',
//   'International School',
//   'Microfinance',
//   'Midea & Advertising',
//   'NGO',
//   'Restaurant', // /
//   'Shopping Mall', // /
//   'Startup Hostel',
//   'Synapse Original', // \
//   'Telecommunication',
//   'Trading',
//   'Travel & Tour',
// ];

const COMPANY_TYPES = [
  'Banking',
  'Beverages Manufacture',
  'Building Communities',
  'Car Rental & Transportation',
  'Clinic',
  'Construction',
  'Cooperate',
  'Education',
  'Entrepreneurial community',
  'Hospital',
  'Hotel',
  'Households',
  'INGO',
  'Law firm',
  'Media & Advertising',
  'Micro finance',
  'NGO',
  'Public Administration (i.e. Embassy)',
  'Restaraunt',
  'Services',
  'Shopping Mall',
  'Telecommunication',
  'Trading',
  'Travel & Tour',
];

class AddOrganizationForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    changeStartDate: PropTypes.func.isRequired,
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
      startDate: new Date(),
    };
    this.hiddenInput = this.hiddenInput.bind(this);
  }
  componentWillMount() {
    // if (this.props.location !== null) {
    //   this.setState({
    //     lng: this.props.location.lng,
    //     lat: this.props.location.lat,
    //   });
    // }
    console.log(this.props.location);
    this.props.changeLocation(this.props.location);
    // if (this.props.initialValues.location !== undefined) {
    //   this.setState({
    //     location: this.props.initialValues.location,
    //   });
    // }
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
    const { location, zoom } = this.state;
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
              <div style={{ width: '100%' }}>
                <div style={{ width: '70%', display: 'inline-block' }} name='location' >
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
              <Row style={{ marginTop: '15px' }}>
                <ButtonToolbar className="form__button-toolbar">
                  <Button color="primary" type="submit">Submit</Button>
                  <Button color="secondary" onClick={() => this.redirectToListingPage()}>
                    Cancel
                  </Button>
                </ButtonToolbar>
              </Row>
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
  if (!values.companyType) {
    errors.companyType = 'Required';
  }
  return errors;
};

const mapStateToProps = state => ({
  location: state.organizations.location,
});

const mapDispatchToProps = dispatch => ({
  changeLocation: location => dispatch({
    type: CHANGE_LOCATION,
    payload: location,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'add_organization_form',
  enableReinitialize: true,
  validate,
})(AddOrganizationForm));
