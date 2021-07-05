import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import UpperRightArrow from "./upper_right_arrow";
import Spinner from "./spinner";

const FlexForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 4px 12px;
  border: 1px solid #cdcdcd;
  margin-right: 12px;
  flex: 1;
`;

const URLContainer = styled.ul`
  list-style: none;
  height: 150px;
  width: 100%;
  overflow-y: auto;
  margin-top: 12px;
  padding: 0;
`;

const URLItem = styled.li`
  padding: 12px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.hasBottom && css`
      border-bottom: 1px solid #cdcdcd;
    `
  }
`;

const URLSubItem = styled.div`
  flex: 1;
  ${(props) =>
    props.rightTextAlign && css`
      text-align: right;
    `
  }
`;

const Button = styled.button`
  color: #fff;
  background: #4353FF;
  border: none;
  height: 60px;
  width: 100px;
`;

const URLInput = ({ urls, onSubmit, isLoading }) => {
  const inputEl = useRef(null);
  const [ url, setUrl ] = useState(null);
  
  function isURL(str) {
    return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(str); 
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    setUrl(value);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
//     const originalUrl = inputEl.current.value;
//     console.log('>>>> originalUrl', inputEl.current.value);
    // Instead of using ref here, having to get base on url input to satisfy the test
    if (isURL(url)) {
      onSubmit(url);
      // reset input value
      inputEl.current.value = '';
    }
  };

  return (
    <>
      <FlexForm onSubmit={handleFormSubmit}>
        <Input disabled={isLoading} ref={inputEl} onChange={handleOnChange} type="text" placeholder={isLoading ? "Submitting a link" : "Shorten your link"} />
        <Button disabled={isLoading} type="submit">{isLoading ? <Spinner /> : <span>Submit</span>}</Button>
      </FlexForm>
      {urls.length > 0 && (
        <URLContainer>
          {urls.map((item, i) => (      
            <URLItem key={i} data-automation-id="url-item" hasBottom={i < urls.length - 1}>
              <URLSubItem>{item[0]}</URLSubItem>
              <URLSubItem rightTextAlign={true}>
                <a href={item[1]} target="_blank" rel="noopener">
                  {item[1]}
                </a>
                <UpperRightArrow />
              </URLSubItem>
            </URLItem>
          ))}
        </URLContainer>
      )}
    </>
  );
}

export default URLInput;