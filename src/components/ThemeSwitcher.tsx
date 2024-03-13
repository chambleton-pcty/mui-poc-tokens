import { ThemeProvider, createTheme } from "@mui/material/styles";
import { muiBase } from "../themes/muiBase";
import { muiPoc1 } from "../themes/muiPoc1";
import { muiPoc2 } from "../themes/muiPoc2";
import { muiPocTestBed } from "../themes/muiPocTestBed";
import { useState } from "react";

const ThemeSwitcher = ({ children }) => {
  const themes = [
    { label: "default MUI", value: "default" },
    { label: "POC 1", value: "poc1" },
    { label: "POC 2", value: "poc2" },
    { label: "MUI TestBed", value: "testbed" },
  ];

  const muiBaseTheme = createTheme(muiBase);
  const poc1Theme = createTheme(muiPoc1);
  const poc2Theme = createTheme(muiPoc2);
  const muiPocTestBedTheme = createTheme(muiPocTestBed);

  const [selectedTheme, setSelectedTheme] = useState("default");
  const [theme, setTheme] = useState(muiBaseTheme);

  const showThemes = () => {
    return (
      <>
        Theme: &nbsp;
        <select
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
        >
          {themes.map((t) => (
            <option value={t.value}>{t.label}</option>
          ))}
        </select>
        <br /> <br />
      </>
    );
  };

  return (
    <>
      {showThemes()}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </>
  );
};

export default ThemeSwitcher;
