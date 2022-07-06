import { g as generateUtilityClass, d as _extends, u as useThemeProps, f as _objectWithoutPropertiesLoose, P as PropTypes, _ as __rest, a as __assign } from '../../useThemeProps-a5059ad6.js';
import * as React from 'react';
import React__default from 'react';
import { u as useFormControl, f as formControlState, R as RadioGroupContext, a as RadioButton } from '../../index-d18bdd4c.js';
import { jsx } from 'react/jsx-runtime';
import { u as useControlled } from '../../createSvgIcon-9ce1eddd.js';
import { u as useForkRef } from '../../useIsFocusVisible-ca8204d2.js';
import { u as useId } from '../../useId-0a799c62.js';
import { g as generateUtilityClasses, s as styled, a as composeClasses, c as clsx } from '../../styled-ae0cc523.js';
import { B as Box } from '../../Box-3753702e.js';
import 'react-is';
import '../../Typography-37e6cb56.js';
import '../../extendSxProp-e384a26a.js';
import '../../ButtonBase-b9ca4b82.js';
import '../../chainPropTypes-6eba90ab.js';
import '../../createBox-442aae1d.js';

function getFormGroupUtilityClass(slot) {
  return generateUtilityClass('MuiFormGroup', slot);
}
generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);

const _excluded$1 = ["className", "row"];

const useUtilityClasses = ownerState => {
  const {
    classes,
    row,
    error
  } = ownerState;
  const slots = {
    root: ['root', row && 'row', error && 'error']
  };
  return composeClasses(slots, getFormGroupUtilityClass, classes);
};

const FormGroupRoot = styled('div', {
  name: 'MuiFormGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.row && styles.row];
  }
})(({
  ownerState
}) => _extends({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap'
}, ownerState.row && {
  flexDirection: 'row'
}));
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

const FormGroup = /*#__PURE__*/React.forwardRef(function FormGroup(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiFormGroup'
  });

  const {
    className,
    row = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$1);

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['error']
  });

  const ownerState = _extends({}, props, {
    row,
    error: fcs.error
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsx(FormGroupRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? FormGroup.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
var FormGroup$1 = FormGroup;

const _excluded = ["actions", "children", "defaultValue", "name", "onChange", "value"];
const RadioGroup$1 = /*#__PURE__*/React.forwardRef(function RadioGroup(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    children,
    defaultValue,
    name: nameProp,
    onChange,
    value: valueProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const rootRef = React.useRef(null);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'RadioGroup'
  });
  React.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector('input:not(:disabled):checked');

      if (!input) {
        input = rootRef.current.querySelector('input:not(:disabled)');
      }

      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = useForkRef(ref, rootRef);

  const handleChange = event => {
    setValueState(event.target.value);

    if (onChange) {
      onChange(event, event.target.value);
    }
  };

  const name = useId(nameProp);
  return /*#__PURE__*/jsx(RadioGroupContext.Provider, {
    value: {
      name,
      onChange: handleChange,
      value
    },
    children: /*#__PURE__*/jsx(FormGroup$1, _extends({
      role: "radiogroup",
      ref: handleRef
    }, other, {
      children: children
    }))
  });
});
process.env.NODE_ENV !== "production" ? RadioGroup$1.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,

  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: PropTypes.string,

  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {string} value The value of the selected radio button.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,

  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: PropTypes.any
} : void 0;
var MuiRadioGroup = RadioGroup$1;

var RadioGroup = function (_a) {
    var radioOptions = _a.radioOptions, value = _a.value, props = __rest(_a, ["radioOptions", "value"]);
    return (React__default.createElement(MuiRadioGroup, __assign({ value: value }, props), radioOptions.map(function (radio) {
        return React__default.createElement(Box, { key: radio.value, my: 0.5 },
            React__default.createElement(RadioButton, { label: radio.label, value: radio.value, checked: radio.value === value }));
    })));
};

export { RadioGroup as default };
//# sourceMappingURL=index.js.map
