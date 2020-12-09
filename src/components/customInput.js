import { TextField } from "@material-ui/core";

const CustomInput = (props) => {
  const { label, placeholder, name, type, onChange, sub } = props;
  const handleChange = (e) => {
    onChange((prev) => {
      if (sub) {
        return {
          ...prev,
          [e.target.name]: { ...prev[e.target.name], [sub]: e.target.value },
        };
      } else {
        return { ...prev, [e.target.name]: e.target.value };
      }
    });
  };

  return (
    <TextField
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => handleChange(e)}
      label={label}
    />
  );
};

export default CustomInput;
