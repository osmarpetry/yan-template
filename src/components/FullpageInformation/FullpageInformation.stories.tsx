import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FullpageInformation, { FullpageInformationProps } from './'

export default {
  title: 'FullpageInformation',
  component: FullpageInformation
} as Meta

const Template: Story<FullpageInformationProps> = (args) => (
  <FullpageInformation {...args} />
)

export const FullpageInformationStandard = Template.bind({})
FullpageInformationStandard.args = {
  title: 'Website in works',
  description: 'Come back later'
}
