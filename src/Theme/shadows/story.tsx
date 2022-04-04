import React from 'react'

import { theme } from '../index'
import Box from '@mui/material/Box'

const ShadowDisplay = () => {
  return (
    <ul>
      {theme.shadows.map((shadow, idx) => {
        return (
          <div key={shadow} style={{ padding: 24 }}>
            <Box
              sx={{ boxShadow: idx, width: '10em', height: '10em', mb: 1 }}
            ></Box>
            <span>{`theme.shadow[${idx}]`}</span>
          </div>
        )
      })}
    </ul>
  )
}

export default {
  title: 'Spruce/Theme/Shadows',
  component: ShadowDisplay
}

const Template = () => <ShadowDisplay />

export const Default = Template.bind({})
Default.args = {}
