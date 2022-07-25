/** @file Main theme utility */
import React from 'react'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'
import { palette } from './palette'
import { shadows } from './shadows'
import { typography, fontFace } from './typography'
import { tokens } from './tokens'
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
  ...tokens,
  components: {
    MuiCssBaseline: {
      styleOverrides: fontFace
    }
  }
})
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
