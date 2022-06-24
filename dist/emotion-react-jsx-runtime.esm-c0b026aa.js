import 'react';
import { R as hasOwnProperty, S as Emotion, U as createEmotionProps } from './useThemeProps-560a50aa.js';
import { jsx as jsx$1, jsxs as jsxs$1 } from 'react/jsx-runtime';

function jsx(type, props, key) {
  if (!hasOwnProperty.call(props, 'css')) {
    return jsx$1(type, props, key);
  }

  return jsx$1(Emotion, createEmotionProps(type, props), key);
}
function jsxs(type, props, key) {
  if (!hasOwnProperty.call(props, 'css')) {
    return jsxs$1(type, props, key);
  }

  return jsxs$1(Emotion, createEmotionProps(type, props), key);
}

export { jsx as a, jsxs as j };
//# sourceMappingURL=emotion-react-jsx-runtime.esm-c0b026aa.js.map
