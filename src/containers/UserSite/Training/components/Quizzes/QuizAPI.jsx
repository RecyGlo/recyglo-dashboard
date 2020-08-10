/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */

import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Row, Button, ButtonToolbar,
} from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
// import CryptoJS from 'crypto-js';
// import { Button } from 'reactstrap';
// import { connect } from 'react-redux';
// import { getQuizList } from '../../../../../../redux/actions/apiActions/quizActions';
import renderRadioButtonField from '../../../../../shared/components/form/RadioButton';
import history from '../../../../../shared/utils/history';
import { addNewUserAnsQuiz } from '../../../../../redux/actions/apiActions/userAnsQuizActions';

class PlasticTestAPI extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = {
      submit: '',
      sub: [false, false, false, false, false, false, false, false, false, false],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  redirectToTrainingPage = () => {
    history.push('/training');
    window.location.reload(true);
  }
  handleSubmit = (values) => {
    // for (const key in values) {
    // }
    const { Questions } = this.props.quizzes.detail;
    let arr = [false, false, false, false, false, false, false, false, false, false];
    let result = 0;
    let persentage = 0;
    // let perFloat = 0;
    let credit = '';
    const token = localStorage.getItem('jwt');
    const { id } = jwtDecode(token);
    console.log(values);
    Questions.forEach((prop, key) => (
      values[key] && (values[key].toString() === prop.CorrectAnswer.toString() ?
        (result += 1, arr[key] = false, console.log(values[key]))
        // console.log(prop.CorrectAnswer)
        :
        // console.log(prop.CorrectAnswer))
        (arr[key] = true, console.log(values[key])))
      // (values[prop.Question] === prop.CorrectAnswer ? arr[key] === false : arr[key] === true)
      // if (Object.keys(values).includes(prop.Question) && values[prop.Question] === prop.CorrectAnswer) {
      //   arr[prop] === false;
      //   console.log(arr[prop])
      // } else {
      //   arr[prop] === true;
      //   console.log(arr[prop])
      // }
    ));
    console.log(arr);
    persentage = (100 / 10) * result;
    if (persentage <= 50) {
      credit = 'red';
    } else {
      credit = '#00c0d4';
    }

    this.setState({
      submit:
  <div>
    <h4>Quiz Results</h4>
    <p>Please review the correct answer.</p>
    <h5 style={{ color: `${credit}` }}>You got {result} points. Your score is {persentage} %</h5>
  </div>,
      sub: arr,
    });

    // let USER_ANS = [{}, {}];
    addNewUserAnsQuiz({
      quizID: this.props.quizzes.detail._id,
      userID: id.toString(),
      UserAns: values,
      TotalCorrectAns: result,
      TotalCorrectPersentage: persentage,
    });
    //   Object.keys(values).forEach((key) => {
    //     if (this.props.quizzes.detail.Questions.map(prop => (prop.CorrectAnswer)) === values[key]) {
    // result += 1;
    // persentage = (100 / 10) * result;
    // perFloat = parseFloat(persentage).toFixed(2);
    // console.log(values);
    //       switch (key) {
    //         case 'Q1':
    //           this.setState({ submitQ1: false });
    //           break;
    //         case 'Q2':
    //           this.setState({ submitQ2: false });
    //           break;
    //         case 'Q3':
    //           this.setState({ submitQ3: false });
    //           break;
    //         case 'Q4':
    //           this.setState({ submitQ4: false });
    //           break;
    //         case 'Q5':
    //           this.setState({ submitQ5: false });
    //           break;
    //         case 'Q6':
    //           this.setState({ submitQ6: false });
    //           break;
    //         case 'Q7':
    //           this.setState({ submitQ7: false });
    //           break;
    //         case 'Q8':
    //           this.setState({ submitQ8: false });
    //           break;
    //         case 'Q9':
    //           this.setState({ submitQ9: false });
    //           break;
    //         case 'Q10':
    //           this.setState({ submitQ10: false });
    //           break;
    //         default:
    //           break;
    //       }
    //     } else if (key === 'Q1') {
    //       this.setState({ submitQ1: true });
    //     } else if (key === 'Q2') {
    //       this.setState({ submitQ2: true });
    //     } else if (key === 'Q3') {
    //       this.setState({ submitQ3: true });
    //     } else if (key === 'Q4') {
    //       this.setState({ submitQ4: true });
    //     } else if (key === 'Q5') {
    //       this.setState({ submitQ5: true });
    //     } else if (key === 'Q6') {
    //       this.setState({ submitQ6: true });
    //     } else if (key === 'Q7') {
    //       this.setState({ submitQ7: true });
    //     } else if (key === 'Q8') {
    //       this.setState({ submitQ8: true });
    //     } else if (key === 'Q9') {
    //       this.setState({ submitQ9: true });
    //     } else if (key === 'Q10') {
    //       this.setState({ submitQ10: true });
    //     }
    //     return console.log([perFloat]);
    //   });
    //   if (perFloat <= 50) {
    //     credit = 'red';
    //   } else {
    //     credit = '#00c0d4';
    //   }
    //   console.log({ credit });
    //   // window.alert(`Result= ${result} / 10 Persentage=  ${perFloat}  %`);
    //   this.setState({
    //     submit:
    // <div>
    //   <h4>Quiz Results</h4>
    //   <p>Please review the correct answer.</p>
    //   <h5 style={{ color: `${credit}` }}>You got {result} points. Your score is {perFloat} %</h5>
    //   {/* Result= {result} / 10 <br />Persentage=  {perFloat}  % */}
    // </div>,
    //   });
    // this.setState({ submit: [true] });
    window.scrollTo(0, 0);
    console.log('a');
  };

  render() {
    const { quizzes, handleSubmit } = this.props;
    const { submit, sub } = this.state;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            {quizzes.detail &&
              <Row style={{ width: '100%' }}>
                <h2 style={{ textAlign: 'center', margin: '0 auto', width: 'fit-content' }}>{quizzes.detail.title}</h2><br />
                <div>{submit !== '' && submit}</div>
                <form className="form" onSubmit={handleSubmit(this.handleSubmit)}>
                  <div className="form__form-group">
                    {
                      quizzes.detail.Questions.map((prop, key) => (
                        // eslint-disable-next-line no-underscore-dangle
                        // <p>{JSON.stringify(prop)}</p>
                        <div key={key}>
                          <span className="quiz__text">{prop.Question.toString()}</span>
                          {prop.OptionalAnswers.map(ans => (
                            <div className="form__form-group-field quiz__radio">
                              <Field
                                name={key}
                                component={renderRadioButtonField}
                                label={ans}
                                radioValue={ans}
                                className={sub[key] ? 'danger' : ''}
                                disabled={submit !== ''}
                              />
                              {/* <div>{this.props.quizzes.detail.Questions[1].CorrectAnswer}</div> */}
                            </div>
                          ))}
                          <div>
                            {sub[key] === true && (
                              <div>
                                <p className="quiz_correct quiz__radio">Ans: {prop.CorrectAnswer}</p>
                                <p className="quiz_correct quiz__radio">{prop.Explanation}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <ButtonToolbar className="form__button-toolbar">
                    <Button color="primary" type="submit" disabled={submit !== ''}>Submit Answer</Button>
                    <Button color="secondary" onClick={() => this.redirectToTrainingPage()}>
                      Cancel
                    </Button><br />
                  </ButtonToolbar>
                </form>
                {/* {console.log(this.props.quizzes.list)} */}
              </Row>
            }
            <br />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default reduxForm({
  form: 'plastic',
})(PlasticTestAPI);

