/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import CryptoJS from 'crypto-js';
import CoverPage from './components/CoverPage';
import Intro from './components/Intro';
import Summary from './components/Summary';
import FigureCoverPage from './components/FigureCoverPage';
import Generation from './components/Generation';
import ItemsFound from './components/ItemsFound';
import Trendline from './components/Trendline';
import Composition from './components/Composition';
import TotalComposition from './components/TotalComposition';

class Reporting extends PureComponent {
  state= {
    data: null,
  }

  componentWillMount() {
    // const data = {
    //   organization: 'Yever',
    //   reportTitle: 'First & Second Quarter',
    //   reportDate: '6 April 2019',
    //   auditStartDate: 'April 2018',
    //   address1: 'No. 28B, Level 6B, Kyauk Kone Condominium',
    //   address2: 'Kyauk Kone Street, Yankin Township',
    //   address3: 'Yangon, Myanmar',
    //   findings: [
    //     'The amounts of waste collection (paper, plastic and cans) during first quarter (June-August) and second quarter (September-November) are 33.051 KG and 26.413 KG respectively.',
    //     'From June, 2018 to November, 2018, a total of 59.464 KG of waste has been produced from Yever and total of 59.464 KG of waste has been not only recycled but also up cycled.',
    //     'During the two quarters, most of the waste recycled from Yever is paper waste.',
    //     'No mixed trashes are found out during pick up times which indicated that Yever has been strong in segregation.',
    //   ],
    //   recommendations: [
    //     'Paper waste can be significantly reduced with a good awareness in mind so that people will only print what they absolutely need.',
    //     'Online paperless system such as Asana, Slack, Trello, etc. can be used for reducing the office paper. ',
    //     'Consumption of plastic should be reduced by using water containers and water refill system. Cups that can be used multiple times are suggested to use.',
    //     'Yever should continue its good practices of segregation and also practicing the 3Rs (Reduce, Reuse and Recycle) is highly encouraged.',
    //   ],
    //   data: {
    //     'First Quarter': [
    //       {
    //         pickUpTime: '2018-08-24T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg',
    //             productName: 'Paper',
    //             productType: 'Papers',
    //             quantity: 10.5,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Plastics',
    //             productType: 'Plastics',
    //             quantity: 0.17,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Cans',
    //             productType: 'Cans',
    //             quantity: 0.136,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2018-09-28T04:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg',
    //             productName: 'Paper',
    //             productType: 'Papers',
    //             quantity: 10.5,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Plastics',
    //             productType: 'Plastics',
    //             quantity: 0.17,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Cans',
    //             productType: 'Cans',
    //             quantity: 0.136,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2018-08-24T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg',
    //             productName: 'Paper',
    //             productType: 'Papers',
    //             quantity: 10.5,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Plastics',
    //             productType: 'Plastics',
    //             quantity: 0.17,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Cans',
    //             productType: 'Cans',
    //             quantity: 0.136,
    //           },
    //         ],
    //       },
    //     ],
    //     'Second Quarter': [
    //       {
    //         pickUpTime: '2018-08-24T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg',
    //             productName: 'Paper',
    //             productType: 'Papers',
    //             quantity: 10.5,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Plastics',
    //             productType: 'Plastics',
    //             quantity: 0.17,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Cans',
    //             productType: 'Cans',
    //             quantity: 0.136,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2018-09-28T04:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg',
    //             productName: 'Paper',
    //             productType: 'Papers',
    //             quantity: 10.5,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Plastics',
    //             productType: 'Plastics',
    //             quantity: 0.17,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Cans',
    //             productType: 'Cans',
    //             quantity: 0.136,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2018-08-24T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg',
    //             productName: 'Paper',
    //             productType: 'Papers',
    //             quantity: 10.5,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Plastics',
    //             productType: 'Plastics',
    //             quantity: 0.17,
    //           },
    //           {
    //             unit: 'kg',
    //             productName: 'Cans',
    //             productType: 'Cans',
    //             quantity: 0.136,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   trendLineData: {
    //     Paper: [
    //       { date: '6/29/2018', value: 13.5 },
    //       { date: '7/26/2018', value: 8.165 },
    //       { date: '6/29/2018', value: 13.5 },
    //       { date: '8/24/2018', value: 10.5 },
    //     ],
    //     Plastics: [
    //       { date: '6/29/2018', value: 13.5 },
    //       { date: '7/26/2018', value: 8.165 },
    //       { date: '6/29/2018', value: 13.5 },
    //       { date: '8/24/2018', value: 10.5 },
    //     ],
    //     Cans: [
    //       { date: '6/29/2018', value: 13.5 },
    //       { date: '7/26/2018', value: 8.165 },
    //       { date: '6/29/2018', value: 13.5 },
    //       { date: '8/24/2018', value: 10.5 },
    //     ],
    //   },
    //   totalComposition: {
    //     Papers: 13.5,
    //     Plastics: 8.165,
    //     Cans: 13.5,
    //   },
    // };
    // const cipherText = this.enc(JSON.stringify(data));
    // console.log(cipherText.length);
    // const decriptText = this.dec(cipherText);
    // console.log(decriptText);
    // const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
    // console.log(CryptoJS.SHA256(ciphertext.toString()).toString());
    // console.log(ciphertext.toString(CryptoJS.enc.Hex));
    const { link } = this.props.match.params;
    // const link = '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';
    // const link = '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';
    // const encryptedData = link.replace(/\//gi, 'SLASH');
    const encryptedData = link.replace(/SLASH/gi, '/');
    const bytes = CryptoJS.AES.decrypt(encryptedData, 'secret key 123');
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptedData);
    this.setState({
      data: decryptedData,
    });
  }

  // enc = (plainText) => {
  //   console.log(plainText.length);
  //   const b64 = CryptoJS.AES.encrypt(plainText, 'SECRET').toString();
  //   console.log(b64.length);
  //   const e64 = CryptoJS.enc.Base64.parse(b64);
  //   const eHex = e64.toString(CryptoJS.enc.Hex);
  //   return eHex;
  // }

  // dec = (cipherText) => {
  //   const reb64 = CryptoJS.enc.Hex.parse(cipherText);
  //   const bytes = reb64.toString(CryptoJS.enc.Base64);
  //   const decrypt = CryptoJS.AES.decrypt(bytes, 'SECRET');
  //   const plain = decrypt.toString(CryptoJS.enc.Utf8);
  //   return plain;
  // }

  render() {
    const { data } = this.state;
    return (
      <div className="landing">
        {data &&
          <div>
            <CoverPage
              organization={data.organization}
              reportTitle={data.reportTitle}
              date={data.reportDate}
            />
            <Intro
              organization={data.organization}
              address1={data.address1}
              address2={data.address2}
              address3={data.address3}
              date={data.reportDate}
            />
            <Summary
              auditStartDate={data.auditStartDate}
              findings={data.findings}
              recommendations={data.recommendations}
            />
            <FigureCoverPage sectionTitle="Monthly Waste Audit Results" pageTitle="Figures and Data" Number="1" />
            {/* <Generation data={data} /> */}
            {data.data &&
              Object.keys(data.data).map(item => (
                <Generation data={data.data[item]} title={item} />
              ))
            }
            <FigureCoverPage sectionTitle="Common Items Found in Waste Audit" pageTitle="Figures and Data" Number="2" />
            <ItemsFound />
            <FigureCoverPage sectionTitle="Waste Recycling Trend Line" pageTitle="Figures and Data" Number="3" />
            <Trendline data={data.trendLineData} />
            <FigureCoverPage sectionTitle="Waste Composition in Percentage" pageTitle="Figures and Data" Number="4" />
            {/* <Generation data={data} /> */}
            {data.data &&
              Object.keys(data.data).map(item => (
                <Composition data={data.data[item]} title={item} />
              ))
            }
            {/* <Composition /> */}
            <TotalComposition data={data.totalComposition} />
          </div>
        }
      </div>
    );
  }
}

export default Reporting;
