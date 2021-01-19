import React, { Component } from 'react';

class Transaction extends Component {
  renderAmount(amount) {
    return amount > 0 ? (
      <span style={{color: "#008000"}}>{amount}</span>
    ) : (
      <span style={{color: "#ff0000"}}>{amount}</span>
    )
  }

  renderList() {
    const { list } = this.props;
    return (
      <table>
        <tr>
          <th>Date</th>
          <th>Ref</th>
          <th>Amount</th>
        </tr>
        {list.map((item) => {
          return (
            <tr key={item.ref}>
              <td>{item.date}</td>
              <td>{item.ref}</td>
              <td>{this.renderAmount(item.amount)}</td>
            </tr>
          );
        })}
      </table>
    );
  }

  renderEmpty() {
    return (
      <div>There is no transctions</div>
    )
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <h2>Transaction</h2>
        {list?.length ? this.renderList() : this.renderEmpty()}
      </div>
    )
  }
}

export default Transaction;