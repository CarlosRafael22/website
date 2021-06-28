import { Box, Heading, Text, Badge, Flex } from '@chakra-ui/react'
import Link from 'next/link'

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
            <Box w='600px' paddingY='1.5rem'>
                <Heading variant='h3' marginBottom='0.5rem'>{title}</Heading>
                <Text variant='b3' marginBottom='0.5rem'>{excerpt}</Text>
                <Flex>
                    <Flex marginRight='1rem'>
                        {tags.map((tag, index) => (
                            <Badge colorScheme='green' marginRight='0.5rem' verticalAlign='center' key={index}>{tag}</Badge>
                        ))}
                    </Flex>
                    <Text>{date}</Text>
                </Flex>
            </Box>
            </a>
        </Link>
    )
}

export default BlogPostPreview