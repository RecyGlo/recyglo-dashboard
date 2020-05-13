/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderRadioButtonField from '../../../../../../shared/components/form/RadioButton';
import history from '../../../../../../shared/utils/history';

class PlasticTest extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirectToTrainingPage = () => {
    history.push('/training');
    window.location.reload(true);
  }

  // state = {
  //   questions: [
  //     {
  //       question: 'What is 8 x 1?',
  //       answers: [
  //         '5',
  //         '6',
  //         '7',
  //         '8',
  //       ],
  //       correctAnswer: 3,
  //     },
  //     {
  //       question: 'What is 5 x 1?',
  //       answers: [
  //         '7',
  //         '5',
  //         '8',
  //         '6',
  //       ],
  //       correctAnswer: 1,
  //     },
  //     {
  //       question: 'What is 7 x 1?',
  //       answers: [
  //         '7',
  //         '8',
  //         '5',
  //         '6',
  //       ],
  //       correctAnswer: 0,
  //     },
  //     {
  //       question: 'What is 3 x 2?',
  //       answers: [
  //         '8',
  //         '5',
  //         '7',
  //         '6',
  //       ],
  //       correctAnswer: 3,
  //     },
  //   ],
  // };

  CORRECT_ANS = {
    Q1: '3',
    Q2: '2',
    Q3: '1',
    Q4: '4',
    Q5: '2',
    Q6: '2',
    Q7: '1',
    Q8: '2',
    Q9: '3',
    Q10: '1',
    Q11: '1',
    Q12: '3',
  }
  handleSubmit = (values) => {
    // for (const key in values) {
    // }
    let result = 0;
    let persentage = 0;
    let perFloat = 0;
    Object.keys(values).forEach((key) => {
      if (this.CORRECT_ANS[key] === values[key]) {
        result += 1;
        persentage = (100 / 12) * result;
        perFloat = parseFloat(persentage).toFixed(2);
        console.log(key);
      }
    });
    window.alert(`Result= ${result} / 12 Persentage=  ${perFloat}  %`);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <h2 style={{ textAlign: 'center' }}>Plastic Waste Quiz</h2><br /><br />
            <form className="form" onSubmit={handleSubmit(this.handleSubmit)}>
              <div className="form__form-group">
                <span className="quiz__text">1.What is a best way to avoid plastic waste?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="Landfill"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="Incineration"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="Refuse"
                    radioValue="3"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="Recycle"
                    radioValue="4"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">2.Incinerating plastic is a good way to dispose plastic waste.</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q2"
                    component={renderRadioButtonField}
                    label="True"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q2"
                    component={renderRadioButtonField}
                    label="False"
                    radioValue="2"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">3.Burning plastic is harmful to lungs, eyes, skin and air pollution.</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q3"
                    component={renderRadioButtonField}
                    label="True"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q3"
                    component={renderRadioButtonField}
                    label="False"
                    radioValue="2"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">4.Plastic is not only found in the ocean. What percentage of the world’s sea bird have plastic rubbish in their guts?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q4"
                    component={renderRadioButtonField}
                    label="50%"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q4"
                    component={renderRadioButtonField}
                    label="60%"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q4"
                    component={renderRadioButtonField}
                    label="70%"
                    radioValue="3"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q4"
                    component={renderRadioButtonField}
                    label="90%"
                    radioValue="4"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">5.Which type of plastic is safe to use for human?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q5"
                    component={renderRadioButtonField}
                    label="PET"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q5"
                    component={renderRadioButtonField}
                    label="PP"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q5"
                    component={renderRadioButtonField}
                    label="PS"
                    radioValue="3"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">6.What is the lifespan of a single used plastic bottle?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q6"
                    component={renderRadioButtonField}
                    label="100 years"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q6"
                    component={renderRadioButtonField}
                    label="450 years"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q6"
                    component={renderRadioButtonField}
                    label="700 years"
                    radioValue="3"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">7.Reducing the use of plastic is everybody&apos;s responsibility.</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q7"
                    component={renderRadioButtonField}
                    label="True"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q7"
                    component={renderRadioButtonField}
                    label="False"
                    radioValue="2"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">8. Polyethylene Styrofoam (PS) can usable to contain hot food.</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q8"
                    component={renderRadioButtonField}
                    label="True"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q8"
                    component={renderRadioButtonField}
                    label="False"
                    radioValue="2"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">9. Why is plastic dangerous for marine life?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q9"
                    component={renderRadioButtonField}
                    label="They mistake it for food and cannot digest it."
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q9"
                    component={renderRadioButtonField}
                    label="They can get tangled in it which hinders their ability to swim."
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q9"
                    component={renderRadioButtonField}
                    label="Both a and b (correct)."
                    radioValue="3"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q9"
                    component={renderRadioButtonField}
                    label="It is not dangerous because they use plastic waste for habitats."
                    radioValue="4"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">10. Where does the majority of plastic waste end up?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q10"
                    component={renderRadioButtonField}
                    label="Ocean"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q10"
                    component={renderRadioButtonField}
                    label="Landfill"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q10"
                    component={renderRadioButtonField}
                    label="Burnt"
                    radioValue="3"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q10"
                    component={renderRadioButtonField}
                    label="Recycled"
                    radioValue="4"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">11. There are many alternatives to single use plastic products.</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q11"
                    component={renderRadioButtonField}
                    label="True"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q11"
                    component={renderRadioButtonField}
                    label="False"
                    radioValue="2"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">12. Which of the following answers contain the top 5 contribution countries to the world’s plastic pollution problem?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q12"
                    component={renderRadioButtonField}
                    label="Russia, France, USA, Vietnam, India"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q12"
                    component={renderRadioButtonField}
                    label="Indonesia, Thailand, USA, China, France"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q12"
                    component={renderRadioButtonField}
                    label="Thailand, China, Indonesia, Vietnam, Philippines"
                    radioValue="3"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q12"
                    component={renderRadioButtonField}
                    label="USA, China, India, UK, Australia"
                    radioValue="4"
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit Answer</Button>
                <Button color="secondary" onClick={() => this.redirectToTrainingPage()}>
                  Cancel
                </Button><br />
              </ButtonToolbar>
              {/* {this.setState({ ans: 0 })} */}
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default reduxForm({
  form: 'plastic_test_form',
})(PlasticTest);
