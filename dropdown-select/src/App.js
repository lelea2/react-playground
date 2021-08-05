import "./styles.css";
import SelectDropdown from "./components/SelectDropdown";

const options = [
  {
    id: 1,
    value: "1d"
  },
  {
    id: 2,
    value: "1m"
  },
  {
    id: 3,
    value: "5m"
  },
  {
    id: 4,
    value: "15m"
  },
  {
    id: 5,
    value: "1h"
  },
  {
    id: 6,
    value: "6h"
  }
];
export default function App() {
  const onSelect = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <SelectDropdown
        containerWidth={"100px"}
        placeholder="Select"
        options={options}
        onSelect={onSelect}
      />
    </div>
  );
}
