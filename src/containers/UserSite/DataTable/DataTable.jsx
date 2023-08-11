/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import ReactBootstrapTable from '../../../shared/components/table/ReactBootstrapTable';
import { getLogisticsByOrganization } from '../../../redux/actions/apiActions/logisticsActions';
import { getUserDetailWithPromise } from '../../../redux/actions/apiActions/userActions';
import history from '../../../shared/utils/history';

const ids = {};
let count = 0;

class DataTable extends PureComponent {
  constructor(props) {
    super(props);

    this.heads = [
      {
        dataField: 'pickUpTime',
        text: 'Date ',
        formatter: this.dateFormatter,
        filter: textFilter(),
      },
      {
        dataField: 'items',
        text: 'Paper ',
        formatter: this.paperFormatter,
      },
      {
        dataField: 'items',
        text: 'Plastic ',
        formatter: this.plasticFormatter,
      },
      {
        dataField: 'items',
        text: 'Can ',
        formatter: this.canFormatter,
      },
      {
        dataField: 'items',
        text: 'Glass ',
        formatter: this.glassFormatter,
      },
      {
        dataField: 'items',
        text: 'Organic ',
        formatter: this.organicFormatter,
      },
      {
        dataField: 'items',
        text: 'E-waste ',
        formatter: this.ewasteFormatter,
      },
    ];

    this.state = {
      rows: null,
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('jwt');
    const { id } = jwtDecode(token);
    getUserDetailWithPromise(id).then((response =>
      // eslint-disable-next-line no-underscore-dangle
      this.props.getLogisticsByOrganization(response.organizationId._id)
    ));
  }

  componentDidUpdate() {
    if (this.props.logistics) {
      this.updateRows();
    }
  }

  dateFormatter = cell => (
    <p>{new Date(cell).toLocaleDateString()}</p>
  )

  paperFormatter = cell => (
    cell.map(item => (
      item.productType === 'Papers' && <p>{item.productName}: {item.quantity} kg</p>
    ))
  )

  plasticFormatter = cell => (
    cell.map(item => (
      item.productType === 'Plastics' && <p>{item.productName}: {item.quantity} kg</p>
    ))
  )

  canFormatter = cell => (
    cell.map(item => (
      item.productType === 'Cans' && <p>{item.productName}: {item.quantity} kg</p>
    ))
  )

  glassFormatter = cell => (
    cell.map(item => (
      item.productType === 'Glasses' && <p>{item.productName}: {item.quantity} kg</p>
    ))
  )

  organicFormatter = cell => (
    cell.map(item => (
      item.productType === 'Organic' && <p>{item.productName}: {item.quantity} kg</p>
    ))
  )

  ewasteFormatter = cell => (
    cell.map(item => (
      item.productType === 'E-waste' && <p>{item.productName}: {item.quantity} kg</p>
    ))
  )

  createCustomExportCSVButton = (onClick) => {
    // eslint-disable-next-line no-unused-expressions
    <button style={{ color: 'red' }} onClick={onClick}>Custom Export CSV Btn</button>;
  }

  idFormatter = (cell) => {
    if (cell in ids) {
      return (<span>{JSON.stringify(ids[cell])}</span>);
    }
    count += 1;
    ids[cell] = count;
    return (<span>{JSON.stringify(count)}</span>);
  }

  updateRows() {
    this.setState({ rows: this.props.logistics.list });
  }

  redirectToEditPage = (organizationId) => {
    // alert('Comming Soon');
    history.push(`/organizations/edit/${organizationId}`);
    window.location.reload(true);
  }

  // rowEvents = {
  //   onClick: (e, row, rowIndex) => {
  //     console.log(`clicked on row with index: ${rowIndex}`);
  //   },
  // };


  render() {
    const { rows } = this.state;
    return (
      <Col md={12} lg={12}>
        <Card className="data-card">
          <CardBody>
            {rows &&
              <ReactBootstrapTable
                heads={this.heads}
                rows={rows}
                // rowEvents={this.rowEvents}
              />
            }
          </CardBody>
        </Card>
      </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
