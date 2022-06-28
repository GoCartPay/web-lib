import { _ as __rest, a as __assign } from '../../useThemeProps-ebbcf03e.js';
import React__default from 'react';
import { MuiButton } from '../MuiButton/index.js';
import { t as theme } from '../../index-9c0c5949.js';
import 'react-is';
import '../../Button-d7293d18.js';
import '../../styled-e7ad2f0c.js';
import 'react/jsx-runtime';
import '../../ButtonBase-4df34325.js';
import '../../useIsFocusVisible-6dbd9294.js';
import '../../chainPropTypes-6eba90ab.js';

var styles = {
    "&.MuiButton-root": {
        fontFamily: 'TWK Lausanne!important',
        // font weight 600 was not present in theme
        fontWeight: 600,
        // translates to 14px on a scale 1:8
        fontSize: theme.spacing(1.75),
        textTransform: 'none',
        px: 2,
        py: 1.5,
        color: theme.palette.text.primary,
        borderRadius: '8px',
        //translate to 19px on a scale 1:8
        lineHeight: theme.spacing(2.375),
        height: theme.spacing(5.5),
        border: 0.5,
        borderStyle: 'solid',
    },
    "&.MuiButton-text": {
        borderColor: 'transparent',
        '&:hover': {
            backgroundColor: '#DCDEE533',
        },
        '&:focus': {
            borderColor: '#117B7433',
            backgroundColor: '#F1F2F5',
            boxShadow: "0px 0px ".concat(theme.spacing(0.5), "px 0px #CFE5E31")
        },
    },
    "&.MuiButton-outlined": {
        // translates to 1px on a scale 1:8
        border: theme.spacing(0.125),
        borderStyle: 'solid',
        borderColor: '#DCDEE5',
        backgroundColor: '#F1F2F5',
        '&:hover': {
            backgroundColor: '#DCDEE5',
            borderColor: '#1213171A'
        },
        '&:focus': {
            border: 0.5,
            borderColor: '#117B7433',
            boxShadow: "0px 0px ".concat(theme.spacing(0.5), "px 0px #CFE5E3"),
            backgroundColor: '#F1F2F5'
        },
    },
};

var SmallButton = function (_a) {
    var labelText = _a.labelText, variant = _a.variant, onClick = _a.onClick, muiProps = __rest(_a, ["labelText", "variant", "onClick"]);
    return (React__default.createElement(MuiButton, __assign({ labelText: labelText, onClick: onClick, variant: variant, sx: styles, centerRipple: true }, muiProps)));
};

export { SmallButton as default };
//# sourceMappingURL=index.js.map
