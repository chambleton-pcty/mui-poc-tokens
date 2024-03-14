import { ThemeProvider, createTheme } from "@mui/material/styles";
import { muiBase } from "../themes/muiBase";
import { muiPoc1 } from "../themes/muiPoc1";
import { muiPoc2 } from "../themes/muiPoc2";
import { muiPocTestBed } from "../themes/muiPocTestBed";
import { useState } from "react";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import PocInputWrapper from "./PocInputWrapper";
import PocSelect from "./PocSelect";

const ThemeSwitcher = ({ children }) => {
  const themes = [
    { label: "default MUI", value: "default" },
    { label: "POC 1", value: "poc1" },
    { label: "POC 2", value: "poc2" },
    { label: "MUI TestBed", value: "testbed" },
  ];

  const muiBaseTheme = createTheme(muiBase);
  const poc1Theme = createTheme(muiPoc1);
  const poc2Theme = extendTheme(muiPoc2); // extend not create!
  const muiPocTestBedTheme = createTheme(muiPocTestBed);

  const [selectedTheme, setSelectedTheme] = useState("default");
  const [theme, setTheme] = useState(muiBaseTheme);

  const showThemes = () => {
    return (
      <div style={{ width: 300, float: "right", marginRight: 50 }}>
        <PocInputWrapper label="Theme">
          <PocSelect
            value={selectedTheme}
            onChange={(e) => {
              setTheme(
                e.target.value === "poc1"
                  ? (poc1Theme as any)
                  : e.target.value === "poc2"
                  ? poc2Theme
                  : e.target.value === "testbed"
                  ? muiPocTestBedTheme
                  : muiBase
              );
              setSelectedTheme(e.target.value);
            }}
            options={themes}
          />
        </PocInputWrapper>
      </div>
    );
  };

  return (
    <>
      {showThemes()}
      {selectedTheme === "poc2" ? (
        // need to use CssVarsProvider when replacing MUI variables!
        <CssVarsProvider theme={theme as any}>{children}</CssVarsProvider>
      ) : (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </>
  );
};

export default ThemeSwitcher;
