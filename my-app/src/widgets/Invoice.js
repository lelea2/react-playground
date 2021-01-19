import React, { Component } from 'react';
import EditableItem from './EditableItem';

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnFocusOut = this.handleOnFocusOut.bind(this);
    this.handleAmountOnFocus = this.handleAmountOnFocus.bind(this);
    this.handleAmountOnFocusOut = this.handleAmountOnFocusOut.bind(this);
  }

  handleOnFocus(text) {
    console.log('test on focus', text);
    // this.props.handleInvoiceEdit({ name: text });
  }

  handleOnFocusOut(text) {
    console.log('test out focus', text);
    this.props.handleInvoiceEdit({ name: text });
  }

  handleAmountOnFocus(text) {
    console.log('test on focus', text);
    //this.props.handleInvoiceEdit({ amount: text });
  }

  handleAmountOnFocusOut(item) {
    debugger;
    // console.log('test out focus', text);
    this.props.handleInvoiceEdit({ amount: 100 });
  }

  renderList() {
    const { list } = this.props;
    return (
      <table>
        <tr>
          <th>Date</th>
          <th>Ref</th>
          <th>Client Name</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {list.map((item) => {
          return (
            <tr key={item.ref}>
              <td>{item.date}</td>
              <td>{item.ref}</td>
              <td>
                <EditableItem
                  item={item}
                  keyId="name"
                  handleOnFocusOut={this.props.handleInvoiceEdit}
                />
              </td>
              <td>
                <EditableItem
                  item={item}
                  keyId="amount"
                  handleOnFocusOut={this.props.handleInvoiceEdit}
                />
              </td>
              <td>{item.status}</td>
            </tr>
          );
        })}
      </table>
    );
  }

  renderEmpty() {
    return (
      <div>No invoice data</div>
    );
  }

  render() {
    const { list, isDirty } = this.props;
    return (
      <div>
        <h2>Invoice</h2>
        {list?.length ? this.renderList() : this.renderEmpty()}
        {isDirty && <button onClick={this.props.handleSaveInvoiceForm}>Save</button>}
      </div>
    )
  }
}

export default Invoice;