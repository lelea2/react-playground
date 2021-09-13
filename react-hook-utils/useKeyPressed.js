const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = React.useState(false);

  const downHandler = ({ key }) => {
    if (key === targetKey) setKeyPressed(true);
  };

  const upHandler = ({ key }) => {
    if (key === targetKey) setKeyPressed(false);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
};


///////// Test
const MyApp = () => {
  const wPressed = useKeyPress('w');

  return <p>The "w" key is {!wPressed ? 'not ' : ''}pressed!</p>;
};

ReactDOM.render(<MyApp />, document.getElementById('root'));