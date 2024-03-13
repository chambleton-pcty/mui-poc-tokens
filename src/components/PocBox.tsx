import Box from "@mui/material/Box";

const PocBox = (props) => {
  const styles = {
    backgroundColor: "var(--ui-background-01)",
    borderRadius: "calc(var(--border-radius-small) * 1px)",
    padding: "calc(var(--space-large) * 1px)",
    border: "1px solid var(--border-color-01, #DFE4E8)",
    boxShadow: "0px 2px 4px 0.5px rgba(50, 62, 72, 0.08)",
  };
  console.log(styles);
  return <Box {...props} component="section" sx={styles} />;
};

export default PocBox;
