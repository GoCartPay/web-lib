import { _ as __rest, a as __assign } from '../../useThemeProps-ebbcf03e.js';
import * as React from 'react';
import { B as Box } from '../../Box-96690a88.js';
import { B as Button } from '../../Button-d7293d18.js';
import 'react-is';
import '../../createBox-4356b238.js';
import '../../styled-e7ad2f0c.js';
import 'react/jsx-runtime';
import '../../ButtonBase-4df34325.js';
import '../../useIsFocusVisible-6dbd9294.js';
import '../../chainPropTypes-6eba90ab.js';

var MuiButton = function (_a) {
    var labelText = _a.labelText, color = _a.color, variant = _a.variant, muiProps = __rest(_a, ["labelText", "color", "variant"]);
    return (React.createElement(Box, { sx: {
            '& button': __assign(__assign(__assign(__assign({ m: 1, width: '100%', maxWidth: '310px', height: 64, textTransform: 'capitalize', py: 2, px: 3, fontWeight: 600, letterSpacing: '-0.25px', position: 'relative', borderRadius: 2 }, (muiProps.endIcon && {
                justifyContent: 'space-between'
            })), (variant !== 'contained' && {
                backgroundColor: 'white',
            })), (variant === 'contained' && {
                ':hover': {
                    backgroundColor: 'rgba(18,19,23, 0.8)'
                }
            })), { ':focus-visible': {
                    border: '4px solid rgba(17, 123, 116, 0.2)',
                    boxShadow: '0px 1px 2px rgba(18, 19, 23, 0.05), 0px 0px 4px #CFE5E3',
                    backgroundClip: 'padding-box'
                } })
        } },
        React.createElement(Button, __assign({ color: color, variant: variant, focusRipple: false }, muiProps), labelText)));
};

export { MuiButton };
//# sourceMappingURL=index.js.map
