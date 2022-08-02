/** @file Types used in theming */

/** A single unit in the design token, ie: the value of `color.primary.main` */
export interface TokenUnit<Value = string> {
  description?: string // eg: "Reflects the text.primary variable from the theme object",
  type: 'color' | 'custom-fontStyle' | string
  value: Value // string | Record<string, string | number> // eg: "#000000de" or {"fontSize": 12},
}

export type ColorUnit = TokenUnit<string>

export type TypographyUnit = TokenUnit<{
  fontSize?: UnitDefinition // eg: 96,
  textDecoration?: UnitDefinition // eg: 'none'
  fontFamily?: UnitDefinition // eg: 'TWK Lausanne'
  fontWeight?: UnitDefinition // eg: 400
  fontStyle?: UnitDefinition // eg: 'normal'
  fontStretch?: UnitDefinition // eg: 'normal'
  letterSpacing?: UnitDefinition // eg: -2
  lineHeight?: UnitDefinition // eg: 108
  paragraphIndent?: UnitDefinition // eg: 0
  paragraphSpacing?: UnitDefinition // eg: 0
  textCase?: UnitDefinition // eg: 'none'
}>

export type UnitDefinition = {
  type: string,
  value: any
}

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
      body: TypographyUnit
      subtitle: TypographyUnit
      overline: TypographyUnit
      caption: TypographyUnit
      legal: TypographyUnit
      legal_url: TypographyUnit
    }
  }
}
