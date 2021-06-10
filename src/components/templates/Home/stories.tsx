import Home from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'Home',
    component: Home
} as Meta

export const Template: Story = (args) => <Home {...args} />