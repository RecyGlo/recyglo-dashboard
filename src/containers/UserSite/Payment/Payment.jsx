/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Container, Card, CardBody, Col, Row, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import CryptoJS from 'crypto-js';
import { getPaymentDetail } from '../../../redux/actions/apiActions/paymentAction';

const convertCurrency = {
  840: 'USD',
  104: 'MMK',
};
class Payment extends React.Component {
  state = {
    data: null,
    gotData: false,
  }

  componentWillMount() {
    console.log(this.props.match.params.paymentId);
    this.props.getPaymentDetail(this.props.match.params.paymentId);
  }

  getPaymentData = (value) => {
    console.log(value);
    const merchant_id = '104104000000387';
    const secret_key = 'B4BDE1B91B054445C14A349C913BB2411FBD921C297DA7AD12053B57A6638B77';
    const payment_description = value.description;
    const order_id = new Date().getTime().toString().substring(12, 0);
    // const order_id = '1587718735379';
    let currency = '104';
    if (value.currency === 'USD') {
      currency = '840';
    }
    // const currency = '104';
    const pad = '000000000000';
    const str = (value.amount * 100).toString();
    const amount = pad.substring(0, pad.length - str.length) + str;

    // const amount = '000000002500';
    const version = '8.5';
    const payment_url = 'https://t.2c2p.com/RedirectV3/payment';
    const result_url_1 = 'https://api.recyglo.info/payment';
    const result_url_2 = 'https://api.recyglo.info/payment/get';
    // eslint-disable-next-line max-len
    const params = `${version}${merchant_id}${payment_description}${order_id}${currency}${amount}${result_url_1}${result_url_2}`;
    const hash = CryptoJS.HmacSHA256(params, secret_key, false);
    const hash_value = hash.toString();

    this.setState({
      gotData: true,
      data: {
        merchant_id,
        secret_key,
        payment_description,
        order_id,
        currency,
        original_amount: value.amount,
        amount,
        version,
        payment_url,
        result_url_1,
        result_url_2,
        params,
        hash_value,
      },
    });
  }

  handleSubmit = (values) => {
    console.log(values);
    // eslint-disable-next-line max-len
    window.open('https://t.2c2p.com/RedirectV3/payment');
    // this.setState({
    //   submitted: true,
    // });
  }

  render() {
    const { data, gotData } = this.state;
    const { payments } = this.props;
    if (payments.detail && !gotData) {
      this.getPaymentData(payments.detail);
    }
    return (
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Card style={{ marginLeft: 'initial', paddingLeft: '20px' }}>
                <CardHeader>
                  <h5>Card Info</h5>
                </CardHeader>
                <CardBody>
                  <div>
                    {data &&
                      <form id="myform" method="post" action={data.payment_url}>
                        <div>
                          <p><b style={{ fontSize: 15 }}>Description: </b>
                            {data.payment_description}
                          </p>
                          <p><b style={{ fontSize: 15 }}>Order ID: </b>
                            {data.order_id}
                          </p>
                          <p><b style={{ fontSize: 15 }}>Service Period: </b>
                            {new Date(payments.detail.servicePeriod.start).toLocaleDateString()}
                            &nbsp;-&nbsp;
                            {new Date(payments.detail.servicePeriod.end).toLocaleDateString()}
                          </p>
                          <p style={{ fontWeight: 500, fontSize: 18 }}>
                            {payments.detail.amount} {convertCurrency[data.currency]}
                          </p>
                        </div>
                        <input type="hidden" name="version" value="8.5" />
                        <input type="hidden" name="merchant_id" value={data.merchant_id} />
                        <input type="hidden" name="currency" value={data.currency} />
                        <input type="hidden" name="result_url_1" value={data.result_url_1} />
                        <input type="hidden" name="result_url_2" value={data.result_url_2} />
                        <input
                          type="hidden"
                          name="hash_value"
                          value={data.hash_value}
                        />
                        <input
                          type="hidden"
                          name="payment_description"
                          value={data.payment_description}
                          readOnly
                        />
                        <input type="hidden" name="order_id" value={data.order_id} readOnly />
                        <input type="hidden" name="amount" value={data.amount} readOnly />
                        <input className="btn btn-success" type="submit" name="submit" value="Checkout" />
                      </form>
                    }
                  </div>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPaymentDetail: (paymentId) => {
    dispatch(getPaymentDetail(paymentId));
  },
});

const mapStateToProps = state => ({
  payments: state.payments,
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);

