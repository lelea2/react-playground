const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};


//////// Test
const Counter = () => {
  const [value, setValue] = React.useState(0);
  const lastValue = useDebounce(value, 500);

  return (
    <div>
      <p>
        Current: {value} - Debounced: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));