/**
 * @file Process the design token's `effect.elevation` settings into
 * something ready to use with MUI's `createTheme`
 **/

import design from '../design-tokens.tokens.json'
import { createTheme } from '@mui/material/styles'
import type { Shadows } from '@mui/material/styles/shadows'
import type {
  DesignToken,
  ElevationUnitValue,
  SingleElevationUnit,
  DoubleElevationUnit
} from '../types'

// Type imported JSON
const token: DesignToken = design

const defaultTheme = createTheme({})

const customElevationLevels = ['1', '2', '3', '4', '5', '6', '7']

/** Given an object of CSS rules, convert into box-shadow syntax */
const convertValueToStyle = (v: ElevationUnitValue) =>
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  `${v.offsetX}px ${v.offsetY}px ${v.radius}px ${v.spread}px ${v.color}`

/** Box shadows, ready to be added to theme or used on it's own */
const customShadows = Object.keys(token.effect.elevation)
  .sort()
  .reduce(
    (acc, cur: '1' | '2' | '3' | '4' | '5' | '6' | '7') => {
      if (!customElevationLevels.includes(cur)) {
        return acc
      }

      if (
        Object.prototype.hasOwnProperty.call(
          token.effect.elevation[cur],
          'value'
        )
      ) {
        const valueObj = token.effect.elevation[cur] as SingleElevationUnit
        return [...acc, convertValueToStyle(valueObj.value)]
      } else {
        const valueObj = token.effect.elevation[cur] as DoubleElevationUnit
        return [
          ...acc,
          `${convertValueToStyle(valueObj['0'].value)}, ${convertValueToStyle(
            valueObj['1'].value
          )}`
        ]
      }
    },
    ['none']
  )

export const shadows = customShadows.concat(
  [...defaultTheme.shadows].slice(customShadows.length)
) as Shadows
