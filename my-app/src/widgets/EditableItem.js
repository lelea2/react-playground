import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';

class EditableItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnFocusOut = this.handleOnFocusOut.bind(this);
  }

  handleOnFocus() {
    // this.props.handleOnFocus
  }

  handleOnFocusOut(text) {
    this.props.handleOnFocusOut(this.props.item, this.props.keyId, text);
  }

  render() {
    const { item } = this.props;
    const text = item[this.props.keyId];
    return (
      <EditableLabel
        text={text}
        onFocus={this.handleOnFocus}
        onFocusOut={this.handleOnFocusOut}
        inputWidth='200px'
        inputHeight='25px'
        inputMaxLength='50'
        labelFontWeight='bold'
        inputFontWeight='bold'
      />
    );
  }
}

export default EditableItem;