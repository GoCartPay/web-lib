declare const styles: {
    "&.MuiButton-root": {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        textTransform: string;
        px: number;
        py: number;
        color: string;
        borderRadius: number;
        lineHeight: string;
        height: string;
    };
    "&.MuiButton-text": {
        '&:hover': {
            backgroundColor: string;
        };
        '&:focus': {
            border: number;
            borderColor: string;
            backgroundColor: string;
            boxShadow: string;
        };
    };
    "&.MuiButton-outlined": {
        border: string;
        borderColor: string;
        backgroundColor: string;
        '&:hover': {
            backgroundColor: string;
            borderColor: string;
        };
        '&:focus': {
            border: number;
            borderColor: string;
            boxShadow: string;
            backgroundColor: string;
        };
    };
};
export default styles;
