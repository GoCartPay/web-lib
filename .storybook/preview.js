import { muiTheme } from 'storybook-addon-material-ui5'
import theme, { ThemeProvider } from '../src/Theme'

export const decorators = [
  muiTheme([theme]),
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
