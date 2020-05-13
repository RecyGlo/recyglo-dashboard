/* eslint-disable react/prop-types */
import React from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { Container, Row, Card, CardBody } from 'reactstrap';
import EditOrganizationForm from './components/EditOrganizationForm';
import { getUserDetailWithPromise } from '../../../redux/actions/apiActions/userActions';
import { updateOrganization } from '../../../redux/actions/apiActions/organizationActions';

// const OrganizationPage = () => (
class OrganizationPage extends React.Component {
  state = {
    organization: null,
  }

  componentWillMount() {
    this.getUserDetail();
  }

  getUserDetail = () => {
    const token = localStorage.getItem('jwt');
    const { id } = jwtDecode(token);
    getUserDetailWithPromise(id).then((response =>
      this.setState({
        organization: response.organizationId,
      })
    ));
  }

  // handleSubmit = (values) => {
  //   console.log(values);
  // }

  handleSubmit = (values) => {
    this.props.updateOrganization(
      values,
      // eslint-disable-next-line no-underscore-dangle
      this.state.organization._id,
    );
  }

  render() {
    const { organization } = this.state;
    return (
      <Container className="dashboard">
        <Row>
          <Card>
            <CardBody>
              <h2>Update your organization detail information</h2>
              {organization &&
                <EditOrganizationForm
                  initialValues={{
                  name: organization.name,
                  info: organization.info,
                  companyType: {
                    label: organization.companyType,
                    value: organization.companyType,
                  },
                  email: organization.email,
                  officePhoneNumber: organization.officePhoneNumber,
                  contactPersonName: organization.contactPersonName,
                  contactPersonPhoneNumber: organization.contactPersonPhoneNumber,
                  address: organization.address,
                  logo: organization.logo,
                }}
                  onSubmit={this.handleSubmit}
                />
              }
            </CardBody>
          </Card>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateOrganization: (data, organizationId) => {
    dispatch(updateOrganization(data, organizationId));
  },
});

export default connect(null, mapDispatchToProps)(OrganizationPage);
