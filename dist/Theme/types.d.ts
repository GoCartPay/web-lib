/** @file Types used in theming */
/** A single unit in the design token, ie: the value of `color.primary.main` */
export interface TokenUnit<Value = string> {
    description?: string;
    type: 'color' | 'custom-fontStyle' | string;
    value: Value;
    extensions: {
        'org.lukasoppermann.figmaDesignTokens': {
            styleId: string;
            exportKey: 'color' | 'font' | string;
        };
    };
}
export declare type ColorUnit = TokenUnit<string>;
export declare type TypographyUnit = TokenUnit<{
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight?: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
}>;
export declare type ElevationUnitValue = {
    shadowType: string;
    radius: number;
    color: string;
    offsetX: number;
    offsetY: number;
    spread: number;
};
/** An elevation unit with one light source */
export declare type SingleElevationUnit = TokenUnit<ElevationUnitValue>;
/** An elevation unit with two light sources */
export declare type DoubleElevationUnit = {
    '0': {
        type: string;
        value: ElevationUnitValue;
    };
    '1': {
        type: string;
        value: ElevationUnitValue;
    };
    description: TokenUnit['description'];
    extensions: TokenUnit['extensions'];
};
export declare type ElevationUnit = SingleElevationUnit | DoubleElevationUnit;
/**
 * Our base-level design token. Note that the actual design token
 * has far more data; this is the only data we use
 **/
export interface DesignToken {
    color: {
        text: {
            primary: ColorUnit;
            secondary: ColorUnit;
            disabled: ColorUnit;
        };
        primary: {
            main: ColorUnit;
            dark: ColorUnit;
            light: ColorUnit;
            contrast_text: ColorUnit;
        };
        secondary: {
            main: ColorUnit;
            dark: ColorUnit;
            light: ColorUnit;
            contrast: ColorUnit;
        };
        error: {
            main: ColorUnit;
            dark: ColorUnit;
            light: ColorUnit;
            contrast: ColorUnit;
        };
        warning: {
            main: ColorUnit;
            dark: ColorUnit;
            light: ColorUnit;
            contrast: ColorUnit;
        };
        info: {
            main: ColorUnit;
            dark: ColorUnit;
            light: ColorUnit;
            contrast: ColorUnit;
        };
        success: {
            main: ColorUnit;
            dark: ColorUnit;
            light: ColorUnit;
            contrast: ColorUnit;
        };
    };
    font: {
        typography: {
            title: TypographyUnit;
            h1: TypographyUnit;
            h2: TypographyUnit;
            h3: TypographyUnit;
            h4: TypographyUnit;
            h5: TypographyUnit;
            h6: TypographyUnit;
            'body 1': TypographyUnit;
            'body 2': TypographyUnit;
            'subtitle 1': TypographyUnit;
            'subtitle 2': TypographyUnit;
            overline: TypographyUnit;
            caption: TypographyUnit;
            legal: TypographyUnit;
            legal_url: TypographyUnit;
        };
    };
    effect: {
        elevation: {
            1: ElevationUnit;
            2: ElevationUnit;
            3: ElevationUnit;
            4: ElevationUnit;
            5: ElevationUnit;
            6: ElevationUnit;
            7: ElevationUnit;
        };
    };
}
