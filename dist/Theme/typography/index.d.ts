/// <reference types="react" />
declare module '@mui/material/styles' {
    interface TypographyVariants {
        legal: React.CSSProperties;
        legal_url: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        legal?: React.CSSProperties;
        legal_url?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        legal: true;
        legal_url: true;
    }
}
/** Typography, ready to be added to theme or used on it's own */
export declare const typography: {
    fontFamily: string;
};
