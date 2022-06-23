import { Theme } from '@mui/material';
declare type BorderState = {
    hasError: boolean;
    isComplete: boolean;
    isActive: boolean;
};
declare type StylesProps = BorderState & {
    theme: Theme;
};
declare const styles: ({ isActive, hasError, isComplete, theme, }: StylesProps) => import("@emotion/utils").SerializedStyles;
export default styles;
