export default function Picker({ onChange, options, value }) {
  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
