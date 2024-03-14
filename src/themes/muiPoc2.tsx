import "../tokens/poc2/mui-bundle.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const muiPoc2 = {
  typography: {
    fontFamily: "'Open Sans', 'Arial', 'sans-serif'",
  },
  palette: {
    primary: {
      main: "var(--primary-main)",
      light: "var(--primary-light)",
      dark: "var(--primary-dark)",
      contrastText: "var(--primary-contrast)",
      states: {
        hover: "var(--primary-_states-hover)",
        selected: "var(--primary-_states-selected)",
        focus: "var(--primary-_states-focus)",
        focusVisible: "var(--primary-_states-focusvisible)",
        outlinedBorder: "var(--primary-_states-outlinedborder)",
        focusVisibleOuterBorder:
          "var(--primary-_states-focusvisibleouterborder)",
        focusVisibleInnerBorder:
          "var(--primary-_states-focusvisibleinnerborder)",
      },
    },
    secondary: {
      main: "var(--secondary-main)",
      light: "var(--secondary-light)",
      dark: "var(--secondary-dark)",
      contrastText: "var(--secondary-contrast)",
      states: {
        hover: "var(--secondary-_states-hover)",
        selected: "var(--secondary-_states-selected)",
        focus: "var(--secondary-_states-focus)",
        focusVisible: "var(--secondary-_states-focusvisible)",
        outlinedBorder: "var(--secondary-_states-outlinedborder)",
      },
    },
    error: {
      main: "var(--error-main)",
      light: "var(--error-light)",
      dark: "var(--error-dark)",
      contrastText: "var(--error-contrast)",
      states: {
        hover: "var(--error-_states-hover)",
        selected: "var(--error-_states-selected)",
        focusVisible: "var(--error-_states-focusvisible)",
        outlinedBorder: "var(--error-_states-outlinedborder)",
      },
    },
    warning: {
      main: "var(--warning-main)",
      light: "var(--warning-light)",
      dark: "var(--warning-dark)",
      contrastText: "var(--warning-contrast)",
      states: {
        hover: "var(--warning-_states-hover)",
        selected: "var(--warning-_states-selected)",
        focusVisible: "var(--warning-_states-focusvisible)",
        outlinedBorder: "var(--warning-_states-outlinedborder)",
      },
    },
    info: {
      main: "var(--info-main)",
      light: "var(--info-light)",
      dark: "var(--info-dark)",
      contrastText: "var(--info-contrast)",
      states: {
        hover: "var(--info-_states-hover)",
        selected: "var(--info-_states-selected)",
        focusVisible: "var(--info-_states-focusvisible)",
        outlinedBorder: "var(--info-_states-outlinedborder)",
      },
    },
    success: {
      main: "var(--success-main)",
      light: "var(--success-light)",
      dark: "var(--success-dark)",
      contrastText: "var(--success-contrast)",
      states: {
        hover: "var(--success-_states-hover)",
        selected: "var(--success-_states-selected)",
        focusVisible: "var(--success-_states-focusvisible)",
        outlinedBorder: "var(--success-_states-outlinedborder)",
      },
    },
    text: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      disabled: "var(--text-disabled)",
      divider: "var(--divider)",
      states: {
        hover: "var(--text-_states-hover)",
        selected: "var(--text-_states-selected)",
        focus: "var(--text-_states-focus)",
        focusVisible: "var(--text-_states-focusvisible)",
      },
    },
    action: {
      active: "var(--action-active)",
      hover: "var(--action-hover)",
      selected: "var(--action-selected)",
      disabled: "var(--action-disabled)",
      disabledBackground: "var(--action-disabledbackground)",
      focus: "var(--action-focus)",
    },
  },
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
          borderRadius: "calc(var(--borderradiusmd) * 1px)",
          fontSize: "calc(var(--2) * 1px)",
          height: "calc(var(--4) * 1px)",
          marginRight: "calc(var(--1) * 1px)",
          "&:focus-visible": {
            boxShadow: "none",
            outline: "-webkit-focus-ring-color auto 1px",
          },
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--_components-alert-info-background)",
          color: "var(--_components-alert-info-color)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderColor: "var(--grey-400)",
          borderRadius: "calc(var(--borderradiusmd) * 1px)",
          boxShadow: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--background-default)",
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        inputProps: {
          style: {
            borderRadius: "calc(var(--borderradiusmd) * 1px)",
            padding: 0,
            paddingLeft: "calc((var(--4) - var(--2)) * 1px)",
            height: "calc(var(--5) * 1px)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: "bold",
          marginBottom: "calc(var(--1) * 1px)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: "calc(var(--borderradiusmd) * 1px)",
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
              borderWidth: "calc(var(--1)/4 * 1px)",
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
          // height: "calc(var(--3) * 1px)",
          //color: "var(--input-field-content-color)",
        },
        select: {
          padding: "calc(var(--1) * 1px)",
          paddingLeft: "calc(var(--2) * 1px)",
        },
        icon: {
          height: "calc(var(--4) * 1px)",
          width: "calc(var(--4) * 1px)",
          top: "calc(var(--1) / 2 * 1px)",
        },
      },
    },
  },
};
