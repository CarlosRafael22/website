import ProfileSection from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'ProfileSection',
    component: ProfileSection
} as Meta

export const Template: Story = (args) => <ProfileSection {...args} />