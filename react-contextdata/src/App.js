import './App.css';
import MyProvider from './components/MyProvider';
import ProductList from './components/ProductList';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <ProductList />
      </div>
    </MyProvider>
  );
}

export default App;