import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

const PocInputWrapper = ({ label, children }) => {
  return (
    <Box sx={{ marginBottom: "calc(var(--space-large) * 1px)" }}>
      <InputLabel>{label}</InputLabel>
      <Box>{children}</Box>
    </Box>
  );
};

export default PocInputWrapper;
