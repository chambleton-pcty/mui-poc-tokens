import { TextField } from "@mui/material";

const PocInput = (props) => {
  return <TextField {...props} className="error" fullWidth />;
};
// const PocInput = styled(TextField)({
//   // your custom styles go here
//   width: "100%",
// }) as typeof TextField;

export default PocInput;
