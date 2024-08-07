/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
/* eslint-disable no-loop-func */
/* eslint-disable no-return-assign */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import '../../../../scss/report/ItemsFound.scss';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const formatDate = date => `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

class ItemsFound extends PureComponent {
    state = {
      maxRow: 10,
      // months: [],
    }

    itemRows = () => {
      const data = this.props.data.ways;
      const rows = [];
      let cols = [];
      for (let i = 0; i < this.state.maxRow; i += 1) {
        Object.keys(data).map(item => (
          Object.keys(data[item]).map(month => (
            JSON.stringify(data[item][month]) !== '[]' &&
                    data[item][month].map(date => (
                      date.items.length - 1 >= i
                        ?
                        cols.push(<td>
                          <i>{date.items[i].productName.charAt(0).toUpperCase() + date.items[i].productName.slice(1)}</i>
                        </td>)
                        :
                        cols.push(<td>{}</td>)
                    ))
          ))
        ));
        rows.push(<tr>{cols}</tr>);
        cols = [];
      }
      return rows;
    }

    render() {
      const {
        data,
      } = this.props;
      console.log(data);
      return (
        <div className="reporting-page">
          <div className="generation-content">
            <div className="audit-title">
              <div style={{ width: '70%', float: 'left' }}>
                <h5>Waste audits</h5>
                <h4>
                                Waste audit has been performed for ({Object.keys(data.ways).length} quarters period)
                </h4>
              </div>
            </div>
            <table id="items-table">
              <tr>
                {Object.keys(data.ways).map(item => (
                  // <th colSpan={Object.keys(data.ways[item]).length}>{item}</th>
                  <th colSpan={Object.keys(data.ways[item]).reduce((totalWays, way) => totalWays + data.ways[item][way].length, 0)}>{item}</th>
                ))}
              </tr>
              <tr>
                {Object.keys(data.ways).map(item => (
                  Object.keys(data.ways[item]).map(month => (
                    data.ways[item][month].map(date => (
                      <td className="date">{formatDate(new Date(date.pickUpTime))}</td>
                    ))
                  ))
                ))}
              </tr>
              {this.itemRows()}
            </table>
          </div>
        </div>
      );
    }
}

export default ItemsFound;
