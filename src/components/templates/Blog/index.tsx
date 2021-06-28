import BlogPostPreviewSection, { BlogPostPreviewSectionProps } from '../../organisms/BlogPostPreviewSection'
import Wrapper from '../Wrapper'

const Blog = ({ posts }: BlogPostPreviewSectionProps) => {
    return (
        <Wrapper>
            <BlogPostPreviewSection posts={posts} />
        </Wrapper>
    )
}

export default Blog