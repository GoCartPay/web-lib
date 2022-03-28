/** A single unit in the design token, ie: the value of `color.primary.main` */
export type TokenUnit = {
  description: string // eg: "Reflects the text.primary variable from the theme object",
  type: 'color' | string
  value: string // eg: "#000000de",
  extensions: {
    'org.lukasoppermann.figmaDesignTokens': {
      styleId: string // eg: "S:3954b6510df8a66fae1298393ec2109cd4f52516,",
      exportKey: 'color' | string
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
}
