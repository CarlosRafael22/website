import { Story, Meta } from '@storybook/react'
import { Box } from '@chakra-ui/react'
import BlogPostMetaData, { BlogPostMetaDataProps } from '.'

export default {
    title: 'BlogPostMetaData',
    component: BlogPostMetaData,
    argTypes: {
        type: {
          options: ['postHeader', 'postPreview'],
          control: { type: 'radio' }
        }
      }
} as Meta

const Template: Story<BlogPostMetaDataProps> = (args) => (
    <Box w={['100vw', '50vw']}>
        <BlogPostMetaData {...args} />
    </Box>
)

export const Default = Template.bind({})
Default.args = {
    date: "2020-05-05",
    tags: ["SEO", "GraphCMS", "Tech", "Coding"],
    type: 'postHeader'
}