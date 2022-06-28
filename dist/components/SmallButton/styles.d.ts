declare const styles: {
    "&.MuiButton-root": {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        textTransform: string;
        px: number;
        py: number;
        color: string;
        borderRadius: string;
        lineHeight: string;
        height: string;
        border: number;
        borderStyle: string;
    };
    "&.MuiButton-text": {
        borderColor: string;
        '&:hover': {
            backgroundColor: string;
        };
        '&:focus': {
            borderColor: string;
            backgroundColor: string;
            boxShadow: string;
        };
    };
    "&.MuiButton-outlined": {
        border: string;
        borderStyle: string;
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
