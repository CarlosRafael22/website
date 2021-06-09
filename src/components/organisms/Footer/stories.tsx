import Footer from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'Footer',
    component: Footer
} as Meta

export const Template: Story = (args) => <Footer {...args} />