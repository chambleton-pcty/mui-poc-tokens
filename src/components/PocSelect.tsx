import { FormHelperText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const PocSelect = ({
  options,
  value,
  onChange,
  error = false,
  helperText = "",
}) => {
  return (
    <>
      <Select
        value={value || "empty"}
        onChange={onChange}
        error={error}
        fullWidth
        renderValue={(value) => {
          const index = options?.findIndex((x) => x.value === value);
          if (value === "empty" || !options || index < 0) {
            return <span style={{ color: "#A8B2BA" }}>--select--</span>;
          }
          return options[index]?.label;
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
