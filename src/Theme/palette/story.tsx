import React from 'react'
import { theme } from '../index'

/** Default sort */
const sortingArr = [
  'primary',
  'secondary',
  'info',
  'warning',
  'error',
  'success'
].reverse()

/** Keys of `theme.palette` that are constants or functions, not color objects */
const nonColors = [
  'mode',
  'augmentColor',
  'contrastThreshold',
  'divider',
  'getContrastText',
  'tonalOffset'
]

/** Normal color objects */
const colors = Object.keys(theme.palette)
  .sort((a, b) => sortingArr.indexOf(b) - sortingArr.indexOf(a))
  .reduce(
    (acc, cur) => ({
      ...acc,
      ...(nonColors.includes(cur) ? null : { [cur]: theme.palette[cur] })
    }),
    {}
  )

const Color = ({ mapping, value }) => (
  <div style={{ margin: '24px' }}>
    <div
      style={{
        backgroundColor: value,
        display: 'block',
        height: /.main$/.test(mapping) ? '10em' : '4em',
        width: /.main$/.test(mapping) ? '10em' : '4em',
        marginBottom: '0.3em',
        borderRadius: '5px',
        border: '1px solid lightgray'
      }}
    />
    <span>{value}</span>
    <br />
    <span>{mapping}</span>
    <br />
  </div>
)

const ColorObj = ({ mapping, obj }) => {
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid black',
        padding: '12px',
        width: 'fit-content',
        margin: '12px'
      }}
    >
      <div style={{ textTransform: 'capitalize', position: 'absolute' }}>
        {mapping.slice(mapping.lastIndexOf('.') + 1)}
      </div>
      {obj.main ? (
        <div>
          <Color mapping={mapping + '.main'} value={obj.main} />
        </div>
      ) : null}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {Object.keys(obj)
          .filter((k) => k !== 'main')
          .map((k) => (
            <Color
              key={mapping + '.' + k}
              mapping={mapping + '.' + k}
              value={obj[k]}
            />
          ))}
      </div>
    </div>
  )
}

console.log({ theme: theme.palette, colors })

const Palette = () => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(colors).map((color) => {
        return (
          <ColorObj
            key={'theme.pallete.' + color}
            mapping={'theme.pallete.' + color}
            obj={colors[color]}
          />
        )
      })}
    </ul>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Theme/Palette',
  component: Palette,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <Palette />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
