/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import { Row, CardTitle, Button, Col } from 'reactstrap';
// import StarRatingComponent from 'react-star-rating-component';
import history from '../../../../shared/utils/history';
// import img1 from '../../../../shared/img/Trainingview/img1.png';
// // import img2 from '../../../../shared/img/Trainingview/Star.png';
// import titleImg from '../../../../shared/img/Trainingview/titlePhoto.JPG';


class TrainingCourse extends PureComponent {
  state = {
    rows: null,
  }

  redirectToPaperQuizPage = () => {
    history.push('/training/paper_quiz');
    window.location.reload(true);
  }

  redirectToPlasticQuizPage = () => {
    history.push('/training/plastic_quiz');
    window.location.reload(true);
  }

  redirectToPlasticPage = () => {
    history.push('/training/plastic_waste_management');
    window.location.reload(true);
  }

  redirectToPaperPage = () => {
    history.push('/training/paper_waste_management');
    window.location.reload(true);
  }

  render() {
    const { rows } = this.state;
    return (
      <div>
        <Row>
          <Col md={8} lg={8} sm={6} style={{ margin: '0 auto' }}>
            {rows && JSON.stringify(rows)}
            <div className="training-list-content">
              <CardTitle>
                <h2 className="training__header">Paper Waste Management</h2><br />
              </CardTitle>
              <p>
              &emsp;This section will give you the proper ways to manage paper waste in order
              &nbsp;to minimize the risks of public health and environmental issues.
              </p><br />
              <p className="training__name">By Ma Candy</p>
              <Button
                outline
                onClick={() => this.redirectToPaperPage()}
                style={{ float: 'right' }}
                color="info"
              >
                View
              </Button>
              <Button
                outline
                onClick={() => this.redirectToPaperQuizPage()}
                style={{ float: 'right', margin: '0 10px' }}
                color="info"
              >
                Test Your Knowledge
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={8} sm={6} style={{ margin: '0 auto' }}>
            {rows && JSON.stringify(rows)}
            <div className="training-list-content">
              <CardTitle>
                <h2 className="training__header">Plastic Waste Management</h2><br />
                <p>
                &emsp;This short lesson will teach you how to dispose our plastic waste
                &nbsp;without creating risk for public health and environment.
                </p><br />
              </CardTitle>
              <p className="training__name">By Ma Candy</p>
              <Button
                outline
                color="info"
                onClick={() => this.redirectToPlasticPage()}
                style={{ float: 'right' }}
              >
                View
              </Button>
              <Button
                outline
                onClick={() => this.redirectToPlasticQuizPage()}
                style={{ float: 'right', margin: '0 10px' }}
                color="info"
              >
                Test Your Knowledge
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={8} sm={6} style={{ margin: '0 auto' }}>
            {rows && JSON.stringify(rows)}
            <div className="training-list-content">
              <CardTitle>
                <h2 className="training__header">E-waste Segregation Training</h2><br />
              </CardTitle>
              {/* <StarRatingComponent
                name="rate3"
                starCount={5}
                value={5}
              /> */}
              <p className="training__name">By Ma Candy</p>
              <Button
                outline
                color="info"
                onClick={() => window.open('https://waste-learning.herokuapp.com/index.html')}
                style={{ float: 'right' }}
              >
                View
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TrainingCourse;
