import "./styles.css";
import { useRef, useState } from "react";
import styled from "styled-components";

const Picker = ({ onChange, options, value }) => {
  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default function App() {
  const inputEl = useRef(null);
  const Button = styled.button`
    border: 1px solid blue;
    margin-left: 8px;
  `;
  const Ul = styled.ul`
    list-style: none;
    text-align: left;
  `;
  const Div = styled.div`
    margin: 10px;
  `;
  const [feeds, setFeeds] = useState([]);
  const [option, setOption] = useState(null);

  const _handleSearch = async (inputVal) => {
    if (!!inputVal) {
      const resp = await fetch(`https://www.reddit.com/r/${inputVal}.json`);
      const { data } = await resp.json();
      setFeeds(data.children);
    } else {
      alert("please enter valid value");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const inputVal = inputEl.current.value;
    await _handleSearch(inputVal);
  };

  const onChange = async (e) => {
    e.preventDefault();
    const val = e.target.value;
    setOption(val);
    await _handleSearch(val);
  };

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input ref={inputEl} type="text" />
        <Button type="submit">Search</Button>
      </form>
      <Div>
        <Picker
          value={option}
          onChange={onChange}
          options={["reactjs", "frontend", "angular"]}
        />
      </Div>
      {feeds?.length > 0 && (
        <Ul>
          {feeds?.map((item, i) => {
            console.log(item);
            return (
              <li key={i}>
                <a target="_blank" rel="noreferrer" href={item.data.url}>
                  {item.data.title}
                </a>
              </li>
            );
          })}
        </Ul>
      )}
    </div>
  );
}
