import { Story, Meta } from '@storybook/react'
import { Box } from '@chakra-ui/react'
import BlogPostHeader, { BlogPostHeaderProps } from '.'

export default {
    title: 'BlogPostHeader',
    component: BlogPostHeader
} as Meta

const Template: Story<BlogPostHeaderProps> = (args) => (
        <BlogPostHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
    coverImage: {
        fileName: "Guide to Headless CMS and SEO with GraphCMS.png",
        url: "https://media.graphcms.com/nBXp7o4Sfiz8zkMf0Bu9"
    },
    title: "Technical SEO with GraphCMS",
    date: "2020-05-05",
    tags: ["SEO", "GraphCMS", "Tech", "Coding"]
}