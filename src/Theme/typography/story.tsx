import React from 'react'

import { theme } from '../index'

/** Default sort */
const sortingArr = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'title',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2'
].reverse()

/** Keys of `theme.palette` that are constants or functions, not color objects */
const nonTypography = [
  'fontFamily',
  'fontSize',
  'fontWeightBold',
  'fontWeightLight',
  'fontWeightMedium',
  'fontWeightRegular',
  'htmlFontSize',
  'pxToRem'
]

/** Normal color objects */
const colors = Object.keys(theme.typography)
  .sort((a, b) => sortingArr.indexOf(b) - sortingArr.indexOf(a))
  .reduce(
    (acc, cur) => ({
      ...acc,
      ...(nonTypography.includes(cur) ? null : { [cur]: theme.typography[cur] })
    }),
    {}
  )

const Color = ({ mapping, value }) => {
  console.log({ mapping, value })
  return (
    <div style={{ margin: '24px' }}>
      <div style={{ ...value, lineHeight: null }}>
        {'Pack my box with five dozen liquor jugs'}
      </div>
      {/* <span>{value}</span> */}
      <br />
      <span>{mapping}</span>
      <br />
    </div>
  )
}

console.log({ theme, colors })

const Palette = () => {
  return (
    <ul>
      {Object.keys(colors).map((color) => {
        console.log({ color, val: colors[color] })
        return (
          <Color
            key={'theme.typography' + color}
            mapping={'theme.typography.' + color}
            value={colors[color]}
          />
        )
      })}
    </ul>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Theme/Typography',
  component: Palette
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Palette {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  labelText: 'Button'
}
