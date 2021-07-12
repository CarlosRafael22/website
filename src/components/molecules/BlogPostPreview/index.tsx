import { Box, Heading, Text, Badge, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import BlogPostMetaData from '../BlogPostMetaData'

export type BlogPostPreviewProps = {
    title: string,
    excerpt: string,
    date: string,
    slug: string,
    tags: string[]
}

const BlogPostPreview = ({ title, excerpt, date, slug, tags }: BlogPostPreviewProps) => {

    return (
        <Link href={`/posts/${slug}`}>
            <a>
            <Box w={['100%', '600px']} paddingY='1.5rem'>
                <Heading variant='h3' marginBottom='0.5rem'>{title}</Heading>
                <Text variant='b3' marginBottom='0.5rem'>{excerpt}</Text>
                <BlogPostMetaData tags={tags} date={date} type='postPreview' />
            </Box>
            </a>
        </Link>
    )
}

export default BlogPostPreview