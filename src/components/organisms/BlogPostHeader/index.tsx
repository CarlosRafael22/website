import { Box, Heading, Text, Badge, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import BlogPostMetaData from '../../molecules/BlogPostMetaData'

export type BlogPostHeaderProps = {
    title: string,
    date: string,
    tags: string[],
    coverImage: any
}

const BlogPostHeader = ({title, date, tags, coverImage}: BlogPostHeaderProps) => {
    return (
        <Box w={['100vw', '50vw']}>
            <Image src={coverImage.url} alt={coverImage.fileName} width='800' height='300' />
            <Box marginY='1rem'>
                <Heading variant='h1'>{title}</Heading>
                <BlogPostMetaData tags={tags} date={date} type='postHeader' />
            </Box>
        </Box>
    )
}

export default BlogPostHeader