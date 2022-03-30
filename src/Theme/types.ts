/** A single unit in the design token, ie: the value of `color.primary.main` */
export type TokenUnit = {
  description?: string // eg: "Reflects the text.primary variable from the theme object",
  type: 'color' | 'custom-fontStyle' | string
  value: string | Record<string, string | number> // eg: "#000000de" or {"fontSize": 12},
  extensions: {
    'org.lukasoppermann.figmaDesignTokens': {
      styleId: string // eg: "S:3954b6510df8a66fae1298393ec2109cd4f52516,",
      exportKey: 'color' | 'font' | string
    }
  }
}

/** Our base-level design token */
export interface DesignToken {
  color: {
    text: {
      primary: TokenUnit
      secondary: TokenUnit
      disabled: TokenUnit
    }
    primary: {
      main: TokenUnit
      dark: TokenUnit
      light: TokenUnit
      contrast_text: TokenUnit
    }
    secondary: {
      main: TokenUnit
      dark: TokenUnit
      light: TokenUnit
      contrast: TokenUnit
    }
    error: {
      main: TokenUnit
      dark: TokenUnit
      light: TokenUnit
      contrast: TokenUnit
    }
    warning: {
      main: TokenUnit
      dark: TokenUnit
      light: TokenUnit
      contrast: TokenUnit
    }
    info: {
      main: TokenUnit
      dark: TokenUnit
      light: TokenUnit
      contrast: TokenUnit
    }
    success: {
      main: TokenUnit
      dark: TokenUnit
      light: TokenUnit
      contrast: TokenUnit
    }
  }
  font: {
    typography: {
      title: TokenUnit
      h1: TokenUnit
      h2: TokenUnit
      h3: TokenUnit
      h4: TokenUnit
      h5: TokenUnit
      h6: TokenUnit
      'body 1': TokenUnit
      'body 2': TokenUnit
      'subtitle 1': TokenUnit
      'subtitle 2': TokenUnit
      overline: TokenUnit
      caption: TokenUnit
      legal: TokenUnit
      legal_url: TokenUnit
    }
  }
}
