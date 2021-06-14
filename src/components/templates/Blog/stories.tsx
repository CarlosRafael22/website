import Blog from '.'
import { Story, Meta } from '@storybook/react'
import { Default } from '../../organisms/BlogPostPreviewSection/stories'

export default {
    title: 'Blog',
    component: Blog
} as Meta

export const Template: Story = (args) => <Blog {...Default.args} />