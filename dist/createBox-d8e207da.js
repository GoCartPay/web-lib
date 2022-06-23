import { f as _objectWithoutPropertiesLoose, d as _extends, i as isPlainObject, P as PropTypes, h as useTheme } from './useThemeProps-560a50aa.js';
import * as React from 'react';
import { p as propToStyleFunction, b as styled, d as defaultStyleFunctionSx, c as clsx } from './styled-8e5efa1c.js';
import { jsx } from 'react/jsx-runtime';

const _excluded$1 = ["sx"];

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$1);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;

  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);

      if (!isPlainObject(result)) {
        return systemProps;
      }

      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }

  return _extends({}, otherProps, {
    sx: finalSx
  });
}

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

export { createBox as c, extendSxProp as e };
//# sourceMappingURL=createBox-d8e207da.js.map
