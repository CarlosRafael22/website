import BlogPostPreview, { BlogPostPreviewProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'BlogPostPreview',
    component: BlogPostPreview
} as Meta

const Template: Story<BlogPostPreviewProps> = (args) => <BlogPostPreview {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'GraphQL Schema Stitching',
    slug: 'graphql-schema-stitching',
    date: '2020-05-13',
    excerpt: 'Have you heard about schema stitching yet? Wonder what it is, when to use it or why? This is the post to get you.',
    tags: ['SEO', 'Journey', 'Frontend']
}

Default.parameters = {
    backgrounds: {
        default: 'default',
        values: [
            {
                name: 'default',
                value: '#F3F3F3'
            }
        ]
      }
}