/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import CryptoJS from 'crypto-js';
import { getReportDetail } from '../../../redux/actions/apiActions/ReportsActions';
import CoverPage from './components/CoverPage';
import Intro from './components/Intro';
import Summary from './components/Summary';
import FigureCoverPage from './components/FigureCoverPage';
import Generation from './components/Generation';
import ItemsFound from './components/ItemsFound';
import Trendline from './components/Trendline';
// import SingleTrendline from './components/SingleTrendline';
import Composition from './components/Composition';
import TotalComposition from './components/TotalComposition';
import PaperRecycling from './components/PaperRecycling';
import PlasticRecycling from './components/PlasticRecycling';
import CanRecycling from './components/CanRecycling';
import GlassRecycling from './components/GlassRecycling';
import OrganicRecycling from './components/OrganicRecycling';

class Reporting extends PureComponent {
  state= {
    decryptedData: {},
    // data: null,
    // totalPages: 0,
    // months: 0,
    // dates: null,
    // TrendLineDataList: null,
    // background: null,
    // maxWays: 0,
    // trendLineLength: 0,
    totalPages: 18,
  }

  componentWillMount() {
    const { reportId } = this.props.match.params;
    // let { totalPages } = this.state;
    getReportDetail(reportId)
      .then((response) => {
        const link = response.data.data;
        const encryptedData = link.replace(/SLASH/gi, '/');
        const bytes = CryptoJS.AES.decrypt(encryptedData, 'secret key 123');
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(decryptedData);
        this.setState({
          decryptedData,
        });
        // if (decryptedData.background) {
        //   this.setState({
        //     background: decryptedData.background,
        //   });
        // }
        // const months = [];
        // const dates = [];
        // for (const key in decryptedData.data) {
        //   for (let i = 0; i < decryptedData.data[key].length; i += 1) {
        //     if (!months.includes(new Date(decryptedData.data[key][i].pickUpTime).getMonth())) {
        //       months.push(new Date(decryptedData.data[key][i].pickUpTime).getMonth());
        //     }
        //     if (!dates.includes(new Date(decryptedData.data[key][i].pickUpTime))) {
        //       dates.push(new Date(decryptedData.data[key][i].pickUpTime));
        //     }
        //   }
        // }
        // let tmpDict = {};
        // const TrendLineDataList = [];
        // let maxWays = 0;
        // for (let i = 0; i < Object.keys(decryptedData.trendLineData).length; i += 1) {
        //   const key = Object.keys(decryptedData.trendLineData)[i];
        //   tmpDict[key] = decryptedData.trendLineData[key];
        //   if ((i + 1 + (4 * TrendLineDataList.length)) === ((TrendLineDataList.length + 1) * 4) || Object.keys(decryptedData.trendLineData).length === (i + 1)) {
        //     // eslint-disable-next-line no-loop-func
        //     maxWays = Object.keys(tmpDict).map(item => (tmpDict[item].length > maxWays ? tmpDict[item].length : maxWays));
        //     maxWays = Math.max(...maxWays);
        //     TrendLineDataList.push(tmpDict);
        //     tmpDict = {};
        //   }
        // }
        // let trendLineLength = 0;
        // if (maxWays > 10) {
        //   trendLineLength = Object.keys(decryptedData.trendLineData).length;
        // } else {
        //   trendLineLength = Object.keys(TrendLineDataList).length;
        // }
        // totalPages = 15 + trendLineLength + (2 * Object.keys(decryptedData.data).length);
        // this.setState({
        //   data: decryptedData,
        //   totalPages,
        //   months,
        //   dates,
        //   TrendLineDataList,
        //   maxWays,
        //   trendLineLength,
        // });
      });

    // const data = {
    //   quarter: 'First Quarter (2019)',
    //   ways: {
    //     'February 2019': [
    //       {
    //         pickUpTime: '2019-02-07T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d16', productName: 'Office Paper', productType: 'Papers', quantity: 7.58,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d15', productName: 'PET', productType: 'Plastics', quantity: 10.05,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d14', productName: 'Can', productType: 'Cans', quantity: 23.45,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2019-03-07T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d16', productName: 'Office Paper', productType: 'Papers', quantity: 7.58,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d15', productName: 'PET', productType: 'Plastics', quantity: 10.05,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d14', productName: 'Can', productType: 'Cans', quantity: 23.45,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2019-04-07T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d16', productName: 'Office Paper', productType: 'Papers', quantity: 7.58,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d15', productName: 'PET', productType: 'Plastics', quantity: 10.05,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d14', productName: 'Can', productType: 'Cans', quantity: 23.45,
    //           },
    //         ],
    //       },
    //     ],
    //     'March 2019': [
    //       {
    //         pickUpTime: '2019-02-07T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d16', productName: 'Office Paper', productType: 'Papers', quantity: 7.58,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d15', productName: 'PET', productType: 'Plastics', quantity: 10.05,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d14', productName: 'Can', productType: 'Cans', quantity: 23.45,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2019-03-07T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d16', productName: 'Office Paper', productType: 'Papers', quantity: 7.58,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d15', productName: 'PET', productType: 'Plastics', quantity: 10.05,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d14', productName: 'Can', productType: 'Cans', quantity: 23.45,
    //           },
    //         ],
    //       },
    //       {
    //         pickUpTime: '2019-04-07T05:00:00.000Z',
    //         items: [
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d16', productName: 'Office Paper', productType: 'Papers', quantity: 7.58,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d15', productName: 'PET', productType: 'Plastics', quantity: 10.05,
    //           },
    //           {
    //             unit: 'kg', _id: '5e6895a662845e5282162d14', productName: 'Can', productType: 'Cans', quantity: 23.45,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // };

    // const organization = {
    //   _id: '5de5de9740ef396ed47db1f7',
    //   name: 'International School of Yangon',
    //   address: '20 Shwe Taungyar Street↵Bahan Township↵Yangon, Myanmar',
    // };
    // const reportTitle = 'First Quarter';
    // const reportDate = new Date();
    // const auditStartDate = new Date();
    // const generationData = {
    //   'Februar 2019': {
    //     total: 306.43,
    //     chartData: [
    //       { name: 'Paper', value: 116.65 },
    //       { name: 'Plastic', value: 53.92 },
    //       { name: 'Can', value: 36.86 },
    //       { name: 'Organic', value: 99 },
    //     ],
    //   },
    // };
    // const trendlineData = {
    //   Papers: {
    //     data: [
    //       { date: '2/7/2019', value: 7.58 },
    //       { date: '2/14/2019', value: 37.05 },
    //       { date: '2/21/2019', value: 44.63 },
    //       { date: '2/28/2019', value: 27.39 },
    //       { date: '3/7/2019', value: 19.2 },
    //       { date: '3/14/2019', value: 7.86 },
    //       { date: '3/21/2019', value: 20.88 },
    //       { date: '3/28/2019', value: 44.83 },
    //       { date: '4/4/2019', value: 34.73 },
    //       { date: '4/11/2019', value: 28.35 },
    //       { date: '4/18/2019', value: 12.45 },
    //       { date: '4/25/2019', value: 6.54 },
    //       { date: '4/25/2019', value: 28.46 },
    //     ],
    //     total: 319.95,
    //   },
    //   Plastics: {
    //     data: [
    //       { date: '2/7/2019', value: 7.58 },
    //       { date: '2/14/2019', value: 37.05 },
    //       { date: '2/21/2019', value: 44.63 },
    //       { date: '2/28/2019', value: 27.39 },
    //       { date: '3/7/2019', value: 19.2 },
    //       { date: '3/14/2019', value: 7.86 },
    //       { date: '3/21/2019', value: 20.88 },
    //       { date: '3/28/2019', value: 44.83 },
    //       { date: '4/4/2019', value: 34.73 },
    //       { date: '4/11/2019', value: 28.35 },
    //       { date: '4/18/2019', value: 12.45 },
    //       { date: '4/25/2019', value: 6.54 },
    //       { date: '4/25/2019', value: 28.46 },
    //     ],
    //     total: 137.66000000000003,
    //   },
    //   Cans: {
    //     data: [
    //       { date: '2/7/2019', value: 7.58 },
    //       { date: '2/14/2019', value: 37.05 },
    //       { date: '2/21/2019', value: 44.63 },
    //       { date: '2/28/2019', value: 27.39 },
    //       { date: '3/7/2019', value: 19.2 },
    //       { date: '3/14/2019', value: 7.86 },
    //       { date: '3/21/2019', value: 20.88 },
    //       { date: '3/28/2019', value: 44.83 },
    //       { date: '4/4/2019', value: 34.73 },
    //       { date: '4/11/2019', value: 28.35 },
    //       { date: '4/18/2019', value: 12.45 },
    //       { date: '4/25/2019', value: 6.54 },
    //       { date: '4/25/2019', value: 28.46 },
    //     ],
    //     total: 79.595,
    //   },
    //   Organic: {
    //     data: [
    //       { date: '2/7/2019', value: 7.58 },
    //       { date: '2/14/2019', value: 37.05 },
    //       { date: '2/21/2019', value: 44.63 },
    //       { date: '2/28/2019', value: 27.39 },
    //       { date: '3/7/2019', value: 19.2 },
    //       { date: '3/14/2019', value: 7.86 },
    //       { date: '3/21/2019', value: 20.88 },
    //       { date: '3/28/2019', value: 44.83 },
    //       { date: '4/4/2019', value: 34.73 },
    //       { date: '4/11/2019', value: 28.35 },
    //       { date: '4/18/2019', value: 12.45 },
    //       { date: '4/25/2019', value: 6.54 },
    //       { date: '4/25/2019', value: 28.46 },
    //     ],
    //     total: 520.15,
    //   },
    // };
    // const totalCompositionData = [
    //   { name: 'Paper', value: 110.53 },
    //   { name: 'Plastic', value: 31.74 },
    //   { name: 'Can', value: 14.91 },
    //   { name: 'Organic', value: 149.77 },
    // ];
    // const findings = [
    //   'International School of Yangon recycled 1057.36 Kg of waste from February 2019 to April 2019.',
    //   'The most commonly found waste was Organic.',
    //   'No mixed trash was found in the audit which states that International School of Yangon is strong in segregation.',
    // ];
    // const recommendations = [
    //   'Paper waste can be significantly minimized by setting policies such as to print only when absolutely necessary, to print on both sides of paper, to reserve one- sided paper for reuse and repurpose.',
    //   'Consumption of plastic can be reduced by using water containers and water refill systems. Cups that can be used multiple times are recommended.',
    //   'Keeping the good practices of 3Rs – Reducing, Reusing, and Recycling – is highly recommended.',
    //   'The generation of compostable waste should be monitored and waste composting makes the company more sustainable.',
    //   'Efficient use of web resources such as Google Docs or Slide Share, and electronic devices such as tablets and computers can',
    // ];
    // const minMonth = 'Februrary 2019';
    // const maxMonth = 'April 2019';
    // this.setState({
    //   data,
    //   organization,
    //   reportTitle,
    //   reportDate,
    //   auditStartDate,
    //   generationData,
    //   trendlineData,
    //   totalCompositionData,
    //   findings,
    //   recommendations,
    //   minMonth,
    //   maxMonth,
    // });
  }

