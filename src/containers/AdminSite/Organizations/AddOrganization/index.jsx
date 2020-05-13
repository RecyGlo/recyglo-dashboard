import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import AddOrganizationForm from './components/AddOrganizationForm';
import { addNewOrganization } from '../../../../redux/actions/apiActions/organizationActions';

// eslint-disable-next-line react/prop-types
const BasicForm = ({ dispatch, startDate }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Add Organization</h3>
      </Col>
    </Row>
    <Row>
      <AddOrganizationForm onSubmit={values => dispatch(addNewOrganization(values, startDate))} />
    </Row>
  </Container>
);


const mapStateToProps = state => ({
  startDate: state.organizations.startDate,
});

export default connect(mapStateToProps)(BasicForm);
