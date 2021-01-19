import React, { Component } from 'react';


class Summary extends Component {
  renderTotalText() {
    const { total, threshold } = this.props;
    let color = null;
    if (total >= 0 && total >= threshold) {
      color = '#00ff00';
    } else if (total >= 0 && total < threshold) {
      color = '#ffff00';
    } else { //total < 0
      color = '#ff0000';
    }
    return (
      <div>
        <h2>Summary</h2>
        <p style={{color: `${color}`}}>{total}</p>
      </div>
    );
  }

  render() {
    return this.renderTotalText();
  }
}

export default Summary;