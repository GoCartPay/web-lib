module.exports = {
  stories: [
    '../**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../**/stories.@(js|jsx|ts|tsx|mdx)',
    '../stories.@(js|jsx|ts|tsx|mdx)',
    '../**/*.story.@(js|jsx|ts|tsx|mdx)',
    '../**/story.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-interactions',
    'storybook-addon-material-ui5'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  features: {
    emotionAlias: false,
  },
}
