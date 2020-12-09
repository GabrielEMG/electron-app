import { useState, useEffect } from "react";

const FilterSearcher = (props) => {
  const [state, setState] = useState({
    type: props.types[0],
    value: "",
  });
  const data = props.data;
  console.log(state, data);
  const handleChange = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    props.onChange(data);
  }, [props.data]);

  useEffect(() => {
    const filteredData = data.filter((doc) => {
      const docValue = doc[state.type].toString().toLowerCase();
      const filter = state.value.toString().toLowerCase();
      return docValue.includes(filter);
    });
    props.onChange(filteredData);
  }, [state]);

  return (
    <div>
      <input name="value" onChange={(e) => handleChange(e)} />
      <select name="type" onChange={(e) => handleChange(e)}>
        {props.types.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSearcher;
