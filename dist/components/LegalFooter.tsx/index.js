import { g as generateUtilityClass, b as capitalize, d as _extends, u as useThemeProps, f as _objectWithoutPropertiesLoose, P as PropTypes, O as getPath, e as alpha, L as css, Q as __makeTemplateObject, a as __assign } from '../../useThemeProps-560a50aa.js';
import { j as jsxs, a as jsx$1 } from '../../emotion-react-jsx-runtime.esm-c0b026aa.js';
import { theme } from '../../Theme/index.js';
import * as React from 'react';
import { g as generateUtilityClasses, s as styled, a as composeClasses, c as clsx } from '../../styled-8e5efa1c.js';
import { jsx } from 'react/jsx-runtime';
import { e as extendSxProp } from '../../createBox-d8e207da.js';
import { B as Box } from '../../Box-d4911273.js';
import { a as useIsFocusVisible, u as useForkRef, e as elementTypeAcceptingRef } from '../../useIsFocusVisible-d2695867.js';
import 'react-is';
import '../../nested-87eb748d.js';
import '../../chainPropTypes-6eba90ab.js';

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const _excluded$1 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];

const useUtilityClasses$1 = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};

const TypographyRoot = styled('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations$1 = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors$1 = color => {
  return colorTransformations$1[color] || color;
};

const Typography = /*#__PURE__*/React.forwardRef(function Typography(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors$1(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$1);

  const ownerState = _extends({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsx(TypographyRoot, _extends({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: clsx(classes.root, className)
  }, other));
});
process.env.NODE_ENV !== "production" ? Typography.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),

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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: PropTypes.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: PropTypes.bool,

  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),

  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: PropTypes
  /* @typescript-to-proptypes-ignore */
  .oneOfType([PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), PropTypes.string]),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: PropTypes
  /* @typescript-to-proptypes-ignore */
  .object
} : void 0;
var Typography$1 = Typography;

function getLinkUtilityClass(slot) {
  return generateUtilityClass('MuiLink', slot);
}
const linkClasses = generateUtilityClasses('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
var linkClasses$1 = linkClasses;

const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant"];
const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const useUtilityClasses = ownerState => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ['root', `underline${capitalize(underline)}`, component === 'button' && 'button', focusVisible && 'focusVisible']
  };
  return composeClasses(slots, getLinkUtilityClass, classes);
};

