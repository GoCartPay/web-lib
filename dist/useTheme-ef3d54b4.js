import * as React from 'react';
import { h as useTheme$1, B as defaultTheme } from './useThemeProps-a5059ad6.js';

function useTheme() {
  const theme = useTheme$1(defaultTheme);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}

export { useTheme as u };
//# sourceMappingURL=useTheme-ef3d54b4.js.map
