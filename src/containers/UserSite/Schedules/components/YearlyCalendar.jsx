/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { Calendar, CalendarControls } from 'react-yearly-calendar';
import { connect } from 'react-redux';

import { Modal } from 'reactstrap';
import {
  getLogisticsByOrganization,
} from '../../../../redux/actions/apiActions/logisticsActions';


// const customCSSclasses = {
//   pickupDates: ['2019-04-25', '2019-05-25', '2019-06-25', '2019-08-25', '2019-11-25'],
// };

class YearlyCalendar extends React.Component {
  state = {
    year: new Date().getFullYear(),
    pickupDates: null,
    logistics: null,
    logisticsDetails: {},
    isOpen: false,
    pickedDate: null,
  };

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.props.getLogisticsByOrganization(user.organizationId._id);
  }

  componentDidUpdate() {
    if (this.props.logistics.list && this.props.logistics.list !== this.state.logistics) {
      const logistics = this.props.logistics.list;
      const pickupDates = [];
      const logisticsDetails = {};
      Object.keys(logistics).forEach((key) => {
        let pickupDate = new Date(logistics[key].pickUpTime);
        pickupDate = `${pickupDate.getFullYear()}-${(`0${pickupDate.getMonth() + 1}`).slice(-2)}-${(`0${pickupDate.getDate()}`).slice(-2)}`;
        // console.log(pickupDate);
        logisticsDetails[pickupDate] = logistics[key];
        pickupDates.push(pickupDate);
      });
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        pickupDates, logistics, logisticsDetails,
      });
    }
  }

  onPrevYear() {
    this.setState(prevState => ({
      year: prevState.year - 1,
    }));
  }

  onNextYear() {
    this.setState(prevState => ({
      year: prevState.year + 1,
    }));
  }


  goToToday() {
    const today = moment();

    this.setState({
      year: today.year(),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  datePicked(date, classes) {
    if (classes) {
      let pickedDate = new Date(this.state.logisticsDetails[date.format('YYYY-MM-DD')].pickUpTime);
      pickedDate = `${pickedDate.getFullYear()}-${(`0${pickedDate.getMonth() + 1}`).slice(-2)}-${pickedDate.getDate()} ${pickedDate.getHours()}:${pickedDate.getMinutes() < 10 ? '0' : ''}${pickedDate.getMinutes()}`;
      this.setState({
        pickedDate,
        isOpen: true,
      });
    }
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  }


  render() {
    const { year, pickupDates, isOpen } = this.state;
    return (
      <div>
        <CalendarControls
          year={year}
          // showTodayButton
          onPrevYear={() => this.onPrevYear()}
          onNextYear={() => this.onNextYear()}
          goToToday={() => this.goToToday()}
        />
        {pickupDates &&
          <Calendar
            year={year}
            // showDaysOfWeek={false}
            customClasses={{ pickupDates }}
            onPickDate={(date, classes) => this.datePicked(date, classes)}
          />
        }
        <Modal
          isOpen={isOpen}
          className="modal-dialog--success"
        >
          <div className="modal__header">
            <button className="lnr lnr-cross modal__close-btn" type="button" onClick={this.closeModal} />
            <h4 className="bold-text  modal__title">Pickup Time</h4>
          </div>
          {this.state.pickedDate &&
            <div className="modal__body">
              <p>{new Date(this.state.pickedDate).toDateString()} {new Date(this.state.pickedDate).toLocaleTimeString()} - {new Date(new Date(this.state.pickedDate).setMinutes(new Date(this.state.pickedDate).getMinutes() + 30)).toLocaleTimeString()}</p>
            </div>
          }
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getLogisticsByOrganization: (organizationId) => {
    dispatch(getLogisticsByOrganization(organizationId));
  },
});

const mapStateToProps = state => ({
  logistics: state.logistics,
});

export default connect(mapStateToProps, mapDispatchToProps)(YearlyCalendar);
