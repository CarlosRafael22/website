import { Box } from '@chakra-ui/react'
import BlogPostPreview, { BlogPostPreviewProps } from '../../molecules/BlogPostPreview'

export type BlogPostPreviewSectionProps = {
    posts: BlogPostPreviewProps[]
}

const BlogPostPreviewSection = ({ posts }: BlogPostPreviewSectionProps) => {

    return (
        <Box paddingX={['1rem', 0]}>
            {
                posts.map((post, index) => (
                    <BlogPostPreview {...post} key={index} />
                ))
            }
        </Box>
    )
}

export default BlogPostPreviewSection