import { FC, useState, useMemo, createContext } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import ToggleMode from "./ToggleMode";
import { PaletteMode } from "@mui/material";
import { IContext } from "./types";

export const ColorModeContext = createContext<IContext>({
  toggleColorMode: () => {},
});

const App: FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        status: {
          warning: "#C15D17",
          grey: "#A0ADC4",
          white: "#CED2DE",
        },
        palette: {
          mode,
          ...(mode === ("light" as PaletteMode)
            ? {
                // palette values for light mode
                grey: {
                  900: "#222630",
                },
                common: {
                  white: "#fff",
                  black: "#222630",
                },
              }
            : {
                // palette values for dark mode
                grey: {
                  900: "#fff",
                },
                common: {
                  white: "#fff",
                  black: "#222630",
                },
              }),
        },
        shape: {
          borderRadius: 18,
        },
      }),
    [mode]
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ToggleMode />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
