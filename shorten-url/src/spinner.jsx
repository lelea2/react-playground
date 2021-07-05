import React from "react";
import styled from "styled-components";

const SpinningSVG = styled.svg`
  width: 20px;
  height: 20px;
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Icon() {
  return (
      <SpinningSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          fill="white"
          d="M61.934 7.734C44.86 3.16 26.664 9.336 15.903 23.36 5.145 37.382 3.883 56.554 12.719 71.867c8.84 15.31 26.074 23.82 43.602 21.512 17.527-2.304 31.98-14.988 36.555-32.062a6.233 6.233 0 00-.543-4.832 6.259 6.259 0 00-3.835-2.98 6.256 6.256 0 00-4.813.668 6.238 6.238 0 00-2.879 3.914 31.228 31.228 0 01-26.113 22.898 31.221 31.221 0 01-31.145-15.363 31.21 31.21 0 012.277-34.648 31.207 31.207 0 0132.88-11.164 6.255 6.255 0 007.812-4.379 6.253 6.253 0 00-4.582-7.695z"
        ></path>
      </SpinningSVG>
  );
}

export default Icon;