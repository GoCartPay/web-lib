import { P as PropTypes, I as useTheme, J as ThemeContext, _ as _extends, u as useTheme$1, T as ThemeContext$1, k as __assign, K as createTheme, L as __spreadArray, d as defaultTheme$1, b as useThemeProps, j as __rest } from '../useThemeProps-18e73732.js';
import * as React from 'react';
import React__default from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { e as exactProp } from '../exactProp-95fae5df.js';
import { G as Global } from '../emotion-react.esm-e3e01b5e.js';
import 'react-is';

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles$1(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/jsx(Global, {
    styles: globalStyles
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles$1.propTypes = {
  defaultTheme: PropTypes.object,
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
} : void 0;

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(['MUI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return _extends({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();

  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  const theme = React.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/jsx(ThemeContext.Provider, {
    value: theme,
    children: children
  });
}

process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = exactProp(ThemeProvider$2.propTypes) : void 0;
}

function InnerThemeProvider(props) {
  const theme = useTheme$1();
  return /*#__PURE__*/jsx(ThemeContext$1.Provider, {
    value: typeof theme === 'object' ? theme : {},
    children: props.children
  });
}

process.env.NODE_ENV !== "production" ? InnerThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node
} : void 0;
/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 */

function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme
  } = props;
  return /*#__PURE__*/jsx(ThemeProvider$2, {
    theme: localTheme,
    children: /*#__PURE__*/jsx(InnerThemeProvider, {
      children: children
    })
  });
}

process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes = exactProp(ThemeProvider$1.propTypes) : void 0;
}

