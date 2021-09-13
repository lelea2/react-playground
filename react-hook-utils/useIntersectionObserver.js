const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

///////// Test
const MyApp = () => {
  const ref = React.useRef();
  const onScreen = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <div>
      <div style={{ height: '100vh' }}>Scroll down</div>
      <div style={{ height: '100vh' }} ref={ref}>
        <p>{onScreen ? 'Element is on screen.' : 'Scroll more!'}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));