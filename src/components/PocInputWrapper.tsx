import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

const PocInputWrapper = ({ label, children }) => {
  return (
    <Box sx={{ margin: 2 }}>
      <InputLabel>{label}</InputLabel>
      <Box>{children}</Box>
    </Box>
  );
};

export default PocInputWrapper;
