/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable camelcase */

import React, { PureComponent } from 'react';
import { Row, Button, Modal } from 'reactstrap';
// import { connect } from 'react-redux';
// import StarRatingComponent from 'react-star-rating-component';
import history from '../../../../shared/utils/history';
// import { getTrainingSlideList } from '../../../../redux/actions/apiActions/trainingSlideActions';
// import img1 from '../../../../shared/img/Trainingview/img1.png';
// // import img2 from '../../../../shared/img/Trainingview/Star.png';
// import reference from '../../../../shared/img/Trainingview/reference.png';

const reference = `${process.env.PUBLIC_URL}/img/Trainingview/reference.png`;


class TrainingCourseAPI extends PureComponent {
  state = {
    // rows: null,
    isOpen: false,
    ref: null,
    // isOpenPlastic: false,
  }
  // componentWillMount() {
  //   this.props.getTrainingSlideList();
  // }

  // componentDidUpdate() {
  //   this.updateRows();
  // }

  // updateRows() {
  //   this.setState({ rows: this.props.training_slides.list });
  // }

  redirectToQuizPage = (quizId) => {
    history.push(`/training/quiz/${quizId}`);
    window.location.reload(true);
  }

  redirectToTrainingSlidePage = (trainingSlideId) => {
    history.push(`/training/trainingSlide/${trainingSlideId}`);
    window.location.reload(true);
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  }

  openModal = (data) => {
    // this.props.training_slides.list.map(data => (
    this.setState({
      ref: data,
      isOpen: true,
    });
    // console.log(data)
    // ));
  }

  // closeModalPlastic = () => {
  //   this.setState({
  //     isOpenPlastic: false,
  //   });
  // }

  // openModalPlastic = () => {
  //   this.setState({
  //     isOpenPlastic: true,
  //   });
  // }

  render() {
    const { training_slides } = this.props;
    const { isOpen, ref } = this.state;
    return (
      <div style={{ margin: '0 auto' }}>
        { training_slides.list && training_slides.list.map(data => (
          <div>
            <div className="training-list-content">
              {console.log(data.quizID._id)}
              <Row width="100%">
                <h2 className="training__header">{data.Title}</h2>
                {/* {this.setState({ ref: { data } })} */}
                {console.log(ref)}
                <img
                  src={reference}
                  alt=""
                  className="training__reference"
                  // onClick ={this.setState({ isOpen: true })}
                  onClick={() => this.openModal(data.Reference)}
                /><br />
              </Row>
              <p>
                &emsp;{data.Description}
              </p><br />
              <p className="training__name">By {data.Name}</p>
              <Button
                outline
                onClick={() => this.redirectToQuizPage(data.quizID._id)}
                style={{ float: 'right', margin: '0 10px' }}
                color="info"
              >
                Test Your Knowledge
              </Button>
              <Button
                outline
                onClick={() => this.redirectToTrainingSlidePage(data._id)}
                style={{ float: 'right' }}
                color="info"
              >
                Learn
              </Button>
            </div>
            <br />
            <div>
              <Modal
                isOpen={isOpen}
                className="modal-dialog--success"
              >
                <div className="modal__header">
                  <button
                    className="lnr lnr-cross modal__close-btn"
                    type="button"
                    onClick={this.closeModal}
                  />
                  {ref && <h4 className="bold-text  modal__title">Reference Websites</h4>}
                </div>
                <div className="modal__body">
                  {ref && ref.map(prop => (
                    <p>
                      <a href={prop}>
                        {prop}
                      </a><br />
                    </p>
                  ))}
                </div>
              </Modal>
            </div>
          </div>
        ))}
        {/* <div className="training-list-content">
          <Row>
            <h2 className="training__header">E-waste Segregation Training</h2><br />
          </Row>
          <p className="training__name">By May Khine Phyo Shwe</p>
          <Button
            outline
            color="info"
            onClick={() => window.open('https://waste-learning.herokuapp.com/index.html')}
            style={{ float: 'right' }}
          >
            Learn
          </Button>
        </div> */}
      </div>
    );
  }
}

export default TrainingCourseAPI;
