/**
 * @file Process the design token's color settings into something ready to
 * use with MUI's `createTheme`
 **/

import design from '../design-tokens.tokens.json'
import { DesignToken, TokenUnit } from '../types'
import { Palette } from '@mui/material'

// Type imported JSON
const token: DesignToken = design

/** Pull value out of token object */
const mapColor = (color: { [token: string]: TokenUnit }) =>
  Object.entries(color).reduce(
    (acc, cur) => ({ ...acc, [cur[0]]: cur[1].value }),
    {}
  )

/** Palette, ready to be added to theme or used on it's own */
export const palette: Partial<Palette> = Object.keys(token.color).reduce(
  (acc: Partial<Palette>, cur: keyof DesignToken['color']) => ({
    ...acc,
    [cur]: mapColor(token.color[cur])
  }),
  {}
)
