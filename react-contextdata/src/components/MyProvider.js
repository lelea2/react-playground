import MyContext from './MyContext';
import { useState } from "react";

function MyProvider(props) {
  const [cars, setCars] = useState({
    car001: { name: 'Honda', price: 100 },
    car002: { name: 'BMW', price: 150 },
    car003: { name: 'Mercedes', price: 200 } 
  });

  return (
    <MyContext.Provider
      value={{
        cars,
        incrementPrice: selectedID => {
          console.log('>>>> increase price');
          const temp = Object.assign({}, cars);
          temp[selectedID].price = temp[selectedID].price + 1;
          setCars(temp);
        },
        decrementPrice: selectedID => {
          console.log('>>>> decrease price');
          const temp = Object.assign({}, cars);
          temp[selectedID].price = temp[selectedID].price - 1;
          setCars(temp);
        }
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyProvider;

