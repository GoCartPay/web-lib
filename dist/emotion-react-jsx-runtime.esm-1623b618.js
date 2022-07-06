import 'react';
import { X as hasOwnProperty, Y as Emotion, Z as createEmotionProps } from './useThemeProps-a5059ad6.js';
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
//# sourceMappingURL=emotion-react-jsx-runtime.esm-1623b618.js.map
