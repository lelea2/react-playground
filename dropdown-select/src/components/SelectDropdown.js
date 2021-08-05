import styled from "styled-components";
import { useEffect, useState, useCallback, useRef } from "react";

const Button = styled.button`
  padding: 15px;
  border: none;
  width: 100%;
  cursor: pointer;
  background: transparent;
  color: #fff;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

const DropdownList = styled.ul`
  padding: 0;
  list-style-type: none;
  position: absolute;
  top: 29px;
  border: 1px solid #cdcdcd;
  width: calc(100% - 2px);
  text-align: left;
  background: #1e1e1e;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  border-bottom: ${(props) =>
    props.showBorder ? "1px solid #cdcdcd" : "none"};
  cursor: pointer;
`;

const SelectDropdownContainer = styled.div`
  border: 1px solid #cdcdcd;
  max-width: ${(props) =>
    props.containerWidth ? props.containerWidth : "200px"};
  position: relative;
  background: #1e1e1e;
  color: #fff;
`;

const SelectDropdown = ({
  containerWidth,
  onSelect,
  placeholder, // default empty
  options, // [] //  [{ id, value }]
  selectedValue // my current selected value
}) => {
  const [showOption, setShowOption] = useState(false);
  const [currValue, setCurrValue] = useState(selectedValue);
  const dropdownEl = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (!dropdownEl.current.contains(e.target)) {
      setShowOption(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleToggle = () => {
    setShowOption(!showOption);
  };

  const handleValueSelect = (item) => {
    setCurrValue(item);
    handleToggle(); // toggle the dropdown
    onSelect(item);
  };

  return (
    <SelectDropdownContainer ref={dropdownEl} containerWidth={containerWidth}>
      <div>
        <Button type="button" onClick={handleToggle}>
          <span>{currValue ? currValue.value : placeholder}</span>
          {showOption ? <span>&#9650;</span> : <span>&#9660;</span>}
        </Button>
      </div>
      {showOption && options.length > 0 && (
        <DropdownList>
          {options.map((item, i) => (
            <DropdownItem
              showBorder={i < options.length - 1}
              key={item.id}
              onClick={() => handleValueSelect(item)}
            >
              {item.value}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </SelectDropdownContainer>
  );
};

export default SelectDropdown;
