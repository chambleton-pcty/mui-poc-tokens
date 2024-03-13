export const muiPocTestBed = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-root": {
            borderColor: "#FF00BB", // Change this to the desired hover border color
          },
        },
      },
    },
  },
};
