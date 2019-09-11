import * as React from "react";
import styled from "@emotion/styled";

const SearchBoxInput = styled.input`
  margin: 10px auto;
  width: 100%;
  border: 1px solid #ededed;
  padding: 16px;
`;

class SearchBox extends React.Component {
  handleOnChange(e) {
    const { value } = e.target;
    this.props.handleOnSearch(value);
  }

  render() {
    return (
      <SearchBoxInput
        onChange={this.handleOnChange.bind(this)}
        placeholder="Search name..."
      />
    );
  }
}

export default SearchBox;
