import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Button } from 'reactstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import { getLogisticsByOrganizationWithPromise } from '../../../../redux/actions/apiActions/logisticsActions';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const quarters = ['First Quarter', 'Second Quarter', 'Third Quarter', 'Fourth Quarter'];

class CreateQuarterModal extends React.PureComponent {
  static propTypes = {
    organization: PropTypes.string.isRequired,
    createQuarter: PropTypes.func.isRequired,
  };

  state = {
    quarter: null,
    logisticsByQuarters: [],
  }

  componentWillMount() {
    getLogisticsByOrganizationWithPromise(this.props.organization).then((response) => {
      const logisticsByMonths = {};
      for (let i = 0; i < response.length - 1; i += 1) {
        // eslint-disable-next-line max-len
        const month = `${monthNames[new Date(response[i].pickUpTime).getMonth()]} ${new Date(response[i].pickUpTime).getFullYear()}`;
        if (!Object.keys(logisticsByMonths).includes(month)) {
          logisticsByMonths[month] = [response[i]];
        } else {
          logisticsByMonths[month].push(response[i]);
        }
      }
      const monthList = Object.keys(logisticsByMonths).slice().sort((a, b) => new Date(a) - new Date(b));
      const logisticsByQuarters = {};
      for (let j = 0; j < monthList.length - 1; j += 3) {
        const QUARTER_NUMBER = (Object.keys(logisticsByQuarters).length) % 4;
        logisticsByQuarters[`${quarters[QUARTER_NUMBER]} (${monthList[j].split(' ')[1]})`] = {};
        for (let i = j; i < j + 3; i += 1) {
          if (Object.keys(logisticsByMonths)[i]) {
            // eslint-disable-next-line max-len
            logisticsByQuarters[`${quarters[QUARTER_NUMBER]} (${monthList[j].split(' ')[1]})`][monthList[i]] = logisticsByMonths[monthList[i]];
          } else {
            break;
          }
        }
      }
      this.setState({ logisticsByQuarters });
    });
  }

  handleSubmit = () => {
    const { logisticsByQuarters, quarter } = this.state;
    // let ways = [];
    // for (let i = 0; i < months.length; i += 1) {
    //   const z = ways.concat(logisticsByMonths[months[i].value]);
    //   console.log(z);
    //   ways = z;
    // }
    // if (!this.state.quarter || ways.length <= 0) {
    //   alert('Please select required fields.');
    // } else {
    //   this.props.createQuarter({
    //     quarter: this.state.quarter.value,
    //     ways,
    //   });
    //   this.setState({
    //     quarter: null,
    //   });
    // }
    this.props.createQuarter({
      quarter: quarter.value,
      ways: logisticsByQuarters[quarter.value],
    });
  }

  handleQuarterChange = (value) => {
    this.setState({
      quarter: value,
    });
  }

  // handleWaysChange = (value) => {
  //   this.setState({
  //     ways: value,
  //   });
  // }


  render() {
    const {
      quarter, logisticsByQuarters,
    } = this.state;
    // const {
    //   logistics,
    // } = this.props;

    return (
      <div className="modal__body">
        <form className="form form--horizontal">
          {logisticsByQuarters &&
          <Select
            name="ways"
            options={
              Object.keys(logisticsByQuarters).map((prop, key) => (
                // eslint-disable-next-line no-underscore-dangle
                { key, label: `${prop} ${JSON.stringify(Object.keys(logisticsByQuarters[prop]))}`, value: prop }
              ))
            }
            value={quarter}
            onChange={this.handleQuarterChange}
            clearable={false}
            className="react-select"
            placeholder="Choose Quarter"
            classNamePrefix="react-select"
          />
          }
          <Button className="icon" color="success" onClick={() => this.handleSubmit()}>
            <p>
            Create Report →
            </p>
          </Button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   getLogisticsByOrganization: (organizationId) => {
//     dispatch(getLogisticsByOrganization(organizationId));
//   },
// });

const mapStateToProps = state => ({
  logistics: state.logistics,
});

export default connect(mapStateToProps)(CreateQuarterModal);
