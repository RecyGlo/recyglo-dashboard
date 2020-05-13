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

class PaperTest extends PureComponent {
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

  CORRECT_ANS = {
    Q1: '5',
    Q2: '1',
    Q3: '2',
    Q4: '2',
    Q5: '2',
    Q6: '3',
    Q7: '2',
    Q8: '1',
    Q9: '1',
    Q10: '3',
  }

  aaa = [
    { no: '1', value: 'aa' },
  ]

  ANS = {
    Q1: 'Yes, trees are vital. As the biggest plants on the planet, they give us Oxygen, store Carbon, stabilise the soil and give life to the world&apos;s wildlife.',
    Q2: 'The best and most effective way of eliminating waste in your life is refusing to create it in the first place.  To reduce the waste generation, everyone should conscious about what they consume and refuse what they don’t actually need.',
    Q3: 'Because they are usually coated with a thin plastic layer to make waterproof so it is not easy to recyclable.',
    Q4: 'The Environmental Protection Agency states that a clean paper can be recycled at 5 to 7 times.',
    Q5: 'A lot of tissue paper is made from already recycled paper. This  means that it can&apos;t be recycled again, the fibres are too short and will result in poor pulp in the recycling process.',
    Q6: 'Recycling 1 ton of Paper can save around 17 trees. The 17 trees saved can absorb a total of 250 pounds of carbon dioxide from the air each year. According to USI.',
    Q7: 'Thermal receipts, like coffee cups, cannot be recycled because they contain more than one material. Rather than using ink, these chemicals react to heat to reveal numbers and letters on the paper.',
    Q8: 'Paper and cardboard businesses can emit dust, smoke, fumes and gases which affect air quality.Especially Nitrogen oxides (NOx), Sulfur Oxide (SOx) and Carbon Dioxide (CO2) are emitted during paper production.',
    Q9: 'Trees stores large amount of Carbon Dioxide from the atmosphere as they grow. When the forest are cleared or burned, the stored Carbon is released into the atmosphere and causes global warming.',
    Q10: 'The fight to reduce paper waste needs to start from micro level such as write or print on the both sides of the paper. Try to print pages less often and as little as possible.',
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
        persentage = (100 / 10) * result;
        perFloat = parseFloat(persentage).toFixed(2);
        console.log(key);
      } else {
        return console.log(this.ANS[key]);
      }
      return console.log('');
    });
    window.alert(`Result= ${result} / 10 Persentage=  ${perFloat}  %`);
  };

  render() {
    const { handleSubmit } = this.props;
    const ans = this.aaa.map((a, index) => {
      if (a.no === this.CORRECT_ANS[index]) {
        return <p>{a.value}</p>;
      }
      return console.log('aaa');
    });
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <h2 style={{ textAlign: 'center' }}>Paper Waste Quiz</h2><br /><br />
            <form className="form" onSubmit={handleSubmit(this.handleSubmit)}>
              <div className="form__form-group">
                <span className="quiz__text">1.Trees are important for us because it .. </span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    className="red"
                    component={renderRadioButtonField}
                    label="gives O2"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="stores CO2"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="gives life to world wildlifes"
                    radioValue="3"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="stabilizes the soil"
                    radioValue="4"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q1"
                    component={renderRadioButtonField}
                    label="all of the above"
                    radioValue="5"
                  />
                </div>
                <div>{ans}</div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">2.Which R is more important?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q2"
                    component={renderRadioButtonField}
                    label="Refuse"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q2"
                    component={renderRadioButtonField}
                    label="Reuse"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q2"
                    component={renderRadioButtonField}
                    label="Reduce"
                    radioValue="3"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q2"
                    component={renderRadioButtonField}
                    label="Recycle"
                    radioValue="4"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">3.The single-used paper cups are recyclable.</span>
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
                <span className="quiz__text">4.How many time can we recycle paper?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q4"
                    component={renderRadioButtonField}
                    label="4"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q4"
                    component={renderRadioButtonField}
                    label="7"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q4"
                    component={renderRadioButtonField}
                    label="10"
                    radioValue="3"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">5.Tissue paper are recyclable.</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q5"
                    component={renderRadioButtonField}
                    label="True"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q5"
                    component={renderRadioButtonField}
                    label="False"
                    radioValue="2"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">6.Recycling 1 ton of paper saves around ____  trees.</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q6"
                    component={renderRadioButtonField}
                    label="5"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q6"
                    component={renderRadioButtonField}
                    label="9"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q6"
                    component={renderRadioButtonField}
                    label="17"
                    radioValue="3"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">7.Which paper is not recyclable?</span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q7"
                    component={renderRadioButtonField}
                    label="newspapers"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q7"
                    component={renderRadioButtonField}
                    label="thermal receipts"
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q7"
                    component={renderRadioButtonField}
                    label="envelope"
                    radioValue="3"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">8.Paper waste at the landfill can contaminated the underground water. </span>
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
                <span className="quiz__text">9.Deforestation cause more climate change emission than global transport. </span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q9"
                    component={renderRadioButtonField}
                    label="True"
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q9"
                    component={renderRadioButtonField}
                    label="False"
                    radioValue="2"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="quiz__text">10.Which of the follow helps to reduce the amount of paper waste? </span>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q10"
                    component={renderRadioButtonField}
                    label="Putting them into the rubbish bin."
                    radioValue="1"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q10"
                    component={renderRadioButtonField}
                    label="Putting them into the recycling bin."
                    radioValue="2"
                  />
                </div>
                <div className="form__form-group-field quiz__radio">
                  <Field
                    name="Q10"
                    component={renderRadioButtonField}
                    label="Using both sides of the paper."
                    radioValue="3"
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
  form: 'paper_test_form',
})(PaperTest);
