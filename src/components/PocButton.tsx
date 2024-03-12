import Button from "@mui/material/Button";

const PocButton = (props) => {
  if (props.variant === "outlined") {
    return <Button {...props} variant="outlined" className="outline" />;
  }
  return <Button {...props} variant="contained" />;
};

export default PocButton;
