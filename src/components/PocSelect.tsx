import { FormHelperText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const PocSelect = ({ options, value, onChange, error, helperText }) => {
  return (
    <>
      <Select
        value={value || "empty"}
        onChange={onChange}
        error={error}
        sx={{ width: "100%" }}
        renderValue={(value) => {
          if (value === "empty") {
            return <span style={{ color: "#A8B2BA" }}>--select--</span>;
          }
          return options[value - 1].label;
        }}
      >
        {options &&
          options.map((o) => <MenuItem value={o.value}>{o.label}</MenuItem>)}
      </Select>
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </>
  );
};

export default PocSelect;
