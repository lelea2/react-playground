# react-playground
Collection of small react components for testing purpose

React function memoize
https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853


### React.memo
```javascript
const List = React.memo(({ items }) => {
  log('renderList');
  return items.map((item, key) => (
    <div key={key}>item: {item.text}</div>
  ));
});

export default function App() {
  log('renderApp');
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(getInitialItems(10));
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        inc
      </button>
      <List items={items} />
    </div>
  );
}
```

### useMemo & useCallback
- useMemo is useful for expensive calculations
- useCallback is useful for passing callbacks needed for optimized child components.

```javscript
const inc = useCallback(() => setCount(c => c + 1), []);
```