  render() {
    // const {
    //   data, totalPages, months, dates, TrendLineDataList, background, maxWays, trendLineLength,
    // } = this.state;
    const {
      data,
      organization,
      reportTitle,
      reportDate,
      auditStartDate,
      generationData,
      trendlineData,
      totalCompositionData,
      findings,
      recommendations,
      minMonth,
      maxMonth,
    } = this.state.decryptedData;
    const { totalPages } = this.state;
    return (
      <div className="landing">
        {organization && data &&
          <div>
            <CoverPage
              organization={organization.name}
              reportTitle={reportTitle}
              date={new Date(reportDate).toLocaleDateString()}
            />
            <Intro
              organization={organization.name}
              address1={organization.address}
              // address2={data.address2}
              // address3={data.address3}
              date={new Date(reportDate).toLocaleDateString()}
              totalPages={totalPages}
              contractDate={new Date(auditStartDate)}
              // dates={dates}
              minMonth={minMonth}
              maxMonth={maxMonth}
            />
            <Summary
              organization={organization.name}
              auditStartDate={new Date(auditStartDate).toLocaleDateString()}
              findings={findings}
              recommendations={recommendations}
              totalPages={totalPages}
              months={Object.keys(generationData).length}
              date={new Date(reportDate).toLocaleDateString()}
            />
            <FigureCoverPage
              sectionTitle="Monthly Waste Audit Results"
              pageTitle="Figures and Data"
              Number="1"
              totalPages={totalPages}
              currentPage={4}
            />
            {generationData &&
              <Generation
                organization={organization.name}
                data={generationData}
                // title={item}
                totalPages={totalPages}
                currentPage={5}
                date={new Date(reportDate).toLocaleDateString()}
              />
            }
            <FigureCoverPage
              sectionTitle="Common Items Found in Waste Audit"
              pageTitle="Figures and Data"
              Number="2"
              totalPages={totalPages}
              currentPage={6}
            />
            <ItemsFound data={data} totalPages={totalPages} currentPage={7} reportDate={new Date(reportDate).toLocaleDateString()} />
            <FigureCoverPage
              sectionTitle="Waste Recycling Trend Line"
              pageTitle="Figures and Data"
              Number="3"
              totalPages={totalPages}
              currentPage={8}
            />
            {/* {maxWays > 10 ?
              data &&
                Object.keys(data.trendLineData).map((item, i) => (
                  <SingleTrendline waste={item} organization={data.organization} data={data.trendLineData[item]} quarters={Object.keys(data.data)} totalPages={totalPages} currentPage={8 + i + Object.keys(data.data).length} reportDate={new Date(reportDate).toLocaleDateString()} />
                ))
                :
              TrendLineDataList &&
                TrendLineDataList.map((item, i) => (
                  <Trendline organization={data.organization} data={item} quarters={Object.keys(data.data)} totalPages={totalPages} currentPage={8 + i + Object.keys(data.data).length} reportDate={new Date(reportDate).toLocaleDateString()} />
                ))
            } */}
            <Trendline organization={organization.name} data={trendlineData} months={Object.keys(data.ways)} totalPages={totalPages} currentPage={9} reportDate={new Date(reportDate).toLocaleDateString()} />
            <FigureCoverPage sectionTitle="Waste Composition in Percentage" pageTitle="Figures and Data" Number="4" totalPages={totalPages} currentPage={10} />
            <Composition data={generationData} title={data.quarter} totalPages={totalPages} currentPage={11} reportDate={new Date(reportDate).toLocaleDateString()} />
            <TotalComposition months={Object.keys(data.ways)} organization={organization.name} data={totalCompositionData} quarter={data.quarter} totalPages={totalPages} currentPage={12} reportDate={new Date(reportDate).toLocaleDateString()} />
            <FigureCoverPage sectionTitle="Paper, Plastic, Cans and Glass Waste Recycling" pageTitle="What Happened To Your Waste?" Number="5" totalPages={totalPages} currentPage={13} />
            <PaperRecycling totalPages={totalPages} currentPage={14} reportDate={new Date(reportDate).toLocaleDateString()} />
            <PlasticRecycling totalPages={totalPages} currentPage={15} reportDate={new Date(reportDate).toLocaleDateString()} />
            <CanRecycling totalPages={totalPages} currentPage={16} reportDate={new Date(reportDate).toLocaleDateString()} />
            <GlassRecycling totalPages={totalPages} currentPage={17} reportDate={new Date(reportDate).toLocaleDateString()} />
            <OrganicRecycling totalPages={totalPages} currentPage={18} reportDate={new Date(reportDate).toLocaleDateString()} />
          </div>
        }
      </div>
    );
  }
}

export default Reporting;
