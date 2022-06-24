import React from 'react'

import LegalFooter from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/LegalFooter',
  component: LegalFooter,
}

type LegalFooterStoryProps = {
  isScreenSizeMobile: boolean
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: LegalFooterStoryProps) => {
  const { isScreenSizeMobile } = args;

  return (
    <div style={{ maxWidth: isScreenSizeMobile ? '288px' : '327px', margin: '0px auto' }}>
      <LegalFooter />
    </div>
  )
}

export const Default = Template.bind({})

export const MobileScreenSize = Template.bind({});

MobileScreenSize.args = {
  isScreenSizeMobile: true
}
