import { P as PropTypes, h as useTheme, f as _objectWithoutPropertiesLoose, d as _extends } from './useThemeProps-a5059ad6.js';
import * as React from 'react';
import { b as styled, d as defaultStyleFunctionSx, c as clsx } from './styled-ae0cc523.js';
import { jsx } from 'react/jsx-runtime';
import { e as extendSxProp } from './extendSxProp-e384a26a.js';

const _excluded = ["className", "component"];
function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName,
    styleFunctionSx = defaultStyleFunctionSx
  } = options;
  const BoxRoot = styled('div')(styleFunctionSx);
  const Box = /*#__PURE__*/React.forwardRef(function Box(inProps, ref) {
    const theme = useTheme(defaultTheme);

    const _extendSxProp = extendSxProp(inProps),
          {
      className,
      component = 'div'
    } = _extendSxProp,
          other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded);

    return /*#__PURE__*/jsx(BoxRoot, _extends({
      as: component,
      ref: ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: theme
    }, other));
  });
  process.env.NODE_ENV !== "production" ? Box.propTypes
  /* remove-proptypes */
  = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------

    /**
     * @ignore
     */
    children: PropTypes.node,

    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,

    /**
     * @ignore
     */
    sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func])
  } : void 0;
  return Box;
}

export { createBox as c };
//# sourceMappingURL=createBox-442aae1d.js.map
