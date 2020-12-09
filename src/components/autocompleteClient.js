import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useSelector } from "react-redux";

const AutocompleteClient = (props) => {
  const clients = useSelector((selector) => selector.clients);

  const handleChange = (e) => {
    props.onChange((prev) => {
      return { ...prev, client: e.target.innerText };
    });
  };

  return (
    <div>
      <Autocomplete
        style={{ width: 200 }}
        options={clients}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Cliente" variant="outlined" />
        )}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default AutocompleteClient;
