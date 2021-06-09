import PlatformLink, { PlatformLinkProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'PlatformLink',
    component: PlatformLink,
    argTypes: {
        platform: {
          options: ['linkedin', 'dev', 'twitter', 'github', 'email'],
          control: { type: 'radio' }
        }
      }
} as Meta

const Template: Story<PlatformLinkProps> = (args) => <PlatformLink {...args} />

export const Default = Template.bind({})
Default.args = {
    platform: 'linkedin',
    link: 'https://dev.to/carlosrafael22'
}