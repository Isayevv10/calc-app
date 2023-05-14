import {
  Theme,
  ThemeOptions,
  Palette,
  PaletteOptions,
  PaletteMode,
} from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      warning: string;
      grey: string;
      white: string;
    };
  }
  interface ThemeOptions {
    status?: {
      warning?: string;
      grey?: string;
      white?: string;
    };
  }

  interface Palette {
    mode: string;
    grey: {
      900: string;
    };
    common: {
      white: string;
      black: string;
    };
  }

  interface PaletteOptions {
    mode?: string;
    grey?: {
      900?: string;
    };
    common: {
      white?: string;
      black?: string;
    };
  }
}
