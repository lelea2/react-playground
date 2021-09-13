const useMediaQuery = (query, whenTrue, whenFalse) => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match ? whenTrue : whenFalse;
};

/////// Test
const ResponsiveText = () => {
  const text = useMediaQuery(
    '(max-width: 400px)',
    'Less than 400px wide',
    'More than 400px wide'
  );

  return <span>{text}</span>;
};

ReactDOM.render(<ResponsiveText />, document.getElementById('root'));