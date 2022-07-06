import { _ as __rest, a as __assign } from '../../useThemeProps-a5059ad6.js';
import * as React from 'react';
import { B as Box } from '../../Box-3753702e.js';
import { B as Button } from '../../Button-92201bd0.js';
import 'react-is';
import '../../createBox-442aae1d.js';
import '../../styled-ae0cc523.js';
import 'react/jsx-runtime';
import '../../extendSxProp-e384a26a.js';
import '../../ButtonBase-b9ca4b82.js';
import '../../useIsFocusVisible-ca8204d2.js';
import '../../chainPropTypes-6eba90ab.js';

var BigButton = function (_a) {
    var labelText = _a.labelText, color = _a.color, variant = _a.variant, children = _a.children, muiProps = __rest(_a, ["labelText", "color", "variant", "children"]);
    return (React.createElement(Box, { sx: {
            '& button': __assign(__assign(__assign(__assign({ m: 1, width: '100%', height: 64, textTransform: 'capitalize', py: 2, px: 3, margin: 0, fontWeight: 600, letterSpacing: '-0.25px', position: 'relative', borderRadius: '8px' }, (muiProps.endIcon && {
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
        React.createElement(Button, __assign({ color: color, variant: variant, focusRipple: false }, muiProps), children || labelText)));
};

export { BigButton };
//# sourceMappingURL=index.js.map