const LinkRoot = styled(Typography$1, {
  name: 'MuiLink',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${capitalize(ownerState.underline)}`], ownerState.component === 'button' && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  const color = getPath(theme, `palette.${transformDeprecatedColors(ownerState.color)}`) || ownerState.color;
  return _extends({}, ownerState.underline === 'none' && {
    textDecoration: 'none'
  }, ownerState.underline === 'hover' && {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }, ownerState.underline === 'always' && {
    textDecoration: 'underline',
    textDecorationColor: color !== 'inherit' ? alpha(color, 0.4) : undefined,
    '&:hover': {
      textDecorationColor: 'inherit'
    }
  }, ownerState.component === 'button' && {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    [`&.${linkClasses$1.focusVisible}`]: {
      outline: 'auto'
    }
  });
});
const Link = /*#__PURE__*/React.forwardRef(function Link(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiLink'
  });

  const {
    className,
    color = 'primary',
    component = 'a',
    onBlur,
    onFocus,
    TypographyClasses,
    underline = 'always',
    variant = 'inherit'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handlerRef = useForkRef(ref, focusVisibleRef);

  const handleBlur = event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = event => {
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const ownerState = _extends({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsx(LinkRoot, _extends({
    className: clsx(classes.root, className),
    classes: TypographyClasses,
    color: color,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState: ownerState,
    variant: variant
  }, other));
});
process.env.NODE_ENV !== "production" ? Link.propTypes
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
   * The color of the link.
   * @default 'primary'
   */
  color: PropTypes
  /* @typescript-to-proptypes-ignore */
  .any,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),

  /**
   * `classes` prop applied to the [`Typography`](/api/typography/) element.
   */
  TypographyClasses: PropTypes.object,

  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: PropTypes.oneOf(['always', 'hover', 'none']),

  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: PropTypes
  /* @typescript-to-proptypes-ignore */
  .oneOfType([PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), PropTypes.string])
} : void 0;
var Link$1 = Link;

var containerStyles = {
    pt: 1,
    borderTop: 1,
    borderColor: '#DCDEE5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
// theme.spacing(1.25) -> 10px on scale of 1:8
// theme.spacing(1.75) -> 14px on scale of 1:8
// theme.typography.fontWeightBold} -> 700, might want to ask design to update token to 800
var legalFooterStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: TWK Lausanne!important;\n  font-size: ", "!important;\n  color: rgba(53, 57, 70, 0.6);\n  font-weight: ", ";\n  line-height: ", "!important;\n  .MuiLink-underlineAlways {\n    color: ", ";\n    font-weight: 800;\n    text-decoration-color: ", ";\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  font-family: TWK Lausanne!important;\n  font-size: ", "!important;\n  color: rgba(53, 57, 70, 0.6);\n  font-weight: ", ";\n  line-height: ", "!important;\n  .MuiLink-underlineAlways {\n    color: ", ";\n    font-weight: 800;\n    text-decoration-color: ", ";\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])), theme.spacing(1.25), theme.typography.fontWeightRegular, theme.spacing(1.75), theme.palette.text.primary, theme.palette.text.primary);
var legalFooterStyles$1 = {
    legalFooterStyles: legalFooterStyles,
    containerStyles: containerStyles
};
var templateObject_1;

var termsLink = 'https://www.gocartpay.com/termsofuse';
var privacyLink = 'https://www.gocartpay.com/privacy/privacypolicy';
var PoweredBy = jsxs("svg", __assign({ width: "100", height: "11", viewBox: "0 0 1163 129", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx$1("path", { d: "M909.772 51.902C909.772 18.4629 932.798 1.00035 959.167 1.00035C983.679 1.00035 1001.88 15.119 1004.48 36.6686H982.565C981.079 26.2654 971.423 19.206 959.167 19.206C943.197 19.206 930.941 30.3524 930.941 51.5304C930.941 72.7085 943.197 83.8548 959.167 83.8548C971.795 83.8548 981.451 76.7955 983.308 66.7638H1004.48C1002.62 87.9418 984.422 102.432 959.539 102.432C932.427 102.432 909.772 85.341 909.772 51.902Z", fill: "#4F5569" }), jsx$1("path", { d: "M1075.78 80.8825C1075.78 91.2857 1076.16 97.602 1077.27 100.574H1056.47C1055.73 98.7166 1055.36 95.7442 1055.36 92.0288V90.9142C1051.64 98.7166 1044.59 102.432 1033.45 102.432C1026.02 102.432 1019.7 100.574 1014.88 96.4873C1010.05 92.4003 1007.45 87.1987 1007.45 80.5109C1007.45 78.6532 1007.82 76.7955 1008.19 74.9377C1008.56 73.08 1009.31 71.5938 1010.05 70.4792C1010.79 68.993 1011.91 67.8784 1013.02 66.7638C1014.5 65.2776 1015.62 64.5345 1016.36 63.7914C1017.1 63.4198 1018.59 62.3052 1020.45 61.5621C1022.3 60.819 1023.05 60.819 1024.53 60.0759C1025.65 59.7044 1027.13 59.3329 1028.99 58.9613C1031.22 58.5898 1032.33 58.2182 1033.07 58.2182C1033.82 58.2182 1034.93 57.8467 1037.16 57.4751C1039.02 57.1036 1040.13 57.1036 1040.5 57.1036C1041.62 56.732 1042.73 56.732 1044.22 56.732C1045.7 56.732 1046.82 56.3605 1047.56 56.3605C1048.3 56.3605 1049.04 55.989 1050.16 55.989C1051.27 55.6174 1052.02 55.6174 1052.39 55.2459C1052.76 54.8743 1053.5 54.5028 1053.87 54.1312C1054.24 53.7597 1054.62 53.0166 1054.99 52.6451C1055.36 51.902 1055.36 51.1589 1055.36 50.4158C1055.36 47.4434 1054.24 45.2142 1052.39 43.3564C1050.53 41.8703 1047.93 40.7556 1044.59 40.7556C1041.25 40.7556 1038.65 41.4987 1036.42 43.3564C1034.19 45.2142 1033.07 47.4434 1033.07 50.4158H1012.65C1013.39 42.9849 1016.36 37.0402 1021.93 32.2101C1026.76 27.7516 1034.19 25.1507 1043.84 25.1507C1054.24 25.1507 1062.04 27.7516 1067.61 33.3247C1073.19 38.5264 1075.78 46.7003 1075.78 57.8467V80.8825ZM1040.13 87.9418C1044.59 87.9418 1048.3 86.0841 1051.27 82.3686C1054.24 78.6532 1055.73 73.8231 1055.73 67.5068V63.4198C1053.87 66.7637 1049.42 69.3646 1041.99 70.8507C1033.82 72.7085 1029.36 75.6808 1029.36 80.1394C1029.36 82.3686 1030.1 84.2264 1031.96 85.7125C1033.45 87.1987 1036.42 87.9418 1040.13 87.9418Z", fill: "#4F5569" }), jsx$1("path", { d: "M1162.32 41.8703C1157.12 41.8703 1151.92 41.8703 1146.72 41.8703V67.5068C1146.72 73.08 1147.46 77.167 1148.58 79.7678C1148.95 80.8825 1149.69 81.6255 1150.43 82.3686C1151.55 83.1117 1152.66 83.4833 1155.26 83.8548C1157.12 84.2264 1159.72 84.2264 1162.32 84.2264C1162.32 89.428 1162.32 95.0012 1162.32 100.203C1157.86 100.203 1153.41 100.203 1149.32 100.203C1140.78 100.203 1134.84 97.602 1131.49 92.7719C1128.52 87.9418 1126.67 80.5109 1126.67 70.8507V41.8703H1115.52L1117.38 25.5223H1126.29C1126.29 21.4353 1126.29 17.3483 1126.29 13.2613C1132.61 9.17433 1138.92 5.08734 1145.61 1.00035C1145.98 1.00035 1145.98 1.00035 1146.35 1.00035C1146.35 9.17433 1146.35 17.3483 1146.35 25.5223C1151.55 25.5223 1156.75 25.5223 1161.95 25.1508C1162.69 30.7239 1162.32 36.2971 1162.32 41.8703Z", fill: "#4F5569" }), jsx$1("path", { d: "M825.465 63.7914C825.465 41.4987 841.807 25.1507 864.833 25.1507C887.86 25.1507 904.201 41.4987 904.201 63.7914C904.201 86.0841 887.86 102.432 864.833 102.432C842.178 102.432 825.465 86.0841 825.465 63.7914ZM883.774 63.7914C883.774 51.1589 876.346 42.9849 865.205 42.9849C854.063 42.9849 846.635 51.5304 846.635 63.7914C846.635 76.0524 854.063 84.5979 865.205 84.5979C876.346 84.5979 883.774 76.4239 883.774 63.7914Z", fill: "#4F5569" }), jsx$1("path", { d: "M775.699 66.0207C775.699 60.0759 775.699 54.1312 775.699 47.815C790.554 47.815 805.782 47.815 820.637 47.815C820.637 65.2776 820.637 82.7402 820.637 100.203C813.952 100.203 807.267 100.203 800.582 100.203C800.582 99.0881 800.582 98.3451 800.582 97.2304C802.81 94.6296 805.41 91.6572 807.639 87.5703C811.353 81.6255 813.209 76.0524 814.324 71.9654C813.952 71.5938 813.581 71.2223 813.209 70.8507C812.467 74.1946 808.753 85.7125 797.611 94.2581C788.326 100.946 778.67 102.06 774.213 102.432C771.985 102.432 763.071 102.804 753.415 97.9735C748.216 95.3727 743.759 92.0288 739.674 87.5703C730.389 77.5385 725.932 65.6491 725.932 51.902C725.932 42.6133 727.789 34.4394 731.874 26.6369C735.588 19.206 741.53 12.8898 749.33 8.05969C757.129 3.22961 766.414 1.00035 776.813 1.00035C788.697 1.00035 798.354 3.9727 805.41 9.91742C812.467 15.8621 817.666 24.0361 820.637 34.0678H798.354C794.64 24.4077 787.583 19.5776 776.813 19.5776C767.528 19.5776 760.472 22.5499 755.272 28.4947C750.073 34.4394 747.473 42.2418 747.473 51.902C747.473 61.5621 750.073 69.3646 755.272 75.3093C756.758 77.167 758.615 78.6532 760.472 79.7678C767.528 84.5979 774.956 84.2264 776.813 84.2264C779.784 84.2264 785.355 83.8548 790.926 79.7678C797.611 74.9377 799.468 68.2499 800.211 66.3922C792.04 66.0207 783.869 66.0207 775.699 66.0207Z", fill: "#4F5569" }), jsx$1("path", { d: "M1116.27 42.2418C1106.61 42.2418 1102.15 49.6727 1102.15 61.9337V100.574H1082.47V25.5223H1102.15V37.4117C1105.87 28.4947 1111.07 25.5223 1119.61 25.5223H1128.15V41.8703L1116.27 42.2418Z", fill: "#4F5569" }), jsx$1("path", { d: "M35.4091 0.0400391C45.6748 0.0400391 53.934 2.93428 60.1868 8.72276C66.5328 14.4179 69.7059 21.7001 69.7059 30.5696C69.7059 39.439 66.4862 46.8147 60.0468 52.6965C53.6074 58.5783 45.3948 61.4726 35.4091 61.3792H15.531V100.031H0.412369V0.0400391H35.4091ZM34.0092 48.6352C40.7286 48.7286 45.8148 47.1881 49.2678 44.0138C52.8141 40.8395 54.5873 36.3581 54.5873 30.5696C54.5873 24.7811 52.8141 20.3464 49.2678 17.2654C45.8148 14.1845 40.7286 12.644 34.0092 12.644H15.531V48.6352H34.0092Z", fill: "#4F5569" }), jsx$1("path", { d: "M104.226 101.852C93.4001 101.852 84.5343 98.3041 77.6283 91.2085C70.8156 84.0196 67.4092 74.9168 67.4092 63.9C67.4092 52.8832 70.8156 43.7804 77.6283 36.5915C84.5343 29.4025 93.4001 25.8081 104.226 25.8081C114.958 25.8081 123.731 29.4025 130.543 36.5915C137.449 43.7804 140.902 52.8832 140.902 63.9C140.902 74.9168 137.449 84.0196 130.543 91.2085C123.731 98.3041 114.958 101.852 104.226 101.852ZM104.226 89.9481C110.665 89.9481 115.985 87.474 120.184 82.5258C124.384 77.4842 126.484 71.2756 126.484 63.9C126.484 56.431 124.384 50.2224 120.184 45.2742C115.985 40.2326 110.665 37.7118 104.226 37.7118C97.693 37.7118 92.3269 40.2326 88.1273 45.2742C83.9277 50.2224 81.8279 56.431 81.8279 63.9C81.8279 71.369 83.9277 77.5776 88.1273 82.5258C92.3269 87.474 97.693 89.9481 104.226 89.9481Z", fill: "#4F5569" }), jsx$1("path", { d: "M161.498 100.031L140.78 27.6287H155.758L166.257 69.2217C166.631 70.9022 167.004 72.6294 167.377 74.4033C167.844 76.1772 168.264 78.1378 168.637 80.2851C169.104 82.4325 169.477 84.2063 169.757 85.6068H170.037C170.224 84.8599 170.737 82.5258 171.577 78.6046C172.417 74.59 173.117 71.4157 173.677 69.0816L184.316 27.6287H202.234L212.733 69.0816L216.653 85.7468H216.793C217.166 84.3464 217.726 81.7322 218.473 77.9044C219.312 74.0765 220.012 71.1356 220.572 69.0816L230.931 27.6287H245.77L224.912 100.031H208.253L196.915 57.0379C195.421 51.6228 194.208 46.5813 193.275 41.9131H192.995C192.715 43.1268 192.202 45.4609 191.455 48.9153C190.708 52.2764 190.055 54.9372 189.495 56.8978L178.156 100.031H161.498Z", fill: "#4F5569" }), jsx$1("path", { d: "M315.958 65.1604C315.958 66.2807 315.911 67.121 315.818 67.6812H259.683C260.15 74.6834 262.343 80.1918 266.263 84.2063C270.276 88.1276 275.409 90.0882 281.661 90.0882C291.834 90.0882 298.133 86.2603 300.56 78.6046H314.838C312.785 86.0736 308.819 91.8154 302.939 95.83C297.153 99.8446 290.06 101.852 281.661 101.852C270.929 101.852 262.25 98.3041 255.624 91.2085C248.998 84.113 245.685 74.8701 245.685 63.4799C245.685 52.5565 249.044 43.547 255.764 36.4514C262.576 29.3559 271.162 25.8081 281.521 25.8081C287.587 25.8081 292.86 26.9284 297.34 29.1691C301.913 31.4098 305.506 34.4441 308.119 38.272C310.732 42.0065 312.645 46.1611 313.858 50.7359C315.165 55.2173 315.865 60.0255 315.958 65.1604ZM259.823 56.8978H301.399C300.84 50.7359 298.833 45.9277 295.38 42.4733C292.02 39.0189 287.401 37.2917 281.521 37.2917C275.549 37.2917 270.649 39.0656 266.823 42.6133C262.996 46.1611 260.663 50.9226 259.823 56.8978Z", fill: "#4F5569" }), jsx$1("path", { d: "M359.678 40.9328C352.958 41.1195 347.686 43.4069 343.859 47.795C340.126 52.0896 338.26 58.0648 338.26 65.7206V100.031H323.841V27.6287H338.12L338.26 44.1538H338.4C339.893 38.7388 342.459 34.5375 346.099 31.5499C349.832 28.4689 354.358 26.7884 359.678 26.5083V40.9328Z", fill: "#4F5569" }), jsx$1("path", { d: "M429.298 65.1604C429.298 66.2807 429.252 67.121 429.158 67.6812H373.023C373.49 74.6834 375.683 80.1918 379.603 84.2063C383.616 88.1276 388.749 90.0882 395.001 90.0882C405.174 90.0882 411.473 86.2603 413.9 78.6046H428.178C426.125 86.0736 422.159 91.8154 416.279 95.83C410.493 99.8446 403.401 101.852 395.001 101.852C384.269 101.852 375.59 98.3041 368.964 91.2085C362.338 84.113 359.025 74.8701 359.025 63.4799C359.025 52.5565 362.385 43.547 369.104 36.4514C375.917 29.3559 384.502 25.8081 394.861 25.8081C400.928 25.8081 406.2 26.9284 410.68 29.1691C415.253 31.4098 418.846 34.4441 421.459 38.272C424.072 42.0065 425.985 46.1611 427.198 50.7359C428.505 55.2173 429.205 60.0255 429.298 65.1604ZM373.163 56.8978H414.74C414.18 50.7359 412.173 45.9277 408.72 42.4733C405.36 39.0189 400.741 37.2917 394.861 37.2917C388.889 37.2917 383.989 39.0656 380.163 42.6133C376.337 46.1611 374.003 50.9226 373.163 56.8978Z", fill: "#4F5569" }), jsx$1("path", { d: "M490.516 0.0400391H505.215V100.031H490.516V86.167H490.376C488.976 90.7417 486.223 94.5229 482.117 97.5105C478.011 100.405 472.785 101.852 466.438 101.852C456.546 101.852 448.52 98.2574 442.361 91.0685C436.295 83.8796 433.262 74.7301 433.262 63.6199C433.262 52.5098 436.295 43.4536 442.361 36.4514C448.52 29.3559 456.546 25.8081 466.438 25.8081C472.785 25.8081 478.057 27.3953 482.257 30.5696C486.55 33.7439 489.303 37.5718 490.516 42.0532V0.0400391ZM469.518 89.8081C477.077 89.8081 482.584 87.3807 486.037 82.5258C489.583 77.671 491.356 71.369 491.356 63.6199V62.7796C491.169 55.5907 489.163 49.6622 485.337 44.9941C481.51 40.2326 476.238 37.8519 469.518 37.8519C462.706 37.8519 457.339 40.326 453.42 45.2742C449.593 50.129 447.68 56.2443 447.68 63.6199C447.68 71.0889 449.593 77.3442 453.42 82.3858C457.246 87.334 462.612 89.8081 469.518 89.8081Z", fill: "#4F5569" }), jsx$1("path", { d: "M579.055 25.8081C588.947 25.8081 596.88 29.2625 602.852 36.1713C608.825 43.0802 611.812 52.2297 611.812 63.6199C611.812 75.0101 608.779 84.253 602.712 91.3486C596.74 98.3508 588.854 101.852 579.055 101.852C573.082 101.852 567.902 100.311 563.516 97.2304C559.13 94.1494 556.19 90.4616 554.697 86.167H554.557V100.031H539.858V0.0400391H554.557V41.633C556.05 37.4317 559.037 33.7439 563.516 30.5696C567.996 27.3953 573.175 25.8081 579.055 25.8081ZM575.555 89.8081C582.368 89.8081 587.687 87.4274 591.513 82.6659C595.433 77.811 597.393 71.4624 597.393 63.6199C597.393 55.9642 595.433 49.7556 591.513 44.9941C587.594 40.2326 582.274 37.8519 575.555 37.8519C568.836 37.8519 563.563 40.2326 559.736 44.9941C555.91 49.6622 553.904 55.5907 553.717 62.7796V63.6199C553.717 71.0889 555.63 77.3442 559.456 82.3858C563.283 87.334 568.649 89.8081 575.555 89.8081Z", fill: "#4F5569" }), jsx$1("path", { d: "M611.77 27.6287H627.029C629.548 34.6309 633.188 44.5273 637.948 57.3179C642.8 70.1086 646.3 79.4449 648.447 85.3267H648.587C650.826 78.6046 654.139 68.7082 658.526 55.6374C663.005 42.4733 666.132 33.137 667.905 27.6287H683.163C678.31 40.9795 672.898 55.5441 666.925 71.3223C660.952 87.0072 655.586 101.292 650.826 114.176C647.373 123.419 641.214 128.04 632.348 128.04H621.289V116.276H629.268C632.161 116.276 634.215 115.623 635.428 114.316C636.641 113.009 637.854 110.861 639.067 107.874L641.307 101.852C637.388 91.9554 632.021 78.4645 625.209 61.3792C618.396 44.2939 613.916 33.0437 611.77 27.6287Z", fill: "#4F5569" })] }));
var LegalLink = function (_a) {
    var href = _a.href, children = _a.children;
    return jsx$1(Link$1, __assign({ underline: 'always', target: '_blank', href: href }, { children: children }));
};
/**
 * Legal Footer component
 * @see {@link https://www.figma.com/file/GDkKRn0hdzPqwrILgdvKr1/Enrollment-with-SPRUCE?node-id=1%3A173}
 * @returns {JSX.Element}
 */
var LegalFooter = function () { return (jsxs(Box, __assign({ sx: legalFooterStyles$1.containerStyles }, { children: [jsxs(Typography$1, __assign({ css: legalFooterStyles$1.legalFooterStyles }, { children: ["We never use this information Lorem ipsum legal dolor sit amet according to these", " ", jsx$1(LegalLink, __assign({ href: termsLink }, { children: "Terms of Service " })), "and", jsx$1(LegalLink, __assign({ href: privacyLink }, { children: " Privacy Policy." })), " ", "By entering the code sent to you, you agree to the Terms of Service and Privacy Policy"] })), jsx$1(Box, __assign({ sx: { mt: 1 } }, { children: PoweredBy }))] }))); };

export { LegalFooter as default };
//# sourceMappingURL=index.js.map