import PlatformLinkSection from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'PlatformLinkSection',
    component: PlatformLinkSection
} as Meta

export const Template: Story = (args) => <PlatformLinkSection {...args} />