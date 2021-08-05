import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalBody = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 45px;
  max-width: 400px;
  margin: 250px auto 0;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 4px;
  top: 2px;
  color: #bbb;
  font-weight: bold;
  font-size: 25px;
  border: 0;
  background: none;
  cursor: pointer;
`;

const TextInput = styled.textarea`
  margin-top: 10px;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;

const NumberedList = styled.ol`
  li {
    padding: 10px;
  }
`;

const Modal = (props) => (
  <div>
    {props.isOpen ? (
      <Background>
        <ModalBody>
          <h1>Great work!</h1>
          <CloseButton onClick={props.handleClose}>&times;</CloseButton>
          <NumberedList>
            <li>Clicking the close button should close the modal.</li>
            <li>
              Writing one of the "Colors" constants names (case insensitive) in
              the text area below should set the title color on the main page
              and close this modal.
            </li>
          </NumberedList>
          <TextInput onChange={(e) => props.onInputMatch(e.target.value)} />
        </ModalBody>
      </Background>
    ) : (
      ''
    )}
  </div>
);

export default Modal;
