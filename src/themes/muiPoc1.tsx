import "../tokens/token-bundle.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const muiPoc1 = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "text-transform": "none",
          boxShadow: "none",
          backgroundColor: "var(--button-background-color)",
          borderColor: "var(--button-border-color)",
          borderRadius: "calc(var(--button-border-radius) * 1px)",
          color: "var(--button-text-color)",
          fontSize: "calc(var(--button-font-size) * 1px)",
          fontWeight: "var(--button-font-weight)",
          height: "calc(var(--button-height) * 1px)",
          marginRight: "calc(var(--button-gap) * 1px)",
          "&:focus-visible": {
            boxShadow: "none",
            outline: "-webkit-focus-ring-color auto 1px",
          },
          "&:hover": {
            backgroundColor: "rgba(50, 62, 72, 0.08) 0px 2px 4px 0.5px",
            boxShadow: "none",
          },
        },
      },
    },

    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--semantic-default)",
          color: "var(--semantic-tint)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderColor: "var(--input-border-color)",
          borderRadius: "calc(var(--border-radius-small) * 1px)",
          boxShadow: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--input-background-color)",
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        inputProps: {
          style: {
            padding: 0,
            paddingLeft:
              "calc((var(--value-base) - var(--value-x-small)) * 1px)",
            height: "calc(var(--size-x-large) * 1px)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "calc(var(--font-size-075) * 1px)",
          fontWeight: "var(--font-weight-200)",
          color: "var(--input-placeholder-text-color:)",
          marginBottom: "calc(var(--value-x-small) * 1px)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "calc(var(--border-radius-small) * 1px)",
          color: "var(--input-field-content-color)",
        },
        notchedOutline: {
          borderColor: "var(--input-border-color)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // "& :hover .MuiOutlinedInput-root": {
          //   borderColor: "#FF00BB", // Change this to the desired hover border color
          // },
          "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--input-border-color-error)",
              borderWidth: "calc(var(--size-xx-small) * 1px)",
            },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreIcon,
      },
      styleOverrides: {
        root: {
          height: "calc(var(--size-x-large) * 1px)",
          color: "var(--input-field-content-color)",
        },
        select: {
          padding: "calc(var(--size-base) * 1px)",
          paddingLeft: "calc((var(--value-base) - var(--value-x-small)) * 1px)",
        },
        icon: {
          height: "calc(var(--size-large) * 1px)",
          width: "calc(var(--size-large) * 1px)",
          top: "calc(var(--value-x-small) * 1px)",
        },
      },
    },
  },
};
