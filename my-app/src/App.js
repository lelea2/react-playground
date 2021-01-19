import './App.css';
import React, { Component } from 'react';
import Transaction from './widgets/Transaction';
import Summary from './widgets/Summary';
import Invoice from './widgets/Invoice';
import transactionData from './mock/transaction';
// import summaryData from './mock/summary';
import invoiceData from './mock/invoice';
import invoiceEdit from './mock/invoice-edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionData: [],
      // summaryData: {},
      invoiceData: {},
      dirty: false,
    };
    this.handleInvoiceEdit = this.handleInvoiceEdit.bind(this);
  }

  componentDidMount() {
    this.fetchTransaction();
    // this.fetchSummary();
    this.fetchInvoice();

    // Promise.all({
    //   transaction: this.fetchTransaction(),
    //   invoice: this.fetchInvoice(),
    // }).then(() => {
    //   this.setState({})
    // });
  }

  fetchTransaction() {
    this.setState({ transactionData });
  }

  // fetchSummary() {
  //   this.setState({ summaryData });
  // }

  fetchInvoice() {
    this.setState({ invoiceData })
    // fetch('/api/invoice?startDate=&endDate&start=0&count=20'); //
    // fetch('/api/invoice?startDate=&endDate&start=20&count=20&sessionId');


    // // whole list items
    // this.setState({
    //   listInvoiceData: this.state.listinvoiceData.concat(resp.data), // concatting the list
    // })
  }

  // getDraftState() {
  //   this.setState({
  //     draftInvoice: ...
  //   })
  // }

  handleSaveInvoiceForm() {

  }

  handleInvoiceEdit(item, keyId, data) {
    // { name: '' } or { amount: }
    // fetch new data
    console.log(data, keyId, item);
    const { invoiceData } = this.state;
    const pickedInvoice = invoiceData.data?.filter(invoice => invoice.ref === item.ref);
    pickedInvoice[keyId] = data;
    // this.setState({ invoiceData: invoiceEdit });
    // TODO: decide to whether call to get amount, how data collection will be generated.
    this.setState({
      dirty: true,
    });
    if (keyId === 'amount') { //edit amount
      const diff = parseInt(data, 10) - parseInt(item.amount, 10);

      this.setState({
        invoiceData: {
          data: invoiceEdit.data,
          metadata: {
            total: this.state.invoiceData.metadata.total + diff
          }
        }
      })
    } else { // name
      this.setState({
        invoiceData: {
          data: invoiceEdit.data,
          metadata: this.state.invoiceData.metadata
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Transaction
          list={this.state.transactionData}
        />
        <Summary total={this.state.invoiceData.metadata?.total} threshold={50} />
        <Invoice list={this.state.invoiceData.data} handleInvoiceEdit={this.handleInvoiceEdit} isDirty={this.state.dirty} />
      </div>
    );
  }
}

export default App;
