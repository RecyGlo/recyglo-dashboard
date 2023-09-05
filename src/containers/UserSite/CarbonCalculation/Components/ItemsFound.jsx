/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
/* eslint-disable no-loop-func */
/* eslint-disable no-return-assign */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import '../../../../scss/report/ItemsFound.scss';

class ItemsFound extends PureComponent {
  state = {
    maxRow: 5,
    // months: [],
  }

  itemRows = () => {
    const data = this.props.data.ways;
    const rows = [];
    let cols = [];
    for (let i = 0; i < this.state.maxRow; i += 1) {
      Object.keys(data).map(item => (
        data[item].map(date => (
          date.items.length - 1 >= i
            ?
            cols.push(<td><i>{date.items[i].productName.charAt(0).toUpperCase() + date.items[i].productName.slice(1)}</i></td>)
            :
            cols.push(<td>{}</td>)
        ))
      ));
      rows.push(<tr>{cols}</tr>);
      cols = [];
    }
    return rows;
  };

  // itemRows = () => {
  //   const data = this.props.data.ways;
  //   const rows = [];
  //   for (let i = 0; i < this.state.maxRow; i += 1) {
  //     const cols = Object.keys(data).map((item) => {
  //       const date = data[item][i]; // Get the date item at index i
  //       return date && date.items.length - 1 >= i ? (
  //         <td>
  //           <i>
  //             {date.items[i].productName.charAt(0).toUpperCase() + date.items[i].productName.slice(1)}
  //           </i>
  //         </td>
  //       ) : (
  //         <td>{}</td>
  //       );
  //     });
  //     rows.push(<tr key={i}>{cols}</tr>);
  //   }
  //   return rows;
  // };
  render() {
    return (
      <div className="reporting-page">
        <div className="generation-content">
          <div className="item-footprint">
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemsFound;
