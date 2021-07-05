import React, { memo, useCallback } from "react";
import ReactDOM from "react-dom";
import VirtualScroll from "./VirtualScroll";
import "./styles.css";

// usage:
const Item = memo(({ index }) => (
  <div
    style={{
      height: 30 + (index % 10),
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 10px"
    }}
    className="row"
    key={index}
  >
    <img
      alt={index}
      src={`http://lorempixel.com/30/30/animals/${(index % 10) + 1}`}
    />
    row index {index}
  </div>
));

function App() {
  const getChildHeight = useCallback(index => 30 + (index % 10), []);

  return (
    <div className="App">
      <h1>Virtual Scroll</h1>
      <VirtualScroll
        itemCount={10000}
        height={300}
        getChildHeight={getChildHeight}
        Item={Item}
      />
      <hr />
      <h1>Hooks are awesome!</h1>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/500tech/hook-cook-book"
      >
        Explore more examples
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
