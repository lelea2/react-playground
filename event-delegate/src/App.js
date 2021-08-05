import React, { useState, useCallback } from 'react';
import styled from 'styled-components/macro';
import Modal from './components/Modal';

const Colors = {
  COINBASE: 'rgb(6, 103, 208)',
  SMOKE: '#ccc',
  RED: 'red',
  BLUE: 'blue',
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const Card = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${Colors.SMOKE};
  padding: 15px;
  height: 100vh;
  width: 100vw;
  overflow: auto;

  @media (min-width: 700px) {
    width: 500px;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${props => props.color};
`;

const NumberedList = styled.ol`
  li {
    padding: 10px;
  }
`;

const Red = styled.div`
  background: ${Colors.RED};
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;

const Blue = styled.div`
  background: ${Colors.BLUE};
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;

const BoxContainer = styled.div`
  display: flex;
`;

const ColorDiv = styled.div`
  cursor: pointer;
`;

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleColor, setTitleColor] = useState(Colors.COINBASE);
  const [showRed, setShowRed] = useState(true);
  const [blueBox, setBlueBox] = useState([uuidv4()]); // initialize first blue box

  let openModal = () => {
    setIsModalOpen(true)
  };

  let handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputMatch = (color) => {
    if (Colors[color]) {
      setTitleColor(Colors[color])
      handleModalClose();
    }
  }

  let handleOnChange = useCallback(e => {
    const number = parseInt(e.target.value);
    if (!isNaN(number)) {
      for (let i = 1; i <= number; i++) {
        delay(1000).then(() => {
          console.log(i);
        });
      }
    }
  }, []);

  const handleContainerClick = (color, currIndex) => {
    console.log(color);
    if (color === 'red') {
      setShowRed(false);
    } else if (color === 'blue') {
      const arr = blueBox;
      arr.splice(currIndex, 0, uuidv4());
      // console.log(arr);
      setBlueBox([...arr]);
    }
  };

  const delay = t => {
    return new Promise((resolve) => {
      setTimeout(resolve, t);
    });
  };

  const handleColorAlert = (event) => {
    const id = event.target.id;
    if (Colors[id]) {
      alert(`${id}: ${Colors[id]}`);
    }
  };

  return (
    <div>
      <Container>
        <Card>
          <Title color={titleColor}>Welcome to Coinbase</Title>
          <p>
            Please complete as many of the following tasks as you can in the
            alotted time.
          </p>
          <NumberedList>
            <li>Get this page to compile</li>
            <li>
              On desktop: The "card" component should be vertically and
              horizontally centered in the container.
            </li>
            <li>
              On mobile: The "card" component should take up 100% of the screens
              width and height.
            </li>
            <li>
              The "red" box and "blue" box below should should be positioned
              side by side.
            </li>
            <li>
              <div>
                If you click a "red" box it should be removed from the dom. If
                you click a "blue" box it should add another blue box to the
                right of the original blue box.
              </div>
              <BoxContainer>
                {showRed && <Red onClick={() => handleContainerClick('red')}/>}
                {blueBox.length > 0 && blueBox.map((item, i) => (
                  <Blue key={`${item}_${i}`} onClick={() => handleContainerClick('blue', i)} />
                ))}
              </BoxContainer>
            </li>
            <li>
              This <button onClick={openModal}>button</button> should launch the "Modal" component.
            </li>
            <li>
              <input onChange={handleOnChange} /> If you put a number in
              here, it should log 1 through n in the terminal.
            </li>
            <li>Should list all possible colors here:
              <div onClick={handleColorAlert}>
                {Object.keys(Colors).map((item) => (
                  <ColorDiv key={`color_${item}`} id={item}>{item}</ColorDiv>
                ))}
              </div>
            </li>
            <li>
              Use event delegation to alert the color name above, when clicked
            </li>
          </NumberedList>
          <Modal
            isOpen={isModalOpen}
            handleClose={handleModalClose}
            onInputMatch={handleInputMatch}
          />
        </Card>
      </Container>
    </div>
  );
};

export default App;