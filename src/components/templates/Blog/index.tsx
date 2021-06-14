import { Box, Flex } from '@chakra-ui/react'
import Header from '../../organisms/Header'
import BlogPostPreviewSection, { BlogPostPreviewSectionProps } from '../../organisms/BlogPostPreviewSection'
import Footer from '../../organisms/Footer'

const Blog = ({ posts }: BlogPostPreviewSectionProps) => {
    return (
        <Box>
            <Header />
            <Flex w='100vw' bgColor='bgGray' justifyContent='center' alignItems='center'>
                <BlogPostPreviewSection posts={posts} />
            </Flex>
            <Footer />
        </Box>
    )
}

export default Blog