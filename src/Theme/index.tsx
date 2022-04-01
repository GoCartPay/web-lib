/** @file Main theme utility */
import React from 'react'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'
import { palette } from './palette'
import { shadows } from './shadows'
import { typography } from './typography'
import TWKLausanne from './typography/fonts/TWK-Lausanne/TWKLausanne-400.ttf'
import CssBaseline from '@mui/material/CssBaseline'

/** Our partial theme */
const mappedTheme = {
  palette,
  shadows,
  typography
}

/** Our full theme */
export const theme = createTheme({
  ...mappedTheme,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'TWK Lausanne';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${TWKLausanne}) format('truetype');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `
    }
  }
})

console.log({ theme })

/** Theme provider, pre-filled with Spruce theme */
export const ThemeProvider = (props?: Record<string, unknown>) => {
  const { children, ...otherProps } = props
  return (
    <MuiThemeProvider theme={theme} {...otherProps}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default theme
