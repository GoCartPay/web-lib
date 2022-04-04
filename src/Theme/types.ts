/** @file Types used in theming */

/** A single unit in the design token, ie: the value of `color.primary.main` */
export interface TokenUnit<Value = string> {
  description?: string // eg: "Reflects the text.primary variable from the theme object",
  type: 'color' | 'custom-fontStyle' | string
  value: Value // string | Record<string, string | number> // eg: "#000000de" or {"fontSize": 12},
  extensions: {
    'org.lukasoppermann.figmaDesignTokens': {
      styleId: string // eg: "S:3954b6510df8a66fae1298393ec2109cd4f52516,",
      exportKey: 'color' | 'font' | string
    }
  }
}

type ColorUnit = TokenUnit<string>

type TypographyUnit = TokenUnit<{
  fontSize: number // eg: 96,
  textDecoration: string // eg: 'none'
  fontFamily: string // eg: 'TWK Lausanne'
  fontWeight: number // eg: 400
  fontStyle: string // eg: 'normal'
  fontStretch: string // eg: 'normal'
  letterSpacing: number // eg: -2
  lineHeight: number // eg: 108
  paragraphIndent: number // eg: 0
  paragraphSpacing: number // eg: 0
  textCase: string // eg: 'none'
}>

export type ElevationUnitValue = {
  shadowType: string // eg: "dropShadow",
  radius: number // eg: 64,
  color: string // eg: "#10182824",
  offsetX: number // eg: 0,
  offsetY: number // eg: 32,
  spread: number // eg: -12
}

/** An elevation unit with one light source */
export type SingleElevationUnit = TokenUnit<ElevationUnitValue>

/** An elevation unit with two light sources */
export type DoubleElevationUnit = {
  '0': { type: string; value: ElevationUnitValue }
  '1': { type: string; value: ElevationUnitValue }
  description: TokenUnit['description']
  extensions: TokenUnit['extensions']
}

export type ElevationUnit = SingleElevationUnit | DoubleElevationUnit

/**
 * Our base-level design token. Note that the actual design token
 * has far more data; this is the only data we use
 **/
export interface DesignToken {
  color: {
    text: {
      primary: ColorUnit
      secondary: ColorUnit
      disabled: ColorUnit
    }
    primary: {
      main: ColorUnit
      dark: ColorUnit
      light: ColorUnit
      contrast_text: ColorUnit
    }
    secondary: {
      main: ColorUnit
      dark: ColorUnit
      light: ColorUnit
      contrast: ColorUnit
    }
    error: {
      main: ColorUnit
      dark: ColorUnit
      light: ColorUnit
      contrast: ColorUnit
    }
    warning: {
      main: ColorUnit
      dark: ColorUnit
      light: ColorUnit
      contrast: ColorUnit
    }
    info: {
      main: ColorUnit
      dark: ColorUnit
      light: ColorUnit
      contrast: ColorUnit
    }
    success: {
      main: ColorUnit
      dark: ColorUnit
      light: ColorUnit
      contrast: ColorUnit
    }
  }
  font: {
    typography: {
      title: TypographyUnit
      h1: TypographyUnit
      h2: TypographyUnit
      h3: TypographyUnit
      h4: TypographyUnit
      h5: TypographyUnit
      h6: TypographyUnit
      'body 1': TypographyUnit
      'body 2': TypographyUnit
      'subtitle 1': TypographyUnit
      'subtitle 2': TypographyUnit
      overline: TypographyUnit
      caption: TypographyUnit
      legal: TypographyUnit
      legal_url: TypographyUnit
    }
  }
  effect: {
    elevation: {
      1: ElevationUnit
      2: ElevationUnit
      3: ElevationUnit
      4: ElevationUnit
      5: ElevationUnit
      6: ElevationUnit
      7: ElevationUnit
    }
  }
}
