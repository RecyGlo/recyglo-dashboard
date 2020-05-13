/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import history from '../../../../../shared/utils/history';


class EditUserForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  redirectToHomePage = () => {
    history.push('/');
    window.location.reload();
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Old Password</span>
                <div className="form__form-group-field">
                  <Field
                    name="currentPassword"
                    component="input"
                    type="password"
                    placeholder="Enter Current Password"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">New Password</span>
                <div className="form__form-group-field">
                  <Field
                    name="newPassword"
                    component="input"
                    type="password"
                    placeholder="Enter New Password"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Retype New Password</span>
                <div className="form__form-group-field">
                  <Field
                    name="retypePassword"
                    component="input"
                    type="password"
                    placeholder="Retype New Password"
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Change Password</Button>
                <Button color="secondary" onClick={() => this.redirectToHomePage()}>
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

export default reduxForm({
  form: 'edit_user_profile',
})(EditUserForm);
