import * as React from 'react';
import { h as useTheme$1, D as defaultTheme } from './useThemeProps-560a50aa.js';

function useTheme() {
  const theme = useTheme$1(defaultTheme);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}

export { useTheme as u };
//# sourceMappingURL=useTheme-fbe8df83.js.map
