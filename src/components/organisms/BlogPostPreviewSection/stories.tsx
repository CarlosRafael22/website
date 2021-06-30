import BlogPostPreviewSection, { BlogPostPreviewSectionProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'BlogPostPreviewSection',
    component: BlogPostPreviewSection
} as Meta

const Template: Story<BlogPostPreviewSectionProps> = (args) => <BlogPostPreviewSection {...args} />

export const Default = Template.bind({})
Default.args = {
    posts: [
        {
            title: 'Connecting Multiple Platforms Together',
            slug: 'connecting-multiple-platforms',
            date: '2020-05-15',
            excerpt: 'Your websites and mobile apps should seamlessly distribute content from a single Content Hub.',
            tags: ['SEO', 'Journey', 'Frontend']
        },
        {
            title: 'GraphQL Schema Stitching',
            slug: 'graphql-schema-stitching',
            date: '2020-05-13',
            excerpt: 'Have you heard about schema stitching yet? Wonder what it is, when to use it or why? This is the post to get you.',
            tags: ['SEO', 'Journey', 'Frontend']
        },
        {
            title: 'Union Types and Sortable Relations with GraphCMS',
            slug: 'union-types-and-sortable-relations',
            date: '2020-05-01',
            excerpt: 'Learn more about Polymorphic Relations and Sortable Relations with GraphCMS',
            tags: ['SEO', 'Journey', 'Frontend']
          }
    ]

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