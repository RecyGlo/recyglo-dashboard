/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
// import JqxTreeMap from 'jqwidgets-react/react_jqxtreemap.js';
import jwtDecode from 'jwt-decode';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxTreeMap from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreemap';

import Panel from '../../../../shared/components/Panel';
import { getUserDetailWithPromise } from '../../../../redux/actions/apiActions/userActions';
import { getCommonItemsFound } from '../../../../redux/actions/apiActions/logisticsActions';

class ItemsReportTable extends PureComponent {
  state = {
    items: null,
  }
  componentWillMount() {
    console.log('start');
    // let items;
    const token = localStorage.getItem('jwt');
    const { id } = jwtDecode(token);
    getUserDetailWithPromise(id).then((response =>
      // eslint-disable-next-line no-underscore-dangle
      getCommonItemsFound(response.organizationId._id).then((res =>
        // this.setState({
        //   items: res,
        // })
        // items = res
        this.setState({
          items: this.createData(res),
        })
      ))
    ));
    // const data = [];
    // console.log(items);
  }

  createData = (items) => {
    const data = [];
    const colors = {
      Paper: '#658ca6',
      Plastic: '#db5e73',
      Can: '#8ac771',
      Glass: '#FFF314',
      'E-waste': '#FF7F00',
      Organic: '#a38e79',
    };
    if (items) {
      // eslint-disable-next-line guard-for-in
      for (const key in items) {
        data.push({ label: key, value: 10, color: colors[key] });
        // eslint-disable-next-line guard-for-in
        for (const productName in items[key]) {
          if (productName === key) {
            data.push({
              label: `${productName} `, value: items[key][productName], parent: key, color: colors[key],
            });
          } else {
            data.push({
              label: productName, value: items[key][productName], parent: key, color: colors[key],
            });
          }
        }
      }
    }
    return data;
  }

  render() {
    // const data = [
    //   {
    //     label: 'Drama',
    //     value: 12,
    //     // color: '#B3FAFF',
    //   },
    //   {
    //     label: 'Crime',
    //     value: 21,
    //     // color: '#95FF7A',
    //   },
    //   {
    //     label: 'Action',
    //     value: 16,
    //     // color: '#FFA3CE',
    //   },
    //   {
    //     label: 'Comedy',
    //     value: 18,
    //     // color: '#F1A3FF',
    //   },
    // ];
    const { items } = this.state;
    return (
      <Panel
        lg={12}
        xl={6}
        md={12}
        title="Common Items Found in Waste Audits"
        panelClass="panel--narrow"
      >
        <div style={{ height: 10 }} />
        {items &&
          <JqxTreeMap
            width="100%"
            source={items}
            // baseColor="#52CBFF"
          />
        }
      </Panel>
    );
  }
}

export default ItemsReportTable;
