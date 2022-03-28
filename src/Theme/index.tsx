/** @file Main theme utility */
import React from 'react'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'
import { palette } from './palette'

/** Our partial theme */
const mappedTheme = {
  palette
}

/** Our full theme */
export const theme = createTheme(mappedTheme)

/** Theme provider, pre-filled with Spruce theme */
export const ThemeProvider = (props?: Record<string, unknown>) => (
  <MuiThemeProvider theme={theme} {...props} />
)

export default theme