var color = {
	text: {
		primary: {
			description: "Reflects the text.primary variable from the theme object",
			type: "color",
			value: "#121317ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8df74f3c6fcbbbfba3793b840d0eb8eda0545494,",
					exportKey: "color"
				}
			}
		},
		secondary: {
			description: "Reflects the text.secondary variable from the theme object",
			type: "color",
			value: "#717174ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:79cc79ed9005d9249e789a9e99248a9971fc4aa8,",
					exportKey: "color"
				}
			}
		},
		disabled: {
			description: "Reflects the text.disabled variable from the theme object",
			type: "color",
			value: "#a5a5a7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:03e90fde6ab5bb734955eff88a03c8eff85f3395,",
					exportKey: "color"
				}
			}
		}
	},
	primary: {
		main: {
			description: "Reflects the Primary/Main variable from the theme object",
			type: "color",
			value: "#121317ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:25091aca799fd8b751fb691bb1945d12dab08c31,",
					exportKey: "color"
				}
			}
		},
		dark: {
			description: "Used for hover states. Reflects the primary.dark variable from the theme object",
			type: "color",
			value: "#000000ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1c353255805c62ad3c3051095f9b0fd290a0590c,",
					exportKey: "color"
				}
			}
		},
		light: {
			description: "Reflects the primary.light variable from the theme object",
			type: "color",
			value: "#717174ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d9a0cf232e1618002acbc8adcf59aeb51cce5416,",
					exportKey: "color"
				}
			}
		},
		contrast_text: {
			description: "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
			type: "color",
			value: "#ffffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2c9c29dadfab818d4d95578e386ee481d2225ac0,",
					exportKey: "color"
				}
			}
		}
	},
	secondary: {
		main: {
			description: "Reflects the secondary.main variable from the theme object",
			type: "color",
			value: "#117b74ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cd38a4782cd4ea004432a78d3e466dec213a1554,",
					exportKey: "color"
				}
			}
		},
		dark: {
			description: "Used for hover states. Reflects the secondary.dark variable from the theme object",
			type: "color",
			value: "#044d47ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:281f7649111ded07eee8bf3b67c066f373fca40c,",
					exportKey: "color"
				}
			}
		},
		light: {
			description: "Reflects the secondary.light variable from the theme object",
			type: "color",
			value: "#419590ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b42d26469ea747d816928f9965d83f2b866bcda6,",
					exportKey: "color"
				}
			}
		},
		contrast: {
			description: "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
			type: "color",
			value: "#ffffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1978335fe07d82ae0fa1ad4d454f944bf823e879,",
					exportKey: "color"
				}
			}
		}
	},
	action: {
		active: {
			description: "Reflects the action.active variable from the theme object",
			type: "color",
			value: "#757575ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:51e56f9b38ebcfca398f6a2f01b4ebc8b998aa22,",
					exportKey: "color"
				}
			}
		},
		hover: {
			description: "Reflects the action.hover variable from the theme object",
			type: "color",
			value: "#000000ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7a9a1518fac666e6538fce23a95c90767caa0352,",
					exportKey: "color"
				}
			}
		},
		selected: {
			description: "Reflects the action.selected variable from the theme object",
			type: "color",
			value: "#ebebebff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7230b51e1e7d60565d7526b34d5a3b09826afabb,",
					exportKey: "color"
				}
			}
		},
		disabled: {
			description: "Reflects the action.disabled variable from the theme object",
			type: "color",
			value: "#bdbdbdff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9321e05975f652262de6e040085424c22571c19a,",
					exportKey: "color"
				}
			}
		},
		disabledbackground: {
			description: "Reflects the action.disabledBackground variable from the theme object",
			type: "color",
			value: "#e0e0e0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:985888d15aeb586eb252b46c1cfc90d978356233,",
					exportKey: "color"
				}
			}
		},
		focus_12p: {
			description: "Reflects the action.focus variable from the theme object",
			type: "color",
			value: "#419590ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:41ad2459a364efd6d5b73513385515c3a1c4f1d3,",
					exportKey: "color"
				}
			}
		},
		shades: {
			"30p": {
				description: "Used for focus states. The token represents 30% of the Action/Active token",
				type: "color",
				value: "#0000004d",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:84782c7fb47a573f911d288e331b91ce021f8807,",
						exportKey: "color"
					}
				}
			}
		}
	},
	error: {
		main: {
			description: "Reflects the error.main variable from the theme object",
			type: "color",
			value: "#d32f2fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1449079b98660d7c957a06c311c3e7226892c97f,",
					exportKey: "color"
				}
			}
		},
		dark: {
			description: "Used for hover states. Reflects the error.dark variable from the theme object",
			type: "color",
			value: "#c62828ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b72167bc83a38b4b7b061ea5dee5f1b476ccc636,",
					exportKey: "color"
				}
			}
		},
		light: {
			description: "Reflects the error.light variable from the theme object",
			type: "color",
			value: "#ef5350ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:da2249865910ef8eee2e058288070e7764c3b7bb,",
					exportKey: "color"
				}
			}
		},
		contrast: {
			description: "Reflects the error.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
			type: "color",
			value: "#ffffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:549ed00ffef2be0c82dd7097c476d2d3de423321,",
					exportKey: "color"
				}
			}
		}
	},
	warning: {
		main: {
			description: "Reflects the warning.main variable from the theme object",
			type: "color",
			value: "#ed6c02ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:87110ea4f3eb9c1c056185280ed586eb114acb51,",
					exportKey: "color"
				}
			}
		},
		dark: {
			description: "Used for hover states. Reflects the warning.dark variable from the theme object",
			type: "color",
			value: "#e65100ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:fb53319d100b41c1514057381051f7826c27dd7d,",
					exportKey: "color"
				}
			}
		},
		light: {
			description: "Reflects the warning.light variable from the theme object",
			type: "color",
			value: "#ff9800ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ed10be8cf614f41596ed8030634c0578b26e006f,",
					exportKey: "color"
				}
			}
		},
		contrast: {
			description: "Reflects the warning.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
			type: "color",
			value: "#ffffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:79cd31218cba03dc5e95058e491a71e809259e98,",
					exportKey: "color"
				}
			}
		}
	},
	info: {
		main: {
			description: "Reflects the info.main variable from the theme object",
			type: "color",
			value: "#0288d1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ece0a406203dc0a76eb1717a28d9c5075e13c7ea,",
					exportKey: "color"
				}
			}
		},
		dark: {
			description: "Used for hover states. Reflects the info.dark variable from the theme object",
			type: "color",
			value: "#01579bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c438157d5e1fbe64bc81e953c1e4977feaf27fcd,",
					exportKey: "color"
				}
			}
		},
		light: {
			description: "Reflects the info.light variable from the theme object",
			type: "color",
			value: "#03a9f4ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:4b49c6d46a52149c2c9558357cf58b84b9cef981,",
					exportKey: "color"
				}
			}
		},
		contrast: {
			description: "Reflects the info.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
			type: "color",
			value: "#ffffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e9063005fa835e3555f2e9f117f2396077c4de4b,",
					exportKey: "color"
				}
			}
		}
	},
	success: {
		main: {
			description: "Reflects the success.main variable from the theme object",
			type: "color",
			value: "#2e7d32ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:4876f03c471ac248ff222e75f03fc7f193817b1a,",
					exportKey: "color"
				}
			}
		},
		dark: {
			description: "Used for hover states. Reflects the success.dark variable from the theme object",
			type: "color",
			value: "#1b5e20ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0f6aeb5f548615313ffab777c1bad94377e1000c,",
					exportKey: "color"
				}
			}
		},
		contrast: {
			description: "Reflects the success.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
			type: "color",
			value: "#ffffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0feafc04abc6b062b2da19f290b6b73634136e56,",
					exportKey: "color"
				}
			}
		},
		light: {
			description: "Reflects the success.light variable from the theme object",
			type: "color",
			value: "#4caf50ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6ff3177b7e5dd93943555279d410a0ba31c9987b,",
					exportKey: "color"
				}
			}
		}
	},
	background: {
		paper: {
			description: "Reflects the background.paper variable from the theme object",
			type: "color",
			value: "#ffffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:df70b3d5d4a3321fba7eb283876bb5869e23719f,",
					exportKey: "color"
				}
			}
		},
		"default": {
			description: "Reflects the background.default variable from the theme object",
			type: "color",
			value: "#fafafaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ced60fb745da49a6979f8f1a179b2fb81b881fd6,",
					exportKey: "color"
				}
			}
		}
	},
	other: {
		divider: {
			description: "Reflects the divider variable from the theme object",
			type: "color",
			value: "#e7e7e8ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3753c8d231258193e4727a6085cae5eb1e992e97,",
					exportKey: "color"
				}
			}
		},
		"outlined_border-23p": {
			description: "Border style for outlined variant components in resting state (Text Field, Select, Chips, etc)",
			type: "color",
			value: "#c4c4c4ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a28508669185e2b3cfc41b2a4774b8191e6e4b11,",
					exportKey: "color"
				}
			}
		},
		backdrop_overlay: {
			description: "Backdrop overlay background-color",
			type: "color",
			value: "#808080ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:68538088b99898f8fbb8bf96eaf697de54e9878d,",
					exportKey: "color"
				}
			}
		},
		filled_input_background: {
			description: "Token for the background style for the Filled variant components (Text Field, Select, Multiline).",
			type: "color",
			value: "#f0f0f0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:77b5f7f1d8c2529381811dd9151f7312c8b0a20a,",
					exportKey: "color"
				}
			}
		},
		standard_input_line: {
			description: "Token for the underline style for the Standard variant components (Text Field, Select, Multiline).",
			type: "color",
			value: "#949494ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:eb311dd3dd64988d28dc7bac0417b599e673d015,",
					exportKey: "color"
				}
			}
		},
		snackbar: {
			description: "Snackbar background color",
			type: "color",
			value: "#323232ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d1a31013fb454afc7eee25bcd24e16dbadab8d64,",
					exportKey: "color"
				}
			}
		},
		"rating active": {
			description: "Active state color for Rating component",
			type: "color",
			value: "#ffb400ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:93fef4010a46c1e4508114a8cda27e423a8ff1cb,",
					exportKey: "color"
				}
			}
		}
	},
	common: {
		black: {
			"100p": {
				description: "",
				type: "color",
				value: "#000000ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:070cf9c7b5f81320343624edfd1052fef4bb6247,",
						exportKey: "color"
					}
				}
			}
		},
		white: {
			"30p": {
				description: "",
				type: "color",
				value: "#ffffff4d",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:3f2625e1f82e14b27d365f55bb2b2e47c043f8ad,",
						exportKey: "color"
					}
				}
			},
			"100p": {
				description: "",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:c85c2253d9bfb030223e7afab422cb2137caa53c,",
						exportKey: "color"
					}
				}
			}
		}
	}
};
var grid = {
	"extra large": {
		"layout structure false": {
			description: "Max width 1536px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 102,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:be1be7d8e02ec56dd45d09f2788bbdf390bc3706,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 102,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1536px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:53571ec382240fea33eb1f7eadb45dae2f365068,",
					exportKey: "grid"
				}
			}
		},
		"layout structure extended": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 102,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 256,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1536px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7d7a4a36990a8641124ee17d1cd1ad84a1b5dacf,",
					exportKey: "grid"
				}
			}
		}
	},
	large: {
		"layout structure false": {
			description: "Max width 1200px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 74,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:fb6c488aef369ccb6f470f22f0f14cbb2aa4b717,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 74,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1200px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1752cca2001adfa1aeca55d857868c2f40eb1579,",
					exportKey: "grid"
				}
			}
		},
		"layout structure extended": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 74,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 256,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1200px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a2e9e121ce966021e2da49e620cf795d34e61e81,",
					exportKey: "grid"
				}
			}
		}
	},
	medium: {
		"layout structure false": {
			description: "Max width 900px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 49,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2a7c8c037a8b656d9e830cd4c429093dab3d2f32,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 49,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 900px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6e9878181e7312ea4521db7443af45cf3fa814fb,",
					exportKey: "grid"
				}
			}
		}
	},
	small: {
		"layout structure false": {
			description: "Max width 600px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 24,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a202959a76f7e5de310e2f0a7f836a3416d7699f,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 24,
					gutterSize: 42,
					alignment: "center",
					count: 8
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 56,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 600px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ecfb1299d68ae5aa0336061f30217a1b2b145165,",
					exportKey: "grid"
				}
			}
		}
	},
	extra_small: {
		"layout_structure _false": {
			description: "Max width 444px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 72,
				gutterSize: 16,
				alignment: "center",
				count: 4
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:4604eb68e0879c98b8b1ca585c7df38ea78f8e6d,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 72,
					gutterSize: 16,
					alignment: "center",
					count: 4
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 56,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 298,
					gutterSize: 20,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 444px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2267ded982a384f8cacca1a85e54eb4690b61808,",
					exportKey: "grid"
				}
			}
		}
	}
};
var font = {
	typography: {
		title: {
			type: "custom-fontStyle",
			value: {
				fontSize: 96,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -2,
				lineHeight: 108,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:baeac0ba14212fe9cdf631e5b431901236672696,",
					exportKey: "font"
				}
			}
		},
		h1: {
			type: "custom-fontStyle",
			value: {
				fontSize: 64,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -2,
				lineHeight: 73,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:bfb4fa0c097d60cf6f67f009300866603c72362b,",
					exportKey: "font"
				}
			}
		},
		h2: {
			type: "custom-fontStyle",
			value: {
				fontSize: 48,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -2,
				lineHeight: 54,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b61696844f2e7615df9b7b303add971cb0c1c363,",
					exportKey: "font"
				}
			}
		},
		h3: {
			type: "custom-fontStyle",
			value: {
				fontSize: 36,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -1.8,
				lineHeight: 40,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3a3cfadbdee1cd9b910e4d61229627dc344aa67d,",
					exportKey: "font"
				}
			}
		},
		h4: {
			type: "custom-fontStyle",
			value: {
				fontSize: 30,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -1.8,
				lineHeight: 36,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:85049da58cbc7eb8186520253101c08f7c307d05,",
					exportKey: "font"
				}
			}
		},
		h5: {
			type: "custom-fontStyle",
			value: {
				fontSize: 24,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 28,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:466c92f2f7239079255cd702d42b5c4b52747abb,",
					exportKey: "font"
				}
			}
		},
		h6: {
			type: "custom-fontStyle",
			value: {
				fontSize: 20,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 25,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:404255d9e5105320f9d27b81bef2c19346871f37,",
					exportKey: "font"
				}
			}
		},
		"body 1": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 21,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f582bff41b2eaeefa7c3aebab458d96d10c0ad92,",
					exportKey: "font"
				}
			}
		},
		"body 2": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 19,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1a458e9a7c9a134789bd7d0a76861ad3c6534292,",
					exportKey: "font"
				}
			}
		},
		"subtitle 1": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 21,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:298a23114e2937677e6abbd15a3d15d433e13964,",
					exportKey: "font"
				}
			}
		},
		"subtitle 2": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 19,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:361df48f3a999b203ec9716a8926aed0f05154e0,",
					exportKey: "font"
				}
			}
		},
		overline: {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 1.2,
				lineHeight: 16,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:dfa6bdbbe8bbb1c227c9eebe6b4051839d9c3c18,",
					exportKey: "font"
				}
			}
		},
		caption: {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.4,
				lineHeight: 19.92,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3b881c2764d9b83276bf511b5240fe7468c82037,",
					exportKey: "font"
				}
			}
		},
		legal: {
			type: "custom-fontStyle",
			value: {
				fontSize: 9,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 14,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b9fd3f7fc067a4de76569cde9e86b8d1fb45eb4d,",
					exportKey: "font"
				}
			}
		},
		legal_url: {
			type: "custom-fontStyle",
			value: {
				fontSize: 9,
				textDecoration: "underline",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 14,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c64c2c29e4325342f60a37ef9742134cf8d75905,",
					exportKey: "font"
				}
			}
		}
	},
	components: {
		"alert title": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1756c7038a958e7b01e4eaed2cac34c6987f3909,",
					exportKey: "font"
				}
			}
		},
		"avatar initials": {
			type: "custom-fontStyle",
			value: {
				fontSize: 20,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.14,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:12bc63fcf97d3b085056f8215159088e7610fab4,",
					exportKey: "font"
				}
			}
		},
		"badge label": {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.14,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1736f96e19c8cc03230f90b75e5882f4c83e5fd6,",
					exportKey: "font"
				}
			}
		},
		"button large": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.46,
				lineHeight: 19,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7c9c9356953df9897425902f523461d72132177f,",
					exportKey: "font"
				}
			}
		},
		"button small": {
			type: "custom-fontStyle",
			value: {
				fontSize: 13,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.46,
				lineHeight: 22,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6fe34cdb7b83db4bf62ca01132b883ef3bf4d658,",
					exportKey: "font"
				}
			}
		},
		"input label": {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 12,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:873ceef9077e9ee67e8f629d7d783ef8ec4baceb,",
					exportKey: "font"
				}
			}
		},
		"helper text": {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.4,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2408ad977dcf4be564df71bd9910bffe3370cf31,",
					exportKey: "font"
				}
			}
		},
		"input text": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0d1a4017d653e66415c019ba9bac9df14d744d67,",
					exportKey: "font"
				}
			}
		},
		chip: {
			type: "custom-fontStyle",
			value: {
				fontSize: 13,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.16,
				lineHeight: 18,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7489af7a6b7fe1794b39dc6c106c2939f1d0f42b,",
					exportKey: "font"
				}
			}
		},
		tooltip: {
			type: "custom-fontStyle",
			value: {
				fontSize: 10,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 14,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ac3fd3406adb2bdb980ea11dd6b28618def1b7f2,",
					exportKey: "font"
				}
			}
		},
		"table header": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.17,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d102d70e678db2cdd185354835da654482c9154c,",
					exportKey: "font"
				}
			}
		},
		"menu item": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:732d2fef9a3bb2369133b4fc58ba43f98088ee35,",
					exportKey: "font"
				}
			}
		},
		"menu item dense": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.17,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:301d1211379899ca282f78a2b8c9fe90ea1793c8,",
					exportKey: "font"
				}
			}
		},
		"list subheader": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.1,
				lineHeight: 48,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ef2329044b64db11ec280c3134b56fa25f08f7de,",
					exportKey: "font"
				}
			}
		},
		"bottom navigation active label": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.4,
				lineHeight: 23.24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f2d34724c7e0556cdbc4268cfe4c9755b8dd6fb4,",
					exportKey: "font"
				}
			}
		}
	},
	component: {
		otp: {
			type: "custom-fontStyle",
			value: {
				fontSize: 20,
				textDecoration: "none",
				fontFamily: "TWK Lausanne",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 10,
				lineHeight: 25,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:fd6a73883144e501e554cfaa245a9c1f2aa584de,",
					exportKey: "font"
				}
			}
		}
	}
};
var effect = {
	elevation: {
		"1": {
			description: null,
			type: "custom-shadow",
			value: {
				shadowType: "dropShadow",
				radius: 2,
				color: "#1018280d",
				offsetX: 0,
				offsetY: 1,
				spread: 0
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6ec5c94eb2fe6f95338f6179ca005c1b45395443,",
					exportKey: "effect"
				}
			}
		},
		"2": {
			description: null,
			type: "custom-shadow",
			value: {
				shadowType: "dropShadow",
				radius: 3,
				color: "#1018281a",
				offsetX: 0,
				offsetY: 1,
				spread: 0
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:271c7798e1b8d29dbd8f9d21e4b152fd44492b74,",
					exportKey: "effect"
				}
			}
		},
		"3": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 4,
					color: "#1018280f",
					offsetX: 0,
					offsetY: 2,
					spread: -2
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 8,
					color: "#1018281a",
					offsetX: 0,
					offsetY: 4,
					spread: -2
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:38438bcc4d57b8be81f133db0c39acee9e22af43,",
					exportKey: "effect"
				}
			}
		},
		"4": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 6,
					color: "#10182808",
					offsetX: 0,
					offsetY: 4,
					spread: -2
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 16,
					color: "#10182814",
					offsetX: 0,
					offsetY: 12,
					spread: -4
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a23e06e64d0efe5da429ae89c54e369b9514991c,",
					exportKey: "effect"
				}
			}
		},
		"5": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 8,
					color: "#10182808",
					offsetX: 0,
					offsetY: 8,
					spread: -4
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 24,
					color: "#10182814",
					offsetX: 0,
					offsetY: 20,
					spread: -4
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:824761f3913a66a1374e464cf9eb8dcf82186b8d,",
					exportKey: "effect"
				}
			}
		},
		"6": {
			description: null,
			type: "custom-shadow",
			value: {
				shadowType: "dropShadow",
				radius: 48,
				color: "#1018282e",
				offsetX: 0,
				offsetY: 24,
				spread: -12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1116b4b58bade93d87fca06a22244343ec46ca61,",
					exportKey: "effect"
				}
			}
		},
		"7": {
			description: null,
			type: "custom-shadow",
			value: {
				shadowType: "dropShadow",
				radius: 64,
				color: "#10182824",
				offsetX: 0,
				offsetY: 32,
				spread: -12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b3b011ed8774bb4be58fece07833420bab6b3317,",
					exportKey: "effect"
				}
			}
		},
		outlined_light: {
			description: null,
			type: "custom-shadow",
			value: {
				shadowType: "dropShadow",
				radius: 0,
				color: "#e0e0e0ff",
				offsetX: 0,
				offsetY: 0,
				spread: 1
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a71f6fd9f6fbfadfc02a8b4e7c4f4c2d17453eb3,",
					exportKey: "effect"
				}
			}
		}
	}
};
var typography = {
	typography: {
		title: {
			fontSize: {
				type: "dimension",
				value: 96
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: -2
			},
			lineHeight: {
				type: "dimension",
				value: 108
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h1: {
			fontSize: {
				type: "dimension",
				value: 64
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: -2
			},
			lineHeight: {
				type: "dimension",
				value: 73
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h2: {
			fontSize: {
				type: "dimension",
				value: 48
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: -2
			},
			lineHeight: {
				type: "dimension",
				value: 54
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h3: {
			fontSize: {
				type: "dimension",
				value: 36
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: -1.8
			},
			lineHeight: {
				type: "dimension",
				value: 40
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h4: {
			fontSize: {
				type: "dimension",
				value: 30
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: -1.8
			},
			lineHeight: {
				type: "dimension",
				value: 36
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h5: {
			fontSize: {
				type: "dimension",
				value: 24
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 28
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h6: {
			fontSize: {
				type: "dimension",
				value: 20
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 25
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"body 1": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 21
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"body 2": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 19
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"subtitle 1": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 21
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"subtitle 2": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 19
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		overline: {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 1.2
			},
			lineHeight: {
				type: "dimension",
				value: 16
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "uppercase"
			}
		},
		caption: {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.4
			},
			lineHeight: {
				type: "dimension",
				value: 19.92
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		legal: {
			fontSize: {
				type: "dimension",
				value: 9
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 14
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		legal_url: {
			fontSize: {
				type: "dimension",
				value: 9
			},
			textDecoration: {
				type: "string",
				value: "underline"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 14
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		}
	},
	components: {
		"alert title": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"avatar initials": {
			fontSize: {
				type: "dimension",
				value: 20
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.14
			},
			lineHeight: {
				type: "dimension",
				value: 20
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"badge label": {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.14
			},
			lineHeight: {
				type: "dimension",
				value: 20
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"button large": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.46
			},
			lineHeight: {
				type: "dimension",
				value: 19
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"button small": {
			fontSize: {
				type: "dimension",
				value: 13
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.46
			},
			lineHeight: {
				type: "dimension",
				value: 22
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"input label": {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 12
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"helper text": {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.4
			},
			lineHeight: {
				type: "dimension",
				value: 20
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"input text": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		chip: {
			fontSize: {
				type: "dimension",
				value: 13
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.16
			},
			lineHeight: {
				type: "dimension",
				value: 18
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		tooltip: {
			fontSize: {
				type: "dimension",
				value: 10
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 14
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"table header": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.17
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"menu item": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"menu item dense": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.17
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"list subheader": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.1
			},
			lineHeight: {
				type: "dimension",
				value: 48
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"bottom navigation active label": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.4
			},
			lineHeight: {
				type: "dimension",
				value: 23.24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		}
	},
	component: {
		otp: {
			fontSize: {
				type: "dimension",
				value: 20
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "TWK Lausanne"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 10
			},
			lineHeight: {
				type: "dimension",
				value: 25
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		}
	}
};
var design = {
	color: color,
	grid: grid,
	font: font,
	effect: effect,
	typography: typography
};

/**
 * @file Process the design token's color settings into something ready to
 * use with MUI's `createTheme`
 **/
// Type imported JSON
var token$1 = design;
/** Pull value out of token object */
var mapColor = function (color) {
    return Object.entries(color).reduce(function (acc, cur) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[cur[0]] = cur[1].value, _a)));
    }, {});
};
/** Palette, ready to be added to theme or used on it's own */
var palette = Object.keys(token$1.color).reduce(function (acc, cur) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[cur] = mapColor(token$1.color[cur]), _a)));
}, {});

/**
 * @file Process the design token's `effect.elevation` settings into
 * something ready to use with MUI's `createTheme`
 **/
// Type imported JSON
var token = design;
var defaultTheme = createTheme({});
var customElevationLevels = ['1', '2', '3', '4', '5', '6', '7'];
/** Given an object of CSS rules, convert into box-shadow syntax */
var convertValueToStyle = function (v) {
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    return "".concat(v.offsetX, "px ").concat(v.offsetY, "px ").concat(v.radius, "px ").concat(v.spread, "px ").concat(v.color);
};
/** Box shadows, ready to be added to theme or used on it's own */
var customShadows = Object.keys(token.effect.elevation)
    .sort()
    .reduce(function (acc, cur) {
    if (!customElevationLevels.includes(cur)) {
        return acc;
    }
    if (Object.prototype.hasOwnProperty.call(token.effect.elevation[cur], 'value')) {
        var valueObj = token.effect.elevation[cur];
        return __spreadArray(__spreadArray([], acc, true), [convertValueToStyle(valueObj.value)], false);
    }
    else {
        var valueObj = token.effect.elevation[cur];
        return __spreadArray(__spreadArray([], acc, true), [
            "".concat(convertValueToStyle(valueObj['0'].value), ", ").concat(convertValueToStyle(valueObj['1'].value))
        ], false);
    }
}, ['none']);
var shadows = customShadows.concat(__spreadArray([], defaultTheme.shadows, true).slice(customShadows.length));

function GlobalStyles(props) {
  return /*#__PURE__*/jsx(GlobalStyles$1, _extends({}, props, {
    defaultTheme: defaultTheme$1
  }));
}

process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The styles you want to apply globally.
   */
  styles: PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.object, PropTypes.shape({
    __emotion_styles: PropTypes.any.isRequired
  }), PropTypes.string, PropTypes.bool])
} : void 0;

const html = (theme, enableColorScheme) => _extends({
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box',
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: '100%'
}, enableColorScheme && {
  colorScheme: theme.palette.mode
});
const body = theme => _extends({
  color: theme.palette.text.primary
}, theme.typography.body1, {
  backgroundColor: theme.palette.background.default,
  '@media print': {
    // Save printer ink.
    backgroundColor: theme.palette.common.white
  }
});
const styles = (theme, enableColorScheme = false) => {
  var _theme$components, _theme$components$Mui;

  let defaultStyles = {
    html: html(theme, enableColorScheme),
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    'strong, b': {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      '&::backdrop': {
        backgroundColor: theme.palette.background.default
      }
    })
  };
  const themeOverrides = (_theme$components = theme.components) == null ? void 0 : (_theme$components$Mui = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components$Mui.styleOverrides;

  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }

  return defaultStyles;
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiCssBaseline'
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /*#__PURE__*/jsxs(React.Fragment, {
    children: [/*#__PURE__*/jsx(GlobalStyles, {
      styles: theme => styles(theme, enableColorScheme)
    }), children]
  });
}

process.env.NODE_ENV !== "production" ? CssBaseline.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * You can wrap a node.
   */
  children: PropTypes.node,

  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: PropTypes.bool
} : void 0;

/** Our partial theme */
var mappedTheme = {
    palette: palette,
    shadows: shadows,
    // typography
};
/** Our full theme */
var theme = createTheme(__assign(__assign({}, mappedTheme), { components: {
        MuiCssBaseline: {
        // styleOverrides: fontFace
        }
    } }));
/** Theme provider, pre-filled with Spruce theme */
var ThemeProvider = function (props) {
    var children = props.children, otherProps = __rest(props, ["children"]);
    return (React__default.createElement(ThemeProvider$1, __assign({ theme: theme }, otherProps),
        React__default.createElement(CssBaseline, null),
        children));
};

export { ThemeProvider, theme as default, theme };
//# sourceMappingURL=index.js.map
