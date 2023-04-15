import { createTheme } from "@mui/material/styles";
import { colorPalette } from "./colorPalette";
import { MuiButton } from "./MuiButton";
import { typography } from "./typography";
import { MuiCssBaseline } from "./MuiCssBaseline";
import { MuiIconButton } from "./MuiIconButton";
import { MuiAppBar } from "./MuiAppBar";

/**
 * This is used to create a theme used in the whole platform.
 *
 * @see See [Mui Theming](https://mui.com/material-ui/customization/theming/)
 * @param {string} mode
 */
export const theme = (mode) => {
  // MUI Default Theme
  const defaultPalette = createTheme({
    palette: {
      mode: mode,
    },
  }).palette;
  const palette = colorPalette(mode, defaultPalette);
  return createTheme({
    palette,
    typography: typography(palette),
    shape: {
      borderRadius: 0,
    },
    components: {
      MuiCssBaseline: MuiCssBaseline(palette),
      MuiButton: MuiButton(palette),
      MuiIconButton: MuiIconButton(palette),
      MuiAppBar: MuiAppBar(palette),
    },
  });
};
